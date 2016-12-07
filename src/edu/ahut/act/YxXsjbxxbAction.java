package edu.ahut.act;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxb;
import edu.ahut.service.ViewXxJxdwService;
import edu.ahut.service.YxXsjbxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class YxXsjbxxbAction extends ActionSupport{

	private static final long serialVersionUID = -707639769157232528L;
	static private String filter = null;
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private YxXsjbxxbService yxXsjbxxbService;
	private ViewXxJxdwService viewXxJxdwService;
	private File upload;
	private String msg;
	private long fileSize;
	private boolean success;
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

	public YxXsjbxxbAction(){
		this.yxXsjbxxbService = (YxXsjbxxbService) SpringContextUtil.getBean("YxXsjbxxbServiceImpl");
		viewXxJxdwService = (ViewXxJxdwService) SpringContextUtil.getBean("ViewXxJxdwServiceImpl");
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

	public File getUpExcle() {
		return upExcle;
	}

	public void setUpExcle(File upExcle) {
		this.upExcle = upExcle;
	}

	public YxXsjbxxbService getWebUserService() {
		return yxXsjbxxbService;
	}

	public void setYxXsjbxxbService(YxXsjbxxbService yxXsjbxxbServiceImpl) {
		this.yxXsjbxxbService = yxXsjbxxbServiceImpl;
	}
	
	public ViewXxJxdwService getViewXxJxdwService() {
		return viewXxJxdwService;
	}

	public void setViewXxJxdwService(ViewXxJxdwService viewXxJxdwService) {
		this.viewXxJxdwService = viewXxJxdwService;
	}

	public void getImage(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			YxXsjbxxb yxXsjbxxb = yxXsjbxxbService.findById(Long.parseLong(json.getString("id")));
			byte[] zp = yxXsjbxxb.getZp();
			HttpServletResponse response = ServletActionContext
					.getResponse();

			response.reset();
			response.setHeader("Pragma","No-cache");  
			response.setHeader("Cache-Control","no-cache");  
			response.setDateHeader("Expires", 0); 
			OutputStream output=response.getOutputStream();  
			output.write(zp);
			output.flush();  
			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
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
		Page<YxXsjbxxb> pageList = yxXsjbxxbService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return "list";
//		return SUCCESS;
	}
	
	
	public String Add() {
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			YxXsjbxxb yxXsjbxxb = (YxXsjbxxb) JSONObject.toBean(json,
					YxXsjbxxb.class);
			
			if(upload != null){
				FileInputStream fis = new FileInputStream(upload);
				byte[] imgBytes = new byte[(int)upload.length()];
				fis.read(imgBytes);
				yxXsjbxxb.setZp(imgBytes);
				fis.close();
			}
		
			yxXsjbxxbService.add(yxXsjbxxb);
			this.setSuccess(true);
		} catch (Exception e) {
			this.setSuccess(false);
			e.printStackTrace();
		}
		return SUCCESS;
		}

	public String Edit() {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			try {			
				
				YxXsjbxxb yxXsjbxxb = (YxXsjbxxb) JSONObject.toBean(json,
						YxXsjbxxb.class);
				String zkzh = yxXsjbxxb.getZkzh();
				if(upload != null){
					if(imgXszpUpload(zkzh)){
						FileInputStream fis = new FileInputStream(upload);
						byte[] imgBytes = new byte[(int)upload.length()];
						fis.read(imgBytes);
						yxXsjbxxb.setZp(imgBytes);
						fis.close();
					}
				}else{
					YxXsjbxxb oldYxXsjbxxb = yxXsjbxxbService.getXsJbxx(json.getString("zkzh"));
					yxXsjbxxb.setZp(oldYxXsjbxxb.getZp());
				}
			
				yxXsjbxxbService.update(yxXsjbxxb);
				result.setSuccess(true);
			} catch (Exception e) {
				e.printStackTrace();
				result.setSuccess(false);
				this.setSuccess(false);
			}
			this.setSuccess(true);
			yxXsjbxxbService.delAllFile(ServletActionContext.getServletContext().getRealPath("/")+ "/uploadfiles/temp/upZp");
			return SUCCESS;
		}

	private boolean imgXszpUpload(String zkzh){
		try {
			String fileName = zkzh;
			String fileUrl = ServletActionContext.getServletContext()
					.getRealPath("/") + "/uploadfiles/temp/upZp/" + fileName + ".jpg";
			File file = new File(ServletActionContext.getServletContext()
					.getRealPath("uploadfiles/temp/upZp") + "/" + fileName + ".jpg");
			if(file.exists()){
				FileUtils.forceDelete(file);
				File upFile = new File(fileUrl);
				copy(upload, upFile);
			}else{
				File upFile = new File(fileUrl);
				copy(upload, upFile);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	private static void copy(File upload, File dst) {
		try {
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new FileInputStream(upload);
				out = new FileOutputStream(dst);
				int len = 0;

				byte[] buffer = new byte[1024];
				while ((len = in.read(buffer)) > 0) {
					out.write(buffer, 0, len);
				}
			} finally {
				if (null != in) {
					in.close();
				}
				if (null != out) {
					out.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public String BackupData(){
		try {
			String dataTable = "YX_XSJBXXB";
			String dataTableHistory = "YX_XSJBXXB_H";
			if(yxXsjbxxbService.backup(dataTable, dataTableHistory)){
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
	
	public String DeleteData(){
		try {
			String dataTable = "YX_XSJBXXB";
			String dataTableHistory = "YX_XSJBXXB_H";
			if(yxXsjbxxbService.deleteData(dataTable, dataTableHistory)){
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
	
	public String FileUpExcel() {
		return "pfileUpExcelData";
	}
	
	public String FileUpZp() {
		return "pfileUpZp";
	}
	
	public String FileDownloadZp() {
		return "pfileDownloadZp";
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
				List<?> tList = yxXsjbxxbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
public String getYxXsjbxx() {
		
		String zkzh = ServletActionContext.getRequest().getParameter("zkzh");
		ArrayList<YxXsjbxxb> arrayList = new ArrayList<YxXsjbxxb>();
		try {
			YxXsjbxxb prdErpData = yxXsjbxxbService.getXsJbxx(zkzh);
			arrayList.add(prdErpData);
			result = new JsonResult(arrayList, arrayList.size());
			this.setSuccess(true);
		} catch (Exception e) {
			this.setSuccess(false);
			this.setMsg("读取数据失败！");
		}
		return SUCCESS;
	}

public String EditZt() {
	try {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		YxXsjbxxb xsjbxx = (YxXsjbxxb) JSONObject.toBean(json,YxXsjbxxb.class);
	    yxXsjbxxbService.update(xsjbxx);
		result.setSuccess(true);
		this.setSuccess(true);
	} catch (Exception e) {
		result.setSuccess(false);
		this.setSuccess(false);
		e.printStackTrace();
	}
	return SUCCESS;
}


public void toDownTemp(){
	String fileUrl = ServletActionContext.getServletContext().getRealPath("/")+ "/uploadfiles/yxsj/YxsjTemp.xls";
	File file = new File(fileUrl);
	String fileName = "YxsjTemp.xls";
	if (file.exists()) {
		try {
			HttpServletResponse response = ServletActionContext.getResponse();
			InputStream fis = new BufferedInputStream(new FileInputStream(file));
			byte[] buf = new byte[1024];
			int len = 0;
			response.reset();
			response.setCharacterEncoding("UTF-8");
			response.addHeader("Content-Disposition", "attachment;filename=" + 
					new String(fileName.getBytes("UTF-8"),"ISO-8859-1"));
			response.setContentType("application/octet-stream");
			OutputStream out = response.getOutputStream();
			while ((len = fis.read(buf)) > 0)
				out.write(buf, 0, len);
			out.flush();
			fis.close();
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}


public String getAllLqxy(){
	try {
		List<?> list = viewXxJxdwService.getAll(filter,null);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
	} catch (Exception e) {
		e.printStackTrace();
		result.setSuccess(false);
	}
	return "list";
//	return SUCCESS;
}

}
