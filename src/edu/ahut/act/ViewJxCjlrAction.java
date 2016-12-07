package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjlr;
import edu.ahut.model.WebUser;
import edu.ahut.service.ViewJxCjlrService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewJxCjlrAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewJxCjlrService viewJxCjlrService;
	private JsonResult result = new JsonResult();
	
	public ViewJxCjlrAction(){
		viewJxCjlrService = (ViewJxCjlrService) SpringContextUtil.getBean("ViewJxCjlrServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewJxCjlrAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxCjlrService getViewJxCjlrService() {
		return viewJxCjlrService;
	}

	public void setViewJxCjlrService(ViewJxCjlrService viewJxCjlrService) {
		this.viewJxCjlrService = viewJxCjlrService;
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
		Page<ViewJxCjlr> pageList = viewJxCjlrService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String getAll(){
		try {
			WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
			String gh = webUser.getGh();
			filter = "zjjsh = '" + gh + "'";
			List<?> list = viewJxCjlrService.getAll(filter,null);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String getKcxx() {
		String kch = ServletActionContext.getRequest().getParameter("kch");
		String zjjsh = ServletActionContext.getRequest().getParameter("zjjsh");
		String order ="";
		String filter = "kch ='"+kch+"' and zjjsh ='"+zjjsh+"'";
		try{
			List<ViewJxCjlr> list =  (List<ViewJxCjlr>)this.viewJxCjlrService.Query(filter,order);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	

}
