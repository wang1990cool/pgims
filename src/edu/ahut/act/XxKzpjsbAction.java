package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXxKzpjsb;
import edu.ahut.model.XxKzpjsb;
import edu.ahut.service.XxKzpjsbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XxKzpjsbAction extends ActionSupport{
	

	private static final long serialVersionUID = 8669307733221245613L;
	  static private String filter = null;
	private JsonResult result = new JsonResult();
	private String filters;
	private String order;
	private List<?> datas;
	private XxKzpjsbService xxKzpjsbService;
	
	public XxKzpjsbAction() {
		this.xxKzpjsbService = (XxKzpjsbService) SpringContextUtil.getBean("XxKzpjsbServiceImpl");
	}

	public String getFilters() {
		return filters;
	}

	public void setFilters(String filters) {
		this.filters = filters;
	}


	public String getOrder() {
		return order;
	}


	public void setOrder(String order) {
		this.order = order;
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


	public XxKzpjsbService getXxKzpjsbService() {
		return xxKzpjsbService;
	}

	public void setXxKzpjsbService(XxKzpjsbService xxKzpjsbService) {
		this.xxKzpjsbService = xxKzpjsbService;
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
//		String xn = (String) ActionContext.getContext().getSession().get("xn");
//		String xq = (String) ActionContext.getContext().getSession().get("xq");
//		
//		xn = 	 "'" + xn.replace(",","','") + "'";
//		xq = 	 "'" + xq.replace(",","','") + "'";
//		String filter = "xn='" + xn + "' and xq='" + xq + "'";
		
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewXxKzpjsb> pageList = xxKzpjsbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}

}
