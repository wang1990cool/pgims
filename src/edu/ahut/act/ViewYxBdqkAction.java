package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxBdqk;
import edu.ahut.service.ViewYxBdqkService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewYxBdqkAction extends ActionSupport{

	private static final long serialVersionUID = -707639769157232528L;
	static private String filter = null;
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private ViewYxBdqkService viewYxBdqkService;
	private String msg;
	private long fileSize;
	private boolean success;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public static String getFilter() {
		return filter;
	}

	public ViewYxBdqkAction(){
		this.viewYxBdqkService = (ViewYxBdqkService) SpringContextUtil
				.getBean("ViewYxBdqkServiceImpl");
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	
	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	
	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewYxBdqkService getWebUserService() {
		return viewYxBdqkService;
	}

	public void setViewYxBdqkService(ViewYxBdqkService viewYxBdqkServiceImpl) {
		this.viewYxBdqkService = viewYxBdqkServiceImpl;
	}

	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if(sort != null && dir !=null) {
			order = sort + " " + dir;
		}	
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewYxBdqk> pageList = viewYxBdqkService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return SUCCESS;
	}
	
	public String GetXNXQ(){
		try {
			List<?> list = viewYxBdqkService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
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
				List<?> tList = viewYxBdqkService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
}
