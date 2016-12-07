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
import edu.ahut.model.RsJgxxb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.RsJgxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class RsJgxxbAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7501927930518725586L;
	static private String filter = null;
	private List<?> datas;
	private RsJgxxbService rsJgxxbService;
	private JsonResult result = new JsonResult();
	private String msg;
	private File upload;
	private long fileSize;
	private String uploadPath;
	private boolean success;
	
	public RsJgxxbAction(){
		rsJgxxbService = (RsJgxxbService) SpringContextUtil.getBean("RsJgxxbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public RsJgxxbService getRsJgxxbService() {
		return rsJgxxbService;
	}

	public void setRsJgxxbService(RsJgxxbService rsJgxxbService) {
		this.rsJgxxbService = rsJgxxbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
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

	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}

	public String getUploadPath() {
		return uploadPath;
	}

	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public static void setFilter(String filter) {
		RsJgxxbAction.filter = filter;
	}

	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()	.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter(
				"params");
//		if(searchParams != "" && searchParams !=null){
//			JSONObject jsonParam = JSONObject.fromObject(searchParams);
//			startNo = jsonParam.getInt("start");
//		}
		String filter = this.getJgFilter();
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<RsJgxxb> pageList = rsJgxxbService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return "list";
	}
	
	public String GetAll(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()	.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<RsJgxxb> pageList = rsJgxxbService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		this.setSuccess(true);
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0)); 
		try {
			RsJgxxb jgxx = (RsJgxxb) JSONObject.toBean(json, RsJgxxb.class);
			/*照片添加*/
			if(upload != null){
				FileInputStream fis = new FileInputStream(upload);
				byte[] imgBytes = new byte[(int)upload.length()];
				fis.read(imgBytes);
				jgxx.setZp(imgBytes);
				fis.close();
			}
			rsJgxxbService.add(jgxx);
			result.setSuccess(true);

			this.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			this.setSuccess(false);
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		System.out.println(json.toString());
		try {
			RsJgxxb rsJgxx = (RsJgxxb) JSONObject.toBean(json, RsJgxxb.class);
            
			if(upload != null){
//				if(upload.length() > fileSize){
//					this.setMsg("上传文件超过大小限制！文件大小限制：" + fileSize/1024 + "KB");
//					result.setSuccess(false);
//					return SUCCESS;
//				}
				FileInputStream fis = new FileInputStream(upload);
				byte[] imgBytes = new byte[(int)upload.length()];
				fis.read(imgBytes);
				rsJgxx.setZp(imgBytes);
				fis.close();
			}else {
				RsJgxxb oldRsJgxxb = rsJgxxbService.findByGh(json.getString("gh"));
				rsJgxx.setZp(oldRsJgxxb.getZp());
			}
			
			rsJgxxbService.update(rsJgxx);
			result.setSuccess(true);

			this.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			this.setSuccess(false);
			e.printStackTrace();
//			result.setSuccess(false);
		}
//		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Del(){
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			rsJgxxbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals("")){
					filters = CommonUtil.MergeFilter(filter, params);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = rsJgxxbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public void getImage(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			long id = Long.parseLong(json.getString("id"));
			RsJgxxb jgxx = rsJgxxbService.findbyId(id);
			byte[] zp = jgxx.getZp();
			HttpServletResponse response = ServletActionContext.getResponse();

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
	
	public String CheckByGh(){
		try {
			String gh = ServletActionContext.getRequest().getParameter("gh");
			boolean isExist = this.rsJgxxbService.checkIsExistByGh(gh);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getJgFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "szdwh='" + szdwh + "'";
			}else if( "PersonalRight".equals(webRight.getRightCode())){
				filter = "gh='" + webUser.getGh() + "'";
			}
		}
		return filter;
	}
}
