package edu.ahut.act;

import edu.ahut.dao.support.Page;
import edu.ahut.model.Document;
import edu.ahut.service.DocumentService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

import java.io.File;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class DocumentAction extends ActionSupport {
	private static final long serialVersionUID = 1156321515582340432L;

	private String filter = null;
	private List<?> datas;
	private JsonResult result = new JsonResult();
	private DocumentService docuService;
	
	public DocumentAction(){
		this.setDocuService((DocumentService) SpringContextUtil
				.getBean("DocumentServiceImpl"));
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}
	
	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}


	public DocumentService getDocuService() {
		return docuService;
	}

	public void setDocuService(DocumentService docuService) {
		this.docuService = docuService;
	}

	public String Page() {
		return "page";
	}

	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		try {
			String searchParams = ServletActionContext.getRequest()
					.getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			@SuppressWarnings("unchecked")
			Page<Document> pageList = (Page<Document>)docuService.pageQuery(startNo,
					pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),
					pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	public String menu(){
		return "menu";
	}
	
	public String main(){
		return "main";
	}
	
	public String list() {
		int startNo = 0;
    	int pageNum = 1;
    	int pageSize = 9;
    	String filter = "filetypecode=0";
    	String fileTypeCode = null;
    	String fileTypeName = null;
    	
		String pageNumStr = ServletActionContext.getRequest().getParameter("pageNum");
		String pageSizeStr = ServletActionContext.getRequest().getParameter("pageSize");
		String pagefilterStr = ServletActionContext.getRequest().getParameter("fileType");
		String fileCname = ServletActionContext.getRequest().getParameter("fileCname");
		
		
		if(pageNumStr!=null && !pageNumStr.isEmpty()){  
			pageNum = Integer.parseInt(pageNumStr); 
	    } 
		
		if(pageSizeStr!=null && !pageSizeStr.isEmpty()){  
			pageSize = Integer.parseInt(pageSizeStr); 
	    } 
		startNo = (pageNum - 1) * pageSize;
		
		if(pagefilterStr!=null && !pagefilterStr.isEmpty()){
			if(pagefilterStr.contains("_")){
				filter = "filetypecode=" + pagefilterStr.substring(0, pagefilterStr.indexOf("_"));
				fileTypeCode = pagefilterStr.substring(0, pagefilterStr.indexOf("_"));
				fileTypeName = pagefilterStr.substring(pagefilterStr.indexOf("_")+1, pagefilterStr.length());
			}else{
				filter = "filetypecode=" + pagefilterStr;
				fileTypeCode = pagefilterStr;
			}
		}
		
		if(fileCname!=null && !fileCname.isEmpty()){
			filter = filter + " and filecname like '%" + fileCname + "%'";
		}
		
		/*if(pagefilterStr!=null && !pagefilterStr.isEmpty()){
			filter = "filetypecode=" + pagefilterStr;
		}*/
		
		
    	String order = "filetime desc";
		@SuppressWarnings("unchecked")
		Page<Document> pageNewsLst = (Page<Document>)docuService.pageQuery(startNo,pageSize, filter, order); 
		ServletActionContext.getRequest().setAttribute("pageNewsLst", pageNewsLst);
		ServletActionContext.getRequest().setAttribute("pagefilterStr", pagefilterStr);
		ServletActionContext.getRequest().setAttribute("fileTypeCode", fileTypeCode);
		ServletActionContext.getRequest().setAttribute("fileTypeName", fileTypeName);
		ServletActionContext.getRequest().setAttribute("fileCname", fileCname);
		return "list";
	}

//	public String Add() {
//		try {
//			JSONObject json = JSONObject.fromObject(datas.get(0)); 
//			Document docu = (Document) JSONObject.toBean(json, Document.class);
//
//			String fileTypeCode = json.getString("fileTypeCode");
//			
//			if(!fileTypeCode.equals("")){
//				VWjlx fileType = (VWjlx)docuService.hqlQuery("from VWjlx where codeId='" + fileTypeCode + "'").get(0);
//				docu.setFileType(fileType);
//			}
//			
//			docuService.add(docu);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		
//		return SUCCESS;
//	}

	public String Del() {
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			String[] idArr = ids.split(",");
			for(String id : idArr){
				Document docu = docuService.findById(id);
				String fileName = docu.getFileName();
				docuService.delete(docu);
				File file = new File(ServletActionContext.getServletContext()
						.getRealPath("uploadfiles/docu") + "/" + fileName);

				if (file.exists()) 
					FileUtils.forceDelete(file);
			}
			
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}

//	public String Edit() {
//		try {
//			JSONObject json = JSONObject.fromObject(datas.get(0)); 
//			Document docu = (Document) JSONObject.toBean(json, Document.class);
//
//			String fileTypeCode = json.getString("fileTypeCode");
//			
//			if(!fileTypeCode.equals("")){
//				VWjlx fileType = (VWjlx)docuService.hqlQuery("from VWjlx where codeId='" + fileTypeCode + "'").get(0);
//				docu.setFileType(fileType);
//			}
//			
//			docuService.update(docu);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		
//		return SUCCESS;
//	}

	public Document Info() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		String id = json.getString("id");
		return docuService.findById(id);
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
					filters = CommonUtil.MergeFilter(null,params);
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = docuService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	
	public String fileUpload() {
		return "pfileUpload";
	}

	public String fileDelete() {
		String id = ServletActionContext.getRequest()
				.getParameter("id");
		try{
			Document docu = docuService.findById(id);
			docuService.delete(docu);
			return "pfileDelete";
		}catch(Exception e){
			e.printStackTrace(); 
			return ERROR;
		}
	}
}
