package edu.ahut.act;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxPkjlbService;
import edu.ahut.service.JxSkxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxPkjlAction extends ActionSupport{
	private static final long serialVersionUID = 5943216485711085702L;

	private String filter = null;
	private List<?> datas;
	private List<?> ctKcList;
	private List<?> otherDatas;
	private JxPkjlb jxPkjl;
	private JxPkjlbService jxPkjlbService;
	private	JxSkxxbService jxSkxxbService;
//	private ViewSkxxPkService viewSkxxPkService;
	private JsonResult result = new JsonResult();;
	private Boolean success;
	private String occupiedCourse;
	private static String pkType;
	
	public JxPkjlAction() {
		jxPkjlbService = (JxPkjlbService) SpringContextUtil.getBean("JxPkjlbServiceImpl");
		jxSkxxbService = (JxSkxxbService) SpringContextUtil.getBean("JxSkxxbServiceImpl");
//		viewSkxxPkService = (ViewSkxxPkService) SpringContextUtil.getBean("viewSkxxPkServiceImpl");
	}
	
	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}
	
	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public List<?> getCtKcList() {
		return ctKcList;
	}

	public void setCtKcList(List<?> ctKcList) {
		this.ctKcList = ctKcList;
	}


	public List<?> getOtherDatas() {
		return otherDatas;
	}

	public void setOtherDatas(List<?> otherDatas) {
		this.otherDatas = otherDatas;
	}

	public JxPkjlb getJxPkjl() {
		return jxPkjl;
	}

	public void setJxPkjl(JxPkjlb jxPkjl) {
		this.jxPkjl = jxPkjl;
	}

	public JxPkjlbService getJxPkjlbService() {
		return jxPkjlbService;
	}

	public void setJxPkjlbService(JxPkjlbService jxPkjlbService) {
		this.jxPkjlbService = jxPkjlbService;
	}
	
	public JxSkxxbService getJxSkxxbService() {
		return jxSkxxbService;
	}
	
//	public ViewSkxxPkService getViewSkxxPkService() {
//		return viewSkxxPkService;
//	}
//
//	public void setViewSkxxPkService(ViewSkxxPkService viewSkxxPkService) {
//		this.viewSkxxPkService = viewSkxxPkService;
//	}

	public String getOccupiedCourse() {
		return occupiedCourse;
	}

	public void setOccupiedCourse(String occupiedCourse) {
		this.occupiedCourse = occupiedCourse;
	}

	public void setJxSkxxbService(JxSkxxbService jxSkxxbService) {
		this.jxSkxxbService = jxSkxxbService;
	}

	public static String getPkType() {
		return pkType;
	}

	public static void setPkType(String pkType) {
		JxPkjlAction.pkType = pkType;
	}

	public String Page() {
		return "page";
	}

	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		try {
//			String filter = this.getSkxxFilter();
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			Page<JxPkjlb> pageList = (Page<JxPkjlb>) jxPkjlbService.pageQuery(startNo,pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	public String Edit(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		JSONObject otherData = JSONObject.fromObject(otherDatas.get(0));
		try {
			JxPkjlb jxPkjl = (JxPkjlb) JSONObject.toBean(json, JxPkjlb.class);
			if(ctKcList != null){
				List<JxPkjlb> list = new ArrayList<JxPkjlb>();
				for(int i = 0 ; i < ctKcList.size();i++){
					JSONObject ctKcJson = JSONObject.fromObject(ctKcList.get(i));
					JxPkjlb ctkcPkjl = (JxPkjlb) JSONObject.toBean(ctKcJson, JxPkjlb.class);
					list.add(ctkcPkjl);
				}
				jxPkjlbService.update(jxPkjl,list,otherData);
			}else{
				jxPkjlbService.update(jxPkjl,null,otherData);
			}
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		JSONObject otherData = JSONObject.fromObject(otherDatas.get(0));
		try {
			JxPkjlb jxPkjl = (JxPkjlb) JSONObject.toBean(json, JxPkjlb.class);
			if(ctKcList != null){
				List<JxPkjlb> list = new ArrayList<JxPkjlb>();
				for(int i = 0 ; i < ctKcList.size();i++){
					JSONObject ctKcJson = JSONObject.fromObject(ctKcList.get(i));
					JxPkjlb ctkcPkjl = (JxPkjlb) JSONObject.toBean(ctKcJson, JxPkjlb.class);
					list.add(ctkcPkjl);
				}
				jxPkjlbService.add(jxPkjl,list,otherData);
			}else{
				jxPkjlbService.add(jxPkjl,null,otherData);
			}
			jxPkjlbService.updateSkzl(jxPkjl);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String Del(){
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			jxPkjlbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String toExcel() {
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String paramString = jsonParam.getString("params");
				JSONObject paramsJO = JSONObject.fromObject(paramString);
				String params = paramsJO.getString("params");
				String filters = null;
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(null,params);
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxPkjlbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String getSkxxList(){
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
	    String pkType = ServletActionContext.getRequest().getParameter("pkType");
		System.out.println("pkType  skxx = " + pkType );
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String filter = this.getSkxxFilter(pkType);
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		List<?> list = jxPkjlbService.getSkxxAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
	
		return SUCCESS;
	}
	
	public String getPkjlList(){
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String pkType = ServletActionContext.getRequest().getParameter("pkType");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String filter = this.getPkjlFilter(pkType);
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		List<?> list = jxPkjlbService.getPkjlAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
	
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String CheckIsConflict(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxPkjlb jxPkjl = (JxPkjlb) JSONObject.toBean(json, JxPkjlb.class);	
			jxPkjl.initTimeFlag();
			String xn = jxPkjl.getXn();
			String xq = jxPkjl.getXq();
			String filter = "";
//			if("1".equals(jxPkjl.getGgkbzm())){
//				filter = "ggkbzm='1'";
//			}else{
//				filter =  "ggkbzm='1' or kkdwh='" + jxPkjl.getKkdwh() + "'";
//			}
			filter =  "ggkbzm='1' and xn='" + xn + "' and xq='" + xq +"'" + 
					" or kkdwh='"+ jxPkjl.getKkdwh() + "' and xn='" + xn + "' and xq='" + xq +"'";
			List<JxPkjlb> jxPkjlList = (List<JxPkjlb>) jxPkjlbService.getJxPkjlbAll(filter,xn, xq);
			for(int i=0;i < jxPkjlList.size();i++){
				if("0".equals(jxPkjlList.get(i).getSjzxapbz()))
					jxPkjlList.get(i).initTimeFlag();
			}
			List<JxPkjlb> conflictPkjl = jxPkjlbService.isConflict(jxPkjl, jxPkjlList);
			if(conflictPkjl.size() > 0){
				result.setList(conflictPkjl);
				result.setSuccess(true);
			}else{
				result.setSuccess(false);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String getOccupied(){
		String kczs = ServletActionContext.getRequest().getParameter("kczs");
		String jsbh = ServletActionContext.getRequest().getParameter("jsbh");
		String xn = ServletActionContext.getRequest().getParameter("xn");
		String xq = ServletActionContext.getRequest().getParameter("xq");
		@SuppressWarnings("unused")
		String ggkbzm = ServletActionContext.getRequest().getParameter("ggkbzm");
		String kkdwh = ServletActionContext.getRequest().getParameter("kkdwh");
		try {
			String filter = "";
//			if("1".equals(ggkbzm)){
//				filter = "ggkbzm='1' and xn='" + xn + "' and xq='" + xq +"'";
//			}else{
				filter =  "ggkbzm='1' and xn='" + xn + "' and xq='" + xq +"'" + 
							" or kkdwh='"+ kkdwh+ "' and xn='" + xn + "' and xq='" + xq +"'";
//			}
			String occupiedCourse = jxPkjlbService.getOccupied(kczs,jsbh,filter);
//			this.setOccupiedCourse(occupiedCourse);
			this.setSuccess(true);
			result.setMsg(occupiedCourse);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
//			this.setSuccess(false);
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String TbkDel(){
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			jxPkjlbService.tbkDelete(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getSkxxFilter(String pkType){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				if("fggk".equals(pkType)){
					filter = "ggkbzm='0'";
				}else if("ggk".equals(pkType)){
					filter = "ggkbzm = '1'";
				}
					break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "ggkbzm='0' and kkdwh='" + szdwh + "'";
			}else if("SchoolRight".equals(webRight.getRightCode())){
				if("fggk".equals(pkType)){
					filter = "ggkbzm='0'";
				}else if("ggk".equals(pkType)){
					filter = "ggkbzm = '1'";
				}
			}
		}
		return filter;
	}
	
	@SuppressWarnings("unchecked")
	public String getPkjlFilter(String pkType){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				if("fggk".equals(pkType)){
					filter =  "ggkbzm = '0'";
				}else if("ggk".equals(pkType)){
					filter = "ggkbzm = '1'";
				}
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "kkdwh='" + szdwh + "'";
			}else if("SchoolRight".equals(webRight.getRightCode())){
				if("fggk".equals(pkType)){
					filter =  "ggkbzm = '0'";
				}else if("ggk".equals(pkType)){
					filter = "ggkbzm = '1'";
				}
			}
		}
		return filter;
	}
	
	
}
