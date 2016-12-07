package edu.ahut.act;

import java.io.File;
import java.util.List;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxbH;
import edu.ahut.service.YxXsjbxxbHService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class YxXsjbxxbHAction extends ActionSupport{

	private static final long serialVersionUID = -707639769157232528L;
	static private String filter = null;
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private YxXsjbxxbHService yxXsjbxxbHService;
	private String msg;
	private long fileSize;
	private boolean success = false;
	private File upExcle;

	
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public static String getFilter() {
		return filter;
	}

	public YxXsjbxxbHAction(){
		this.yxXsjbxxbHService = (YxXsjbxxbHService) SpringContextUtil
				.getBean("YxXsjbxxbHServiceImpl");
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

	public File getUpExcle() {
		return upExcle;
	}

	public void setUpExcle(File upExcle) {
		this.upExcle = upExcle;
	}

	public YxXsjbxxbHService getWebUserService() {
		return yxXsjbxxbHService;
	}

	public void setYxXsjbxxbHService(YxXsjbxxbHService yxXsjbxxbHServiceImpl) {
		this.yxXsjbxxbHService = yxXsjbxxbHServiceImpl;
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
		Page<YxXsjbxxbH> pageList = yxXsjbxxbHService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}

	

	public String DeleteData(){
		try {
			String dataTableHistory = "YX_XSJBXXB_H";
			if(yxXsjbxxbHService.truncate(dataTableHistory)){
				result.setSuccess(true);
				this.setSuccess(true);
			}else{
				result.setSuccess(false);
				this.setSuccess(false);
			}
		} catch (Exception e) {
			result.setSuccess(false);
			this.setSuccess(false);
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String UpExcle(){
		if ( !upExcle.equals("") ) {
			String dataTable = "YX_XSJBXXB_H";
			try {
				if(yxXsjbxxbHService.insert(upExcle, dataTable)){
					this.setSuccess(true);
//					result.setSuccess(true);
				}
			} catch (Exception e) {
//				yxXsjbxxbHService.truncate(dataTable);
				this.setSuccess(false);
//				result.setSuccess(false);
				
//				result.setMsg("数据导入失败，请重新导入！");
				e.printStackTrace();
			}
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
				List<?> tList = yxXsjbxxbHService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	public String FileUpExcel() {
		return "pfileUpExcel";
	}
	
}
