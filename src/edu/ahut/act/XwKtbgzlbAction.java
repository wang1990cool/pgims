package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebUser;
import edu.ahut.model.XwKtbgzlb;
import edu.ahut.service.ViewXwKtbgsqService;
import edu.ahut.service.XwKtbgzlbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XwKtbgzlbAction extends ActionSupport{

	private static final long serialVersionUID = 3580237237617022837L;
	private String filter = null;
	private List<?> datas;
	private XwKtbgzlbService xwKtbgzlbService;
	private ViewXwKtbgsqService viewXwKtbgsqService;
	private JsonResult result = new JsonResult();
	

	public XwKtbgzlbAction() {
		xwKtbgzlbService = (XwKtbgzlbService) SpringContextUtil
				.getBean("XwKtbgzlbServiceImpl");
		
	}
	
	public XwKtbgzlbService getXwKtbgzlbService() {
		return xwKtbgzlbService;
	}

	public void setXwKtbgzlbService(XwKtbgzlbService xwKtbgzlbService) {
		this.xwKtbgzlbService = xwKtbgzlbService;
	}

	public ViewXwKtbgsqService getViewXwKtbgsqService() {
		return viewXwKtbgsqService;
	}

	public void setViewXwKtbgsqService(ViewXwKtbgsqService viewXwKtbgsqService) {
		this.viewXwKtbgsqService = viewXwKtbgsqService;
	}

//	public XsJcxxbService getXsJcxxbService() {
//		return xsJcxxbService;
//	}
//
//	public void setXsJcxxbService(XsJcxxbService xsJcxxbService) {
//		this.xsJcxxbService = xsJcxxbService;
//	}
	
	
	
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

	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			XwKtbgzlb xwKtbgzlb = (XwKtbgzlb) JSONObject.toBean(json, XwKtbgzlb.class);
			xwKtbgzlbService.add(xwKtbgzlb);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			XwKtbgzlb xwKtbgzlb = (XwKtbgzlb) JSONObject.toBean(json, XwKtbgzlb.class);
			xwKtbgzlbService.update(xwKtbgzlb);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
//	public String Del() {
//		try {
//			String ids = ServletActionContext.getRequest().getParameter("ids");
//			ids = "'" + ids.replace(",","','") + "'";
//			String hql ="delete XwKtbgzlb where id in (" + ids + ")"; 
//			xwKtbgzlbService.hqlExcute(hql);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		
//		return SUCCESS;
//	}
	
//	public String List() {
//		int startNo = Integer.parseInt(ServletActionContext.getRequest()
//				.getParameter("start"));
//		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
//				.getParameter("limit"));
//		
//		String sort = ServletActionContext.getRequest().getParameter("sort");
//		String dir = ServletActionContext.getRequest().getParameter("dir");
//		String order = null;
//		if (sort != null && dir != null)
//			order = sort + " " + dir;
//		
//		String searchParams = ServletActionContext.getRequest().getParameter(
//				"params");
//		
//		String filters = CommonUtil.MergeFilter(filter,searchParams);
//		
//		Page<VJxXkzb> pageList = vJxXkzbService.pageQuery(startNo,
//				pageSize, filters, order);
//		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
//		result.setSuccess(true);
//		
//		return SUCCESS;
//	}
//	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String xm = webUser.getXm();
//		System.out.println(xm);
//		filter = "zlscr = '" + xm + "'";
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<XwKtbgzlb> pageList = xwKtbgzlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
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
				
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = xwKtbgzlbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	public String Del(){
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			xwKtbgzlbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String FileDownloadKtbg() {
		return "pfileDownloadKtbg";
	}
	
}
