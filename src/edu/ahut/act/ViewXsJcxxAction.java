package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXsJcxx;
import edu.ahut.service.ViewXsJcxxService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewXsJcxxAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewXsJcxxService ViewXsJcxxService;
	private JsonResult result = new JsonResult();
	
	public ViewXsJcxxAction(){
		ViewXsJcxxService = (ViewXsJcxxService) SpringContextUtil.getBean("ViewXsJcxxServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewXsJcxxAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewXsJcxxService getViewXsJcxxService() {
		return ViewXsJcxxService;
	}

	public void setViewXsJcxxService(ViewXsJcxxService ViewXsJcxxService) {
		this.ViewXsJcxxService = ViewXsJcxxService;
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
		Page<ViewXsJcxx> pageList = ViewXsJcxxService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String checkXh(){
		String xh =ServletActionContext.getRequest().getParameter("xh");
		String filters =  "xh ='" + xh + "'";
		try{
		
			List<ViewXsJcxx> list =  (List<ViewXsJcxx>)this.ViewXsJcxxService.Query(filters,null);
			if(list.size() == 0){
				result.setSuccess(false);
			}else{
				setResult(new JsonResult(list,list.size()));
				result.setSuccess(true);
			}
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

}
