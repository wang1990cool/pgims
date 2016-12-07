package edu.ahut.act;

import java.util.Date;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPksjb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxPksjbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxPksjAction extends ActionSupport{
	private static final long serialVersionUID = 5943216485711085702L;

	private String filter = null;
	private List<?> datas;
	private JxPksjb jxPksj;
	private JxPksjbService jxPksjbService;
	private JsonResult result = new JsonResult();;
	private Boolean success;
	
	public JxPksjAction() {
		jxPksjbService = (JxPksjbService) SpringContextUtil.getBean("JxPksjbServiceImpl");
	}
	
	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}
	
	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JxPksjb getJxPkjl() {
		return jxPksj;
	}

	public void setJxPkjl(JxPksjb jxPksj) {
		this.jxPksj = jxPksj;
	}

	public JxPksjbService getJxPksjbService() {
		return jxPksjbService;
	}

	public void setJxPksjbService(JxPksjbService jxPksjbService) {
		this.jxPksjbService = jxPksjbService;
	}
	

	public String Page() {
		return "page";
	}

	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		try {
			String filter = this.getSkxxFilter();
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			Page<JxPksjb> pageList = (Page<JxPksjb>) jxPksjbService.pageQuery(startNo,pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	
	public String GetAll(){
		List<?> list = jxPksjbService.getAll();
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String CheckSj(){
		try{
			WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
			String szdwh = webUser.getSzdwh();
			String filter = "pydwh = '" + szdwh + "'";
			String order = null;
			List<JxPksjb> list =  (List<JxPksjb>)this.jxPksjbService.Query(filter,order);
			if(list.size() > 0){
				Date date = new Date();
				
				if(date.getTime() >= list.get(0).getKssj().getTime() && date.getTime() <= list.get(0).getJssj().getTime()){
					setResult(new JsonResult(list, list.size()));
					result.setSuccess(true);
				}else{
					result.setSuccess(false);
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	

	public String toExcel() {
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String paramString = jsonParam.getString("params");
				JSONObject paramsJO = JSONObject.fromObject(paramString);
				String params = paramsJO.getString("params");
				String filters = null;
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(null,params);
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxPksjbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getSkxxFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "ggkbzm='0' and kkdwh='" + szdwh + "'";
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())){
				filter = "ggkbzm = '1'";
			}
		}
		return filter;
	}
}
