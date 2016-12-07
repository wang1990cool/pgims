package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjcx;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.ViewJxCjcxService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewJxCjcxAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewJxCjcxService viewJxCjcxService;
	private JsonResult result = new JsonResult();
	
	public ViewJxCjcxAction(){
		viewJxCjcxService = (ViewJxCjcxService) SpringContextUtil.getBean("ViewJxCjcxServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewJxCjcxAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxCjcxService getViewJxCjcxService() {
		return viewJxCjcxService;
	}

	public void setViewJxCjcxService(ViewJxCjcxService viewJxCjcxService) {
		this.viewJxCjcxService = viewJxCjcxService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	//任课教师
	public String List1(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = "xn,xq and zydm ASC";
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String gh = webUser.getGh();	
//		filter = "zjjsh = '" + gh + "'";
//		filter = filter + "and sjzt = '1'";
		filter = this.getCjcxFilter();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewJxCjcx> pageList = viewJxCjcxService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	//教学秘书
	public String List2(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = "xn,xq and zydm ASC";
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String fyh = webUser.getSzdwh();
		filter = "fyh = '" + fyh + "'";
		filter = filter + "and sjzt = '1'";
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<ViewJxCjcx> pageList = viewJxCjcxService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter(
				"excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals(""))

					filters = CommonUtil.MergeFilter(filter,params);

				else
					filters = filter;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = viewJxCjcxService.Query(filters, order);
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
	public String getCjcxFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String gh = webUser.getGh();	
//		String filter = "sjzt = '1'";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				filter = "sjzt = '1'";
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())){
				filter = "sjzt = '1'";
				break;
			}else if("PersonalRight".equals(webRight.getRightCode())){
				filter =  "sjzt = '1' and zjjsh = '" + gh + "'";
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "sjzt = '1' and fyh='" + szdwh + "'";
			}
		}
		return filter;
	}
	
}
