package edu.ahut.act;

import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxPkjlbService;
import edu.ahut.service.JxSkxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxPkkzAction extends ActionSupport{
	private static final long serialVersionUID = 5943216485711085702L;

	private String filter = null;
	private List<?> datas;
	private JxPkjlb jxPkjl;
	private JxPkjlbService jxPkjlbService;
	private	JxSkxxbService jxSkxxbService;
	private JsonResult result = new JsonResult();;
	private Boolean success;
	
	public JxPkkzAction() {
		jxPkjlbService = (JxPkjlbService) SpringContextUtil.getBean("JxPkjlbServiceImpl");
		jxSkxxbService = (JxSkxxbService) SpringContextUtil.getBean("JxSkxxbServiceImpl");
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

	public JxPkjlb getJxPkjl() {
		return jxPkjl;
	}

	public void setJxPkjl(JxPkjlb jxPkjl) {
		this.jxPkjl = jxPkjl;
	}

	public JxPkjlbService getJxPkjlbService() {
		return jxPkjlbService;
	}

	public void setJxPkjlbService(JxPkjlbService jxPkjlbService) {
		this.jxPkjlbService = jxPkjlbService;
	}
	
	public JxSkxxbService getJxSkxxbService() {
		return jxSkxxbService;
	}

	public void setJxSkxxbService(JxSkxxbService jxSkxxbService) {
		this.jxSkxxbService = jxSkxxbService;
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
			Page<JxPkjlb> pageList = (Page<JxPkjlb>) jxPkjlbService.pageQuery(startNo,pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

//	public String add() {
//		JSONObject json = JSONObject.fromObject(datas.get(0));
//		try {
//			JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(new String[] { "yyyy-MM-dd",
//							"yyyy-MM-dd HH:mm:ss" }));
//			JxPkjlb auditFlow = (JxPkjlb) JSONObject.toBean(json, JxPkjlb.class);		
//			jxPkjlbService.add(auditFlow);
//			this.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			this.setSuccess(false);
//		}
//		return SUCCESS;
//	}
//	public String edit() {
//		JSONObject json = JSONObject.fromObject(datas.get(0));
//
//		try {
//			JSONUtils.getMorpherRegistry().registerMorpher(
//					new DateMorpher(new String[] { "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss" }));
//			JxPkjlb auditFlow = (JxPkjlb) JSONObject.toBean(json, JxPkjlb.class);
//			jxPkjlbService.update(auditFlow);
//			this.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			this.setSuccess(false);
//		}
//		return SUCCESS;
//	}
//
//	public String del() {
//		try {
//			String flowCodes = ServletActionContext.getRequest().getParameter("ids");
//			jxPkjlbService.deleteByFlowCodes(flowCodes);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}

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
				List<?> tList = jxPkjlbService.Query(filters, order);
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
