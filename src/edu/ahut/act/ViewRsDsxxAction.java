package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewRsDsxx;
import edu.ahut.service.ViewRsDsxxService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

/**
 * ViewRsDsxxId entity. @author MyEclipse Persistence Tools
 */

public class ViewRsDsxxAction  extends ActionSupport {
	
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewRsDsxxService ViewRsDsxxService;
	private JsonResult result = new JsonResult();
	
	public ViewRsDsxxAction(){
		ViewRsDsxxService = (ViewRsDsxxService) SpringContextUtil.getBean("ViewRsDsxxServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewRsDsxxAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewRsDsxxService getViewRsDsxxService() {
		return ViewRsDsxxService;
	}

	public void setViewRsDsxxService(ViewRsDsxxService ViewRsDsxxService) {
		this.ViewRsDsxxService = ViewRsDsxxService;
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
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<ViewRsDsxx> pageList = ViewRsDsxxService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}

}