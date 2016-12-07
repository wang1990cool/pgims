package edu.ahut.act;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.stream.FileImageOutputStream;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import sun.net.ftp.FtpClient;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.AttachData;
import edu.ahut.model.FileInfo;
import edu.ahut.model.JxSkzlb;
import edu.ahut.model.XwKtbgzlb;
import edu.ahut.model.XwKyjlzlb;
import edu.ahut.model.XwKylwzlb;
import edu.ahut.model.XwKyzlzlb;
import edu.ahut.model.XwKyzzzlb;
import edu.ahut.model.XwZqkhzlb;
import edu.ahut.model.YxXsjbxxb;
import edu.ahut.model.ZdFwqb;
import edu.ahut.service.AttachDataService;
import edu.ahut.service.JxSkzlbService;
import edu.ahut.service.XwKyjlzlbService;
import edu.ahut.service.XwKylwzlbService;
import edu.ahut.service.XwKyzlzlbService;
import edu.ahut.service.XwKyzzzlbService;
import edu.ahut.service.YxXsjbxxbHService;
import edu.ahut.service.YxXsjbxxbService;
import edu.ahut.util.FtpUtil;
import edu.ahut.util.SpringContextUtil;

public class FileAction extends ActionSupport {
	private static final long serialVersionUID = -8172518546090969890L;
	private String uploadPath;
	private long fileSize;
	private List<?> datas;
	private boolean success = false;
	private String msg;
	private ArrayList<FileInfo> fileResult = new ArrayList<FileInfo>();

	private File[] upload;
	private String[] uploadFileName;
	private AttachDataService attachDataService;
	private String[] uploadContentType;
	private String[] formFields;
	private String filePath;
	private JxSkzlbService jxSkzlbService;
	private YxXsjbxxbHService yxXsjbxxbHService;
	private  YxXsjbxxbService yxXsjbxxbService;
	private XwKyjlzlbService xwKyjlzlbService;
	private XwKylwzlbService xwKylwzlbService;
	private XwKyzlzlbService xwKyzlzlbService;
	private XwKyzzzlbService xwKyzzzlbService;
	public FileAction() {
		attachDataService = (AttachDataService) SpringContextUtil.getBean("AttachDataServiceImpl");
		jxSkzlbService = (JxSkzlbService) SpringContextUtil.getBean("JxSkzlbServiceImpl");
		this.yxXsjbxxbHService = (YxXsjbxxbHService) SpringContextUtil.getBean("YxXsjbxxbHServiceImpl");
		this.yxXsjbxxbService = (YxXsjbxxbService) SpringContextUtil.getBean("YxXsjbxxbServiceImpl");
		xwKyjlzlbService = (XwKyjlzlbService) SpringContextUtil.getBean("XwKyjlzlbServiceImpl");
		xwKylwzlbService = (XwKylwzlbService) SpringContextUtil.getBean("XwKylwzlbServiceImpl");
		xwKyzlzlbService = (XwKyzlzlbService) SpringContextUtil.getBean("XwKyzlzlbServiceImpl");
		xwKyzzzlbService = (XwKyzzzlbService) SpringContextUtil.getBean("XwKyzzzlbServiceImpl");
	}
	
	
	public XwKyzzzlbService getXwKyzzzlbService() {
		return xwKyzzzlbService;
	}


	public void setXwKyzzzlbService(XwKyzzzlbService xwKyzzzlbService) {
		this.xwKyzzzlbService = xwKyzzzlbService;
	}


	public XwKyzlzlbService getXwKyzlzlbService() {
		return xwKyzlzlbService;
	}


	public void setXwKyzlzlbService(XwKyzlzlbService xwKyzlzlbService) {
		this.xwKyzlzlbService = xwKyzlzlbService;
	}


	public XwKylwzlbService getXwKylwzlbService() {
		return xwKylwzlbService;
	}


	public void setXwKylwzlbService(XwKylwzlbService xwKylwzlbService) {
		this.xwKylwzlbService = xwKylwzlbService;
	}


	public XwKyjlzlbService getXwKyjlzlbService() {
		return xwKyjlzlbService;
	}


	public void setXwKyjlzlbService(XwKyjlzlbService xwKyjlzlbService) {
		this.xwKyjlzlbService = xwKyjlzlbService;
	}


	public YxXsjbxxbHService getYxXsjbxxbHService() {
		return yxXsjbxxbHService;
	}


	public void setYxXsjbxxbHService(YxXsjbxxbHService yxXsjbxxbHService) {
		this.yxXsjbxxbHService = yxXsjbxxbHService;
	}
	
	public YxXsjbxxbService getYxXsjbxxbService() {
		return yxXsjbxxbService;
	}


	public void setYxXsjbxxbService(YxXsjbxxbService yxXsjbxxbService) {
		this.yxXsjbxxbService = yxXsjbxxbService;
	}


	public AttachDataService getAttachDataService() {
		return attachDataService;
	}


	public void setAttachDataService(AttachDataService attachDataService) {
		this.attachDataService = attachDataService;
	}


	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
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

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public ArrayList<FileInfo> getFileResult() {
		return fileResult;
	}

	public void setFileResult(ArrayList<FileInfo> fileResult) {
		this.fileResult = fileResult;
	}

	public File[] getUpload() {
		return upload;
	}

	public void setUpload(File[] upload) {
		this.upload = upload;
	}

	public String[] getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String[] uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String[] getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String[] uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String[] getFormFields() {
		return formFields;
	}

	public void setFormFields(String[] formFields) {
		this.formFields = formFields;
	}

	public List<?> getDatas() {
		return datas;
	}


	public void setDatas(List<?> datas) {
		this.datas = datas;
	}


	public JxSkzlbService getJxSkzlbService() {
		return jxSkzlbService;
	}


	public void setJxSkzlbService(JxSkzlbService jxSkzlbService) {
		this.jxSkzlbService = jxSkzlbService;
	}


	private static void copy(File src, File dst) {
		try {
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new FileInputStream(src);
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

	public String Upload() {
		FileInfo fileInfo = new FileInfo();
		String[] fileNames = (String[])ActionContext.getContext().getSession().get("fileName"); 
		for (int i = 0; i < upload.length; i++) {
			String fileName = null;
			if( fileNames != null && i < fileNames.length)
				fileName = fileNames[i];
			else
				fileName = System.currentTimeMillis() + uploadFileName[i].substring(uploadFileName[i].lastIndexOf("."));
			
			String fileCname = uploadFileName[i];
			String fileUrl = ServletActionContext.getServletContext().getRealPath(uploadPath) + "/" + fileName;
			SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			String uploadTime = sDateFormat.format(new java.util.Date());
			if (upload[i].length() > fileSize) {
				this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
				this.setSuccess(false);
			} else {
				fileInfo.setFileName(fileName);
				fileInfo.setFileCname(fileCname);
				fileInfo.setFileUrl(uploadPath + "/" + fileName);
				fileInfo.setUploadTime(uploadTime);
				fileResult.add(fileInfo);
				File sFile = new File(fileUrl);
				copy(upload[i], sFile);
				this.setMsg("文件上传成功！");
				this.setSuccess(true);
				this.setFilePath(uploadPath + "/" + fileName);
			}
		}
		return SUCCESS;
	}

	public void Down() {
		String fileName = ServletActionContext.getRequest().getParameter(
				"fileName");
		String fileCname = "down.pdf";
		try {
			fileCname = new String(ServletActionContext.getRequest().getParameter(
					"fileCname").getBytes("ISO8859-1"),"UTF-8");
		} catch (UnsupportedEncodingException e2) {
			e2.printStackTrace();
		}
		File file = new File(ServletActionContext.getServletContext().getRealPath(uploadPath) + "/" + fileName);

		if (file.exists()) {
			try {
				HttpServletResponse response = ServletActionContext.getResponse();
				InputStream fis = new BufferedInputStream(new FileInputStream(file));
				byte[] buf = new byte[1024];
				int len = 0;
				

				response.reset();
				response.setCharacterEncoding("UTF-8");
				response.addHeader("Content-Disposition", "attachment;filename=" + new String(fileCname.getBytes("gb2312"),"ISO8859-1"));
				response.setContentType("application/octet-stream");
				OutputStream out = response.getOutputStream();
				while ((len = fis.read(buf)) > 0)
					out.write(buf, 0, len);
				fis.close();
			} catch (IOException e) {
				e.printStackTrace();
				this.setSuccess(false);
			}
		}

		this.setSuccess(true);
	}

	public String Delete() {
		String fileName = ServletActionContext.getRequest().getParameter(
				"fileName");
		File file = new File(ServletActionContext.getServletContext()
				.getRealPath(uploadPath) + "/" + fileName);

		if (file.exists()) {
			try {
				FileUtils.forceDelete(file);
				this.setSuccess(true);
			} catch (Exception e) {
				e.printStackTrace();
				this.setSuccess(false);
			}
		}
		return SUCCESS;
	}
	
	public String UploadZl() {
		FileInfo fileInfo = new FileInfo();
	    JSONObject json = JSONObject.fromObject(datas.get(0));
		JxSkzlb skzl = (JxSkzlb) JSONObject.toBean(json, JxSkzlb.class);
		
	    String wjml =  ServletActionContext.getRequest().getParameter("wjml");
	    
	    String fileType = uploadFileName[0].substring(uploadFileName[0].lastIndexOf("."));
	    String fileName = skzl.getZlwj() + fileType;
	    String fileCname = fileName;
	    
	    String fileUrl = ServletActionContext.getServletContext().getRealPath("/") + "/" + wjml + "/" + fileName;
	    
		try {
			String ip = ServletActionContext.getRequest().getRemoteAddr();
			if (upload[0].length() > fileSize) {
				this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
				this.setSuccess(false);
			} else {
				fileInfo.setFileName(fileName);
				fileInfo.setFileCname(fileCname);
				fileInfo.setFileUrl(wjml + "/" + fileName);
				fileInfo.setUploadTime(skzl.getZlscsj().toString());
				fileResult.add(fileInfo);
	
				File sFile = new File(fileUrl);
				copy(upload[0], sFile);
				this.setMsg("文件上传成功！");
				this.setSuccess(true);
				
				skzl.setZlwjdz(wjml + "/" + fileName);
				skzl.setZlscip(ip);
				jxSkzlbService.update(skzl);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public void DownloadZl(){
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		JxSkzlb jxskzl = (JxSkzlb) JSONObject.toBean(json,JxSkzlb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + jxskzl.getZlwjdz());
		String fileType = jxskzl.getZlwjdz().substring(jxskzl.getZlwjdz().lastIndexOf("."));
		String fileName =  jxskzl.getZlwj() + fileType;
		
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
				fis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	public String DeleteZl() {
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			JxSkzlb jxskzl = (JxSkzlb) JSONObject.toBean(json,JxSkzlb.class);
			String fileUrl = ServletActionContext.getServletContext().getRealPath("/") + "/" + jxskzl.getZlwjdz();
			 File file = new File(fileUrl);
		     if(file.exists()){
		    	 jxskzl.setZlwjdz(null);
		    	 jxSkzlbService.update(jxskzl);
		    	 FileUtils.forceDelete(file);
		     }
			this.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			this.setSuccess(false);
		}
		return SUCCESS;
	}
	
	
	public String DeleteAttach() {
		try {
			if(datas != null){
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					AttachData attachData = (AttachData) JSONObject.toBean(json,AttachData.class);
					   String fileUrl = ServletActionContext.getServletContext().getRealPath("/") + "/" + attachData.getAttachUrl();
					   File file = new File(fileUrl);
					   if(file.exists()){
						   if(attachDataService.Query("billNo=?", null, new Object[]{attachData.getBillNo()}).size() >0){
							   String hql = "delete AttachData where billNo='" + attachData.getBillNo() + 
									   "' and attachName='" + attachData.getAttachName() +"'"; 
							   attachDataService.hqlExecute(hql);
						   }
						   FileUtils.forceDelete(file);
					   }
				}
			}
			this.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			this.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public void DownloadAttach(){
		String attachInfo = ServletActionContext.getRequest().getParameter("attachInfo");
		JSONObject json = JSONObject.fromObject(attachInfo);
		AttachData attachData = (AttachData) JSONObject.toBean(json,AttachData.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + attachData.getAttachUrl());
		if (file.exists()) {
			try {
				HttpServletResponse response = ServletActionContext.getResponse();
				InputStream fis = new BufferedInputStream(new FileInputStream(file));
				byte[] buf = new byte[1024];
				int len = 0;
				response.reset();
				response.setCharacterEncoding("UTF-8");
				response.addHeader("Content-Disposition", "attachment;filename=" + 
						new String(attachData.getAttachCname().getBytes("UTF-8"),"ISO-8859-1"));
				response.setContentType("application/octet-stream");
				OutputStream out = response.getOutputStream();
				while ((len = fis.read(buf)) > 0)
					out.write(buf, 0, len);
				fis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	
	public String UploadAttach() {
		FileInfo fileInfo = new FileInfo();
	    String fileNames[] = ServletActionContext.getRequest().getParameterValues("fileName");
	    String wjml = ServletActionContext.getRequest().getParameter("wjml");
	    String fileUrl = ServletActionContext.getServletContext().getRealPath("/") + "/" + wjml;
//	    if(fileType.equals("attach")){
//	    	File dir = new File(fileUrl); 
//	    	dir.mkdir();
//	    }
	    
		for (int i = 0; i < upload.length; i++) {
			String fileName = null;
			if( fileNames != null && i < fileNames.length)
				fileName = fileNames[i];
			else
				fileName = System.currentTimeMillis()
					+ uploadFileName[i].substring(uploadFileName[i].lastIndexOf("."));
			fileUrl = fileUrl + "/"+ fileName;
			String fileCname = uploadFileName[i];
			SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			String uploadTime = sDateFormat.format(new java.util.Date());

			if (upload[i].length() > fileSize) {
				this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
				this.setSuccess(false);
			} else {
				fileInfo.setFileName(fileName);
				fileInfo.setFileCname(fileCname);
				fileInfo.setFileUrl(  wjml + "/" + fileName);
				fileInfo.setUploadTime(uploadTime);
				fileResult.add(fileInfo);

				File sFile = new File(fileUrl);
				copy(upload[i], sFile);
				this.setMsg("文件上传成功！");
				this.setSuccess(true);
			}
		}
		return SUCCESS;
	}
	
	public void DownloadZqkh() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwZqkhzlb zqkhzl = (XwZqkhzlb) JSONObject.toBean(json, XwZqkhzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + zqkhzl.getZlwjdz());
		
		String fileType = zqkhzl.getZlwjdz().substring(zqkhzl.getZlwjdz().lastIndexOf("."));
		String fileName =  zqkhzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, zqkhzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
	
	
	public void DownloadJl() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwKyjlzlb ktbgzl = (XwKyjlzlb) JSONObject.toBean(json, XwKyjlzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + ktbgzl.getZlwjdz());
		
		String fileType = ktbgzl.getZlwjdz().substring(ktbgzl.getZlwjdz().lastIndexOf("."));
		String fileName =  ktbgzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, ktbgzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
	public void DownloadKtbg() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwKtbgzlb ktbgzl = (XwKtbgzlb) JSONObject.toBean(json, XwKtbgzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + ktbgzl.getZlwjdz());
		
		String fileType = ktbgzl.getZlwjdz().substring(ktbgzl.getZlwjdz().lastIndexOf("."));
		String fileName =  ktbgzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, ktbgzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
	public String UpExcel(){
			String dataTable = "YX_XSJBXXB_H";
			try {
				if(yxXsjbxxbHService.insert(upload[0], dataTable)){
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
		return SUCCESS;
	}
	
	public String UpExcelData(){
		String dataTable = "YX_XSJBXXB";
		try {
			if(yxXsjbxxbService.insert(upload[0], dataTable)){
				this.setSuccess(true);
			}
		} catch (Exception e) {
			this.setSuccess(false);
			e.printStackTrace();
		}
	return SUCCESS;
}
	
	public String UpZp() {
		FileInfo fileInfo = new FileInfo();
	    String fileNames[] = ServletActionContext.getRequest().getParameterValues("fileName");
	    String fileUrl = ServletActionContext.getServletContext().getRealPath("/")+ "/uploadfiles/temp/upZp";
	    for (int i = 0; i < upload.length; i++) {
			String fileName = null;
			if( fileNames != null && i < fileNames.length)
				fileName = fileNames[i];
			else
				fileName = System.currentTimeMillis()
					+ uploadFileName[i].substring(uploadFileName[i].lastIndexOf("."));
			fileUrl = fileUrl + "/"+ fileName;
			String fileCname = uploadFileName[i];
			SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			String uploadTime = sDateFormat.format(new java.util.Date());
			
			if (upload[i].length() > fileSize) {
				this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize / 1024 + "KB");
				this.setSuccess(false);
			} else {
				fileInfo.setFileName(fileName);
				fileInfo.setFileCname(fileCname);
				fileInfo.setFileUrl(fileName);
				fileInfo.setUploadTime(uploadTime);
				fileResult.add(fileInfo);

				File sFile = new File(fileUrl);
				copy(upload[i], sFile);
				yxXsjbxxbService.ZipContraMultiFile(fileUrl, fileUrl.substring(0,fileUrl.lastIndexOf('/')));
//				this.setMsg("照片导入成功！");
				this.setSuccess(true);
				yxXsjbxxbService.delAllFile(fileUrl.substring(0,fileUrl.lastIndexOf('/')));
				
			}
		}
		return SUCCESS;
	}
	
	
	@SuppressWarnings({ "unchecked"})
	public void DownloadZp(){
		List<YxXsjbxxb> list =  (List<YxXsjbxxb>)this.yxXsjbxxbService.getAll();
		String zpmmfs = ServletActionContext.getRequest().getParameter("zpmmfs");
		String fileName = null;
		for(int i = 0;i < list.size();i++){
			if(zpmmfs.equals("xh")){
			    fileName = list.get(i).getXh() + ".jpg";
			}else if(zpmmfs.equals("sfzh")){
				fileName = list.get(i).getSfzh() + ".jpg";
			}
			String path = ServletActionContext.getServletContext().getRealPath("/")+ "/uploadfiles/temp/downZp/"+fileName;
			byte[] zp = list.get(i).getZp();
			try {
				if(zp!=null){
					FileImageOutputStream imageOutput = new FileImageOutputStream(new File(path));
					imageOutput.write(zp, 0, zp.length);
					imageOutput.close();
				}
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
		String fileUrl = ServletActionContext.getServletContext().getRealPath("/")+ "/uploadfiles/temp/downZp";
		yxXsjbxxbService.ZipMultiFile(fileUrl, fileUrl.substring(0,fileUrl.lastIndexOf('/'))+ "/zp.zip");
		File file = new File(fileUrl.substring(0,fileUrl.lastIndexOf('/'))+ "/zp.zip");
		String zipfileName = "zp.zip";
		if (file.exists()) {
			try {
				HttpServletResponse response = ServletActionContext.getResponse();
				InputStream fis = new BufferedInputStream(new FileInputStream(file));
				byte[] buf = new byte[1024];
				int len = 0;
				response.reset();
				response.setCharacterEncoding("UTF-8");
				response.addHeader("Content-Disposition", "attachment;filename=" + 
						new String(zipfileName.getBytes("UTF-8"),"ISO-8859-1"));
				response.setContentType("application/zip");
				OutputStream out = response.getOutputStream();
				while ((len = fis.read(buf)) > 0)
					out.write(buf, 0, len);
				out.flush();
				fis.close();
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			yxXsjbxxbService.delAllFile(fileUrl);
		}
	}
	
	public void UploadKy() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwKylwzlb ktbgzl = (XwKylwzlb) JSONObject.toBean(json, XwKylwzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + ktbgzl.getZlwjdz());
		
		String fileType = ktbgzl.getZlwjdz().substring(ktbgzl.getZlwjdz().lastIndexOf("."));
		String fileName =  ktbgzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, ktbgzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
	public void DownloadZr() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwKyzlzlb ktbgzl = (XwKyzlzlb) JSONObject.toBean(json, XwKyzlzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + ktbgzl.getZlwjdz());
		
		String fileType = ktbgzl.getZlwjdz().substring(ktbgzl.getZlwjdz().lastIndexOf("."));
		String fileName =  ktbgzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, ktbgzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
	public void DownloadZz() throws IOException{
		String zlInfo = ServletActionContext.getRequest().getParameter("zlInfo");
		JSONObject json = JSONObject.fromObject(zlInfo);
		XwKyzzzlb ktbgzl = (XwKyzzzlb) JSONObject.toBean(json, XwKyzzzlb.class);
		
		String wjfwq = ServletActionContext.getRequest().getParameter("wjfwq");
		JSONObject wjfwqjson = JSONObject.fromObject(wjfwq);
		ZdFwqb zdFwqb = (ZdFwqb) JSONObject.toBean(wjfwqjson, ZdFwqb.class);
		
		File file = new File(ServletActionContext.getServletContext().getRealPath("/") + "/" + ktbgzl.getZlwjdz());
		
		String fileType = ktbgzl.getZlwjdz().substring(ktbgzl.getZlwjdz().lastIndexOf("."));
		String fileName =  ktbgzl.getZlwj() + fileType;
		
		InputStream fis = null;
		if(!file.exists()){
			FtpUtil ftpUtil = new FtpUtil();
			FtpClient ftp = FtpUtil.connectFTP(zdFwqb.getFwqip(), 21, zdFwqb.getUsername(), zdFwqb.getPassword());
			fis = new BufferedInputStream(ftpUtil.getFile(ftp, ktbgzl.getZlwjdz()));
		}else {
			fis = new BufferedInputStream(new FileInputStream(file));
		}
		
		HttpServletResponse response = ServletActionContext.getResponse();
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
		fis.close();
	}
}


