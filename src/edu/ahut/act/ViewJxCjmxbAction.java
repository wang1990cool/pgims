package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjmxb;
import edu.ahut.model.WebUser;
import edu.ahut.service.ViewJxCjmxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewJxCjmxbAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewJxCjmxbService viewJxCjmxbService;
	private JsonResult result = new JsonResult();
	
	public ViewJxCjmxbAction(){
		viewJxCjmxbService = (ViewJxCjmxbService) SpringContextUtil.getBean("ViewJxCjmxbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewJxCjmxbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxCjmxbService getViewJxCjmxbService() {
		return viewJxCjmxbService;
	}

	public void setViewJxCjmxbService(ViewJxCjmxbService viewJxCjmxbService) {
		this.viewJxCjmxbService = viewJxCjmxbService;
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
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String gh = webUser.getGh();	
		filter = "zjjsh = '" + gh + "'";
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<ViewJxCjmxb> pageList = viewJxCjmxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String getAll(){
		try {
//			WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//			String gh = webUser.getGh();	
//			filter = "zjjsh = '" + gh + "'";
			
			List<?> list = viewJxCjmxbService.getAll(filter,null);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String getCjmx() {
//		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		String order ="xh ASC";
//		String filter = "kkkh ='"+kkkh+"'";
		try{
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(null, searchParams);
			List<ViewJxCjmxb> list =  (List<ViewJxCjmxb>)this.viewJxCjmxbService.Query(filters,order);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	

}
