package edu.ahut.act;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.model.XsJcxxb;
import edu.ahut.service.XsJcxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XsJcxxbAction extends ActionSupport{

	private static final long serialVersionUID = -707639769157232528L;
	static private String filter = null;
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private XsJcxxbService xsJcxxbService;
	private String msg;
	private File upload;
	private long fileSize;
	private String uploadPath;
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

	public XsJcxxbAction(){
		this.xsJcxxbService = (XsJcxxbService) SpringContextUtil
				.getBean("XsJcxxbServiceImpl");
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public String getUploadPath() {
		return uploadPath;
	}

	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
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

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}
	
	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}


	public XsJcxxbService getWebUserService() {
		return xsJcxxbService;
	}

	public void setXsJcxxbService(XsJcxxbService xsJcxxbServiceImpl) {
		this.xsJcxxbService = xsJcxxbServiceImpl;
	}

	public void getImage(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			XsJcxxb xsJcxxb = xsJcxxbService.findById(Long.parseLong(json.getString("id")));
			byte[] rxzp = xsJcxxb.getRxzp();
			System.out.println(rxzp);
			HttpServletResponse response = ServletActionContext
					.getResponse();

			response.reset();
			response.setHeader("Pragma","No-cache");  
			response.setHeader("Cache-Control","no-cache");  
			response.setDateHeader("Expires", 0); 
			OutputStream output=response.getOutputStream();  
			output.write(rxzp);
			output.flush();  
			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter("params");
//		if(searchParams != "" && searchParams !=null){
//			JSONObject jsonParam = JSONObject.fromObject(searchParams);
//			startNo = jsonParam.getInt("start");
//		}
		filter = this.getXsFilter();
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<XsJcxxb> pageList = xsJcxxbService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return "list";
	}
	
    public String Add() {
		
	try {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		XsJcxxb xsJcxxb = (XsJcxxb) JSONObject.toBean(json,
				XsJcxxb.class);
		
		if(upload != null){
//			if (upload.length() > fileSize) {
//				result.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
//				result.setSuccess(false);
//				return SUCCESS;
//			}
			
			FileInputStream fis = new FileInputStream(upload);
			byte[] imgBytes = new byte[(int)upload.length()];
			fis.read(imgBytes);
			xsJcxxb.setRxzp(imgBytes);
			fis.close();
		}
	
		xsJcxxbService.add(xsJcxxb);
//		result.setSuccess(true);
		this.setSuccess(true);
	} catch (Exception e) {
//		result.setSuccess(false);
		this.setSuccess(false);
		e.printStackTrace();
	}
	return SUCCESS;
	}

	public String Del() {
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			xsJcxxbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return "delete";
	}

	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {			
			
			XsJcxxb xsJcxxb = (XsJcxxb) JSONObject.toBean(json,
					XsJcxxb.class);
			
			if(upload != null){
//				if(upload.length() > fileSize){
//					this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
//					result.setSuccess(false);
//					return SUCCESS;	
//				}
				
				FileInputStream fis = new FileInputStream(upload);
				byte[] imgBytes = new byte[(int)upload.length()];
				fis.read(imgBytes);
				xsJcxxb.setRxzp(imgBytes);
				fis.close();
			}else{
				XsJcxxb oldXsJcxxb = xsJcxxbService.findByXh(json.getString("xh"));
				xsJcxxb.setRxzp(oldXsJcxxb.getRxzp());
			}
		
			xsJcxxbService.update(xsJcxxb);
			
		} catch (Exception e) {
			e.printStackTrace();
			this.setSuccess(false);
		}
		this.setSuccess(true);
		return SUCCESS;
	}
	

	public XsJcxxb Info() {
		JSONObject json = JSONObject.fromObject(datas.get(0));		
		return xsJcxxbService.findById(Long.parseLong(json.getString("id")));
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
				List<?> tList = xsJcxxbService.Query(filters, order);
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
	public String getXsFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("AcademyRight".equals(webRight.getRightCode()) || "PersonalRight".equals(webRight.getRightCode())){
				filter = "fyh='" + szdwh + "'";
			}
		}
		return filter;
	}
}
