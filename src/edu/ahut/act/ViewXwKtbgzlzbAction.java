package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.ViewXwKtbgzlzb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.model.XwKtbgsqb;
import edu.ahut.service.ViewXwKtbgzlzbService;
import edu.ahut.service.XwKtbgsqbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;
import edu.ahut.dao.support.Page;

public class ViewXwKtbgzlzbAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private ViewXwKtbgzlzbService viewXwKtbgzlzbService;
	private XwKtbgsqbService xwKtbgsqbService;
	private JsonResult result = new JsonResult();
	
	public ViewXwKtbgzlzbAction(){
		viewXwKtbgzlzbService = (ViewXwKtbgzlzbService) SpringContextUtil.getBean("ViewXwKtbgzlzbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewXwKtbgzlzbService getViewXwKtbgzlzbService() {
		return viewXwKtbgzlzbService;
	}

	public void setViewXwKtbgzlzbService(ViewXwKtbgzlzbService viewXwKtbgzlzbService) {
		this.viewXwKtbgzlzbService = viewXwKtbgzlzbService;
	}

	public XwKtbgsqbService getXwKtbgsqbService() {
		return xwKtbgsqbService;
	}

	public void setXwKtbgsqbService(XwKtbgsqbService xwKtbgsqbService) {
		this.xwKtbgsqbService = xwKtbgsqbService;
	}
	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}	
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String szdwh = webUser.getSzdwh();
//		filter = " (yxsh='" + szdwh + "' and shztm in ('3','7','8')) ";
		filter=this.shtgFilter();
//		filter = " (dsh='" + webUser.getUserName() + "'and shztm in ('DSH','TG','WTG')) ";
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewXwKtbgzlzb> pageList = viewXwKtbgzlzbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	public String GetXNXQ(){
		try {
			List<?> list = viewXwKtbgzlzbService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String CheckByXh(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			boolean isExist = this.viewXwKtbgzlzbService.checkIsExistByXh(xh);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals("")){
					filters = CommonUtil.MergeFilter(filter, params).substring(1,params.length()-1);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = viewXwKtbgzlzbService.Query(filters, order);
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
	public String shtgFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("PersonalRight".equals(webRight.getRightCode())){
				filter = "(dsh='" + webUser.getUserName() + "' and shztm in ('TG','DSH','WTG'))";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = " (yxsh='" + szdwh + "' and shztm in ('TG','DSH','WTG')) ";
				break;
			}else{
				filter = " shztm in ('TG','DSH','WTG') ";
			}
		}
		return filter;
	}
}
