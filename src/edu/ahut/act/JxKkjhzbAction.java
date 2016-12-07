package edu.ahut.act;

import java.net.URLDecoder;
import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.AuditFlowLink;
import edu.ahut.model.JxKkjhmxb;
import edu.ahut.model.JxKkjhzb;
import edu.ahut.model.ViewKkjhKkjhmx;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebRole;
import edu.ahut.model.WebUser;
import edu.ahut.service.AuditFlowLinkService;
import edu.ahut.service.JxKkjhmxbService;
import edu.ahut.service.JxKkjhzbService;
import edu.ahut.service.ViewKkjhKkjhmxService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxKkjhzbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
    private String filter = null;
	private List<?> datas;
	private List<?> kkjhmxDatas;
	private JxKkjhzbService jxKkjhzbService;
	private JxKkjhmxbService jxKkjhmxbService;
	private ViewKkjhKkjhmxService viewKkjhKkjhmxService;
    private AuditFlowLinkService auditFlowLinkService;
	private JsonResult result = new JsonResult();
	private String kkjhh;
	private String id;
	private static String flowCode = "KKJH";
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getKkjhh() {
		return kkjhh;
	}

	public void setKkjhh(String kkjhh) {
		this.kkjhh = kkjhh;
	}

	public JxKkjhzbAction(){
		jxKkjhzbService = (JxKkjhzbService) SpringContextUtil.getBean("JxKkjhzbServiceImpl");
		jxKkjhmxbService = (JxKkjhmxbService) SpringContextUtil.getBean("JxKkjhmxbServiceImpl");
		auditFlowLinkService = (AuditFlowLinkService) SpringContextUtil.getBean("AuditFlowLinkServiceImpl");
		viewKkjhKkjhmxService = (ViewKkjhKkjhmxService) SpringContextUtil.getBean("ViewKkjhKkjhmxServiceImpl");
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public static void setFlowCode(String flowCode) {
		JxKkjhzbAction.flowCode = flowCode;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public List<?> getKkjhmxDatas() {
		return kkjhmxDatas;
	}

	public void setKkjhmxDatas(List<?> kkjhmxDatas) {
		this.kkjhmxDatas = kkjhmxDatas;
	}

	public JxKkjhzbService getJxKkjhzbService() {
		return jxKkjhzbService;
	}

	public void setJxKkjhzbService(JxKkjhzbService jxKkjhzbService) {
		this.jxKkjhzbService = jxKkjhzbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public AuditFlowLinkService getAuditFlowLinkService() {
		return auditFlowLinkService;
	}

	public void setAuditFlowLinkService(AuditFlowLinkService auditFlowLinkService) {
		this.auditFlowLinkService = auditFlowLinkService;
	}


	public ViewKkjhKkjhmxService getViewKkjhKkjhmxService() {
		return viewKkjhKkjhmxService;
	}

	public void setViewKkjhKkjhmxService(ViewKkjhKkjhmxService viewKkjhKkjhmxService) {
		this.viewKkjhKkjhmxService = viewKkjhKkjhmxService;
	}

	public JxKkjhmxbService getJxKkjhmxbService() {
		return jxKkjhmxbService;
	}

	public void setJxKkjhmxbService(JxKkjhmxbService jxKkjhmxbService) {
		this.jxKkjhmxbService = jxKkjhmxbService;
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
		String fliter = "";
		if("init".equals(operation)){
			fliter = this.initFilter();
		}else if("all".equals(operation)){
			fliter = this.shtgFilter();
		}else{
			fliter = null;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String fliters = CommonUtil.MergeFilter(fliter, searchParams);
		Page<JxKkjhzb> pageList = jxKkjhzbService.pageQuery(startNo, pageSize, fliters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(json, JxKkjhzb.class);
			jxKkjhzbService.add(kkjh);
			result.setMsg(kkjh.getId().toString());
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
			JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(json, JxKkjhzb.class);
			jxKkjhzbService.update(kkjh);
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
//				String order = jsonParam.getString("order");
//				String params = jsonParam.getString("params");
				String filters = null;
				
				String operation = jsonParam.getString("operation");
				if("add".equals(operation)){
					filters = this.initFilter();
				}else if("search".equals(operation)){
					filters= this.shtgFilter();
				}else{
					filters = null;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				
				List<ViewKkjhKkjhmx> tList = viewKkjhKkjhmxService.Query(filters, "xkzym DESC");
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
			String kkjhhs = ServletActionContext.getRequest().getParameter("ids");
			jxKkjhzbService.deleteByKkjhhss(kkjhhs);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String CheckKkjh(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(json, JxKkjhzb.class);
			boolean isExist = jxKkjhzbService.checkKkjhIsExist(kkjh);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String SubmitKkjh(){
		try {

			String kkjhh = ServletActionContext.getRequest().getParameter("kkjhh");
			if(kkjhmxDatas != null){
				jxKkjhmxbService.deleteAllByKkjhh(kkjhh);
				for (int i = 0; i < kkjhmxDatas.size(); i++) {
					JSONObject json = JSONObject.fromObject(kkjhmxDatas.get(i));
					JxKkjhmxb jhkc = (JxKkjhmxb) JSONObject.toBean(json,JxKkjhmxb.class);
					jxKkjhmxbService.add(jhkc);
				}
			}else{
				jxKkjhmxbService.deleteAllByKkjhh(kkjhh);
			}
		
			JSONObject json = JSONObject.fromObject(datas.get(0));
			JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(json, JxKkjhzb.class);
			jxKkjhzbService.submitKkjh(kkjh);
			
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetKkjhh(){
		try{
			String xnXqDwh = ServletActionContext.getRequest().getParameter("xnXqDwh");
			result.setMsg(this.jxKkjhzbService.getKkjhh(xnXqDwh));
//			setKkjhh(this.jxKkjhzbService.getKkjhh(xnXq));
			result.setSuccess(true);
		}catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Submit(){
		JSONObject auditDetailJson = JSONObject.fromObject(datas.get(0));
		JSONObject pyfaJson = JSONObject.fromObject(datas.get(1));
		try {
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss" }));
			AuditDetail auditDetail = (AuditDetail) JSONObject.toBean(auditDetailJson, AuditDetail.class);
			JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(pyfaJson, JxKkjhzb.class);
			jxKkjhzbService.submit(auditDetail,kkjh);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String UpdateZtm(){
		try {
			String kkjhh = ServletActionContext.getRequest().getParameter("kkjhh");
			String zt =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("zt"),"UTF-8");
			String ztm = ServletActionContext.getRequest().getParameter("ztm");
			result.setSuccess(jxKkjhzbService.updateZtm(kkjhh, ztm, zt));
		} catch (Exception e) {
			e.printStackTrace();
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
					webRole.getRoleCode(), JxKkjhzbAction.flowCode); //获得流程
		
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
					case "AcademyRight":{
						zt.append("'WTG','CG','DSH','TG'");
						String szdwh = webUser.getSzdwh();
						temp = " pydwh='" + szdwh + "' and ztm in (" + zt + ") ";
						break;
					}
					case "SchoolRight":{
						zt.append("'WTG','CG','DSH','TG'");
						temp = " ztm in (" + zt + ") ";
						break;
					}
					case "SuperRight":{//获得所有的培养方案
						temp = "";
						break;
					}
					case "Other":{// 其他学院的培养方案
						String[] szdwhArray = webRight.getRightFilter().split(",");
						StringBuffer szdwhStr = new StringBuffer();
						if(szdwhArray.length > 0){
							for(String szdwh:szdwhArray){
								szdwhStr.append("'" + szdwh + "',");
							}
							szdwhStr.deleteCharAt(zt.length()-1); 
							temp = " dwh in (" + szdwhStr + ") and ztm in (" + zt + ") ";
						}else{
							temp = "";
					}
				}
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
				filter = "pydwh='" + szdwh + "' and ztm='TG'";
			}
		}
		return filter;
	}
}
