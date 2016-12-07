package edu.ahut.act;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AttachData;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.AuditFlowLink;
import edu.ahut.model.PyFakcb;
import edu.ahut.model.PyFazb;
import edu.ahut.model.ViewPyfaFakc;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebRole;
import edu.ahut.model.WebUser;
import edu.ahut.service.AttachDataService;
import edu.ahut.service.AuditFlowLinkService;
import edu.ahut.service.PyFakcbService;
import edu.ahut.service.PyFazbService;
import edu.ahut.service.ViewPyfaFakcService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class PyFazbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
   static private String filter = "";
	private List<?> datas;
	private List<?> pyfaDatas;
	private List<?> fakcDatas;
	private PyFazbService pyFazbService;
	private PyFakcbService pyFakcbService;
	private AttachDataService attachDataService;
    private AuditFlowLinkService auditFlowLinkService;
    private ViewPyfaFakcService viewPyfaFakcService;
	private JsonResult result = new JsonResult();
	private String  pyfah;
	private Long id;
	private static String flowCode = "PYFA";
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPyfah() {
		return pyfah;
	}

	public void setPyfah(String pyfah) {
		this.pyfah = pyfah;
	}

	public PyFazbAction(){
		pyFazbService = (PyFazbService) SpringContextUtil.getBean("PyFazbServiceImpl");
		pyFakcbService = (PyFakcbService) SpringContextUtil.getBean("PyFakcbServiceImpl");
		auditFlowLinkService = (AuditFlowLinkService) SpringContextUtil.getBean("AuditFlowLinkServiceImpl");
		attachDataService = (AttachDataService) SpringContextUtil.getBean("AttachDataServiceImpl");
		viewPyfaFakcService = (ViewPyfaFakcService) SpringContextUtil.getBean("ViewPyfaFakcServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		PyFazbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public PyFazbService getPyFazbService() {
		return pyFazbService;
	}

	public void setPyFazbService(PyFazbService pyFazbService) {
		this.pyFazbService = pyFazbService;
	}

	public AuditFlowLinkService getAuditFlowLinkService() {
		return auditFlowLinkService;
	}

	public void setAuditFlowLinkService(
			AuditFlowLinkService auditFlowLinkService) {
		this.auditFlowLinkService = auditFlowLinkService;
	}

	public AttachDataService getAttachDataService() {
		return attachDataService;
	}

	public void setAttachDataService(AttachDataService attachDataService) {
		this.attachDataService = attachDataService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public List<?> getPyfaDatas() {
		return pyfaDatas;
	}

	public void setPyfaDatas(List<?> pyfaDatas) {
		this.pyfaDatas = pyfaDatas;
	}

	public ViewPyfaFakcService getViewPyfaFakcService() {
		return viewPyfaFakcService;
	}

	public void setViewPyfaFakcService(ViewPyfaFakcService viewPyfaFakcService) {
		this.viewPyfaFakcService = viewPyfaFakcService;
	}

	public List<?> getFakcDatas() {
		return fakcDatas;
	}

	public void setFakcDatas(List<?> fakcDatas) {
		this.fakcDatas = fakcDatas;
	}

	public PyFakcbService getPyFakcbService() {
		return pyFakcbService;
	}

	public void setPyFakcbService(PyFakcbService pyFakcbService) {
		this.pyFakcbService = pyFakcbService;
	}

	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String operation = ServletActionContext.getRequest().getParameter("operation");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
	
		if("init".equals(operation)){
			filter = this.initFilter();
		}else if("all".equals(operation)){
			filter= this.shtgFilter();
		}else{
			filter = null;
		}
//		if(searchParams != "" && searchParams !=null){
//			JSONObject jsonParam = JSONObject.fromObject(searchParams);
//			startNo = jsonParam.getInt("start");
//		}
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<PyFazb> pageList = pyFazbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String GetPyfaList(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
	
		String filter= this.pyfaFilter();
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<PyFazb> pageList = pyFazbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	public String GetAll(){
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(null, searchParams);
		List<?> list = pyFazbService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			PyFazb pyfa = (PyFazb) JSONObject.toBean(json, PyFazb.class);
			pyFazbService.add(pyfa);
			setId(pyfa.getId());
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Edit(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			PyFazb pyfa = (PyFazb) JSONObject.toBean(json, PyFazb.class);
			pyFazbService.update(pyfa);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String toPyfaExcel(){
		
		return SUCCESS;
	}
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
//				String order = jsonParam.getString("order");
//				String params = jsonParam.getString("params");
				String operation = jsonParam.getString("operation");
				if("add".equals(operation)){
					filter = this.initFilter();
				}else if("search".equals(operation)){
					filter= this.shtgFilter();
				}else{
					filter = null;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				
				List<ViewPyfaFakc> tList = viewPyfaFakcService.Query(filter, "zydm DESC");
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
			String pyfahs = ServletActionContext.getRequest().getParameter("ids");
			pyFazbService.deleteByPyfahs(pyfahs);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public void DownFj(){
		String fjdz = ServletActionContext.getRequest().getParameter("fjdz");
		String[] temp = fjdz.split("/");
		String fileName = temp[temp.length -1];
		File file = new File(ServletActionContext.getServletContext().getRealPath(fjdz));

		if (file.exists()) {
			try {
				HttpServletResponse response = ServletActionContext.getResponse();
				InputStream fis = new BufferedInputStream(new FileInputStream(file));
				byte[] buf = new byte[1024];
				int len = 0;
				response.reset();
				response.setCharacterEncoding("UTF-8");
				response.addHeader("Content-Disposition", "attachment;filename=" + new String(fileName.getBytes("gb2312"),"ISO8859-1"));
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
	
	public String CheckByPyfah(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			boolean isExist = this.pyFazbService.checkIsExistByPyfah(pyfah);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String UpdateZtm(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			String zt =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("zt"),"UTF-8");
			String ztm = ServletActionContext.getRequest().getParameter("ztm");
			result.setSuccess(pyFazbService.updateZtm(pyfah, ztm, zt));
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String UpdateZt(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			if(fakcDatas != null){
				pyFakcbService.deleteAllByPyfah(pyfah);
				for (int i = 0; i < fakcDatas.size(); i++) {
					JSONObject fakcJoin = JSONObject.fromObject(fakcDatas.get(i));
					PyFakcb jhkc = (PyFakcb) JSONObject.toBean(fakcJoin,PyFakcb.class);
					pyFakcbService.add(jhkc);
				}
			}else{
				pyFakcbService.deleteAllByPyfah(pyfah);
			}
			JSONObject json = JSONObject.fromObject(datas.get(0));
			PyFazb pyfa = (PyFazb) JSONObject.toBean(json, PyFazb.class);
			pyFazbService.updateZt(pyfa);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetPyfah(){
		try{
			String bbhDwhZydm = ServletActionContext.getRequest().getParameter("bbhDwhZydm");
			setPyfah(this.pyFazbService.getPyfah(bbhDwhZydm));
			result.setSuccess(true);
		}catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String FileUpload() {
		return "pfileUpload";
	}
	
	public String FileUploadAttach() {
		return "pfileUploadAttach";
	}
	
	public String FileDeleteAttach() {
		return "pfileDeleteAttach";
	}
	
	public String FileDownloadAttach() {
		return "pfileDownloadAttach";
	}
	
	public String Submit(){
		JSONObject auditDetailJson = JSONObject.fromObject(datas.get(0));
		JSONObject pyfaJson = JSONObject.fromObject(datas.get(1));
		
		try {
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss" }));
			AuditDetail auditDetail = (AuditDetail) JSONObject.toBean(auditDetailJson, AuditDetail.class);
			PyFazb pyfa = (PyFazb) JSONObject.toBean(pyfaJson, PyFazb.class);
			pyFazbService.submit(auditDetail,pyfa);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String SaveAttach(){
		try {
			String billNo = ServletActionContext.getRequest().getParameter("billNo");
			if(datas != null){
				attachDataService.deleteAllByBillNo(billNo);
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					AttachData jhkc = (AttachData) JSONObject.toBean(json,AttachData.class);
					attachDataService.add(jhkc);
				}
			}else{
				attachDataService.deleteAllByBillNo(billNo);
			}
			if(pyfaDatas!=null){
				JSONObject pyfaJson = JSONObject.fromObject(pyfaDatas.get(0));
				PyFazb pyfa = (PyFazb) JSONObject.toBean(pyfaJson,PyFazb.class);
				pyFazbService.update(pyfa);
			}
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String initFilter(){
		String filter = "";
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String userName = (String) ActionContext.getContext().getSession().get("userName");
		WebRole webRole = webUser.getWebRole();
		List<AuditFlowLink> auditFlowLinks = auditFlowLinkService.findByRoleCodeAndFlowCode(
					webRole.getRoleCode(), PyFazbAction.flowCode); //获得流程
		StringBuffer zt = new StringBuffer();//存放能审批的状态
		if(auditFlowLinks.size() > 0 ){
			for(AuditFlowLink link:auditFlowLinks){
				zt.append("'" + link.getFlagCode() + "',");
			}
//			zt.deleteCharAt(zt.length() -1);
		}
		List<WebRight> webRights = (List<WebRight>) webRole.getWebRights(); //获得该角色具备的权利
		if(webRights.size() > 0){
			for(int i = 0 ;i < webRights.size();i++){
				WebRight webRight = webRights.get(i);
				String temp = "";
				switch(webRight.getRightCode()){
					case "PersonalRight":{
						temp = " (bzrgh='" + userName + "' and ztm in ('WTG','CG','DSH')) ";
						break;
					}
					case "AcademyRight":{// 学院权限
						zt.append("'WTG','CG','DSH','TG'");
						String szdwh = webUser.getSzdwh();
						temp = " (dwh='" + szdwh + "' and ztm in (" + zt + ") ) ";
						break;
					}
					case "SchoolRight":{//获得全校能审批的培养方案
//						if("GSJX".equals(webUser.getWebRole().getRoleCode())){
//							zt.append("'WTG','CG','DSH'");
//							temp = " (ztm in (" + zt + ") )  ";
//						}else{
//							temp = " (ztm in (" + zt + ") )  ";
//						}
						zt.append("'WTG','CG','DSH','TG'");
						temp = " (ztm in (" + zt + ") )  ";
						break;
					}
					case "SuperRight":{//获得所有的培养方案
						temp = "";
						break;
					}
//					case "Other":{// 其他学院的培养方案
//						String[] szdwhArray = webRight.getRightfilter().split(",");
//						StringBuffer szdwhStr = new StringBuffer();
//						if(szdwhArray.length > 0){
//							for(String szdwh:szdwhArray){
//								szdwhStr.append("'" + szdwh + "',");
//							}
//							szdwhStr.deleteCharAt(zt.length()-1); 
//							temp = " (dwh in (" + szdwhStr + ") and ztm in (" + zt + ")) ";
//						}else{
//							temp = "";
//					}
//				}
			}
				if(webRights.size() == 1){
					filter = temp;
				}else{
					if((i+1) == webRights.size()){
						filter += temp;
					}else{
						filter += temp + "or";
					}
				}
			}
		}
		return filter;
	}

	@SuppressWarnings("unchecked")
	public String shtgFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = "ztm = 'TG'";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode()) || "PersonalRight".equals(webRight.getRightCode())){
				filter = "dwh='" + szdwh + "' and ztm='TG'";
			}
		}
		return filter;
	}
	
	@SuppressWarnings("unchecked")
	public String pyfaFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = "ztm = 'TG'";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode()) || "PersonalRight".equals(webRight.getRightCode())){
				filter = "dwh='" + szdwh + "' and ztm='TG'";
			}
		}
		return filter;
	}
}
