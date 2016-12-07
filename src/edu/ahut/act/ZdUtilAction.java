package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.service.ZdUtilService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ZdUtilAction extends ActionSupport{

	private static final long serialVersionUID = -2646911533992453150L;
	static private String filters = "";
	private List<?> datas;
	private ZdUtilService  zdUtilService;
	private JsonResult result = new JsonResult();
	private String zdName;
	
	public ZdUtilAction(){
		zdUtilService = (ZdUtilService) SpringContextUtil.getBean("ZdUtilServiceImpl");
	}
	public static String getFilters() {
		return filters;
	}
	public static void setFilters(String filters) {
		ZdUtilAction.filters = filters;
	}
	public String getZdName() {
		return zdName;
	}
	public void setZdName(String zdName) {
		this.zdName = zdName;
	}
	public List<?> getDatas() {
		return datas;
	}
	public void setDatas(List<?> datas) {
		this.datas = datas;
	}
	public ZdUtilService getZdUtilService() {
		return zdUtilService;
	}
	public void setZdUtilService(ZdUtilService zdUtilService) {
		this.zdUtilService = zdUtilService;
	}
	public JsonResult getResult() {
		return result;
	}
	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public String GetZD(){
		try {
			String sort = ServletActionContext.getRequest().getParameter("sort");
			String dir = ServletActionContext.getRequest().getParameter("dir");
			String orders = null;
//			String searchParams = ServletActionContext.getRequest().getParameter("params");
//			String filters = CommonUtil.MergeFilter(filters, searchParams);
			if(sort != null && dir !=null) {
				orders = sort + " " + dir;
			}
			List<?> list = zdUtilService.getByModelName(zdName,orders);
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String GetZDXW(){
		try {
			List<?> list = zdUtilService.getByModelNameXW(zdName);
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
