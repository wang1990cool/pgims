package edu.ahut.act;

import java.net.URLDecoder;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxSkxxbService;
import edu.ahut.service.JxSkzlbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxSkxxbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private List<?> skjhDatas;
	private JxSkxxbService jxSkxxbService;
	private JxSkzlbService jxSkzlbService;
	private JsonResult result = new JsonResult();
	private static String skType;

	public JxSkxxbAction(){
		jxSkxxbService = (JxSkxxbService) SpringContextUtil.getBean("JxSkxxbServiceImpl");
		jxSkzlbService = (JxSkzlbService) SpringContextUtil.getBean("JxSkzlbServiceImpl");
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		JxSkxxbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JxSkxxbService getJxSkxxbService() {
		return jxSkxxbService;
	}

	public void setJxSkxxbService(JxSkxxbService jxSkxxbService) {
		this.jxSkxxbService = jxSkxxbService;
	}

	
	public JxSkzlbService getJxSkzlbService() {
		return jxSkzlbService;
	}

	public void setJxSkzlbService(JxSkzlbService jxSkzlbService) {
		this.jxSkzlbService = jxSkzlbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public List<?> getSkjhDatas() {
		return skjhDatas;
	}

	public void setSkjhDatas(List<?> skjhDatas) {
		this.skjhDatas = skjhDatas;
	}

	public String list(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String gh = webUser.getGh();	
		filter = "zjjsh = '" + gh + "'";
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<JxSkxxb> pageList = jxSkxxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}	
		String filter = this.getSkxxFilter(skType);
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<JxSkxxb> pageList = jxSkxxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String DelBj(){
		try {
			String kkkhs = ServletActionContext.getRequest().getParameter("kkkhArr");
			jxSkxxbService.deleteBj(kkkhs.split(","));
		   jxSkzlbService.deleteSkzl(kkkhs.split(","));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String AddTec(){
		try {
			String gh = ServletActionContext.getRequest().getParameter("gh");
			String xm = URLDecoder.decode(ServletActionContext.getRequest().getParameter("xm"),"UTF-8");
			String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
			String jslx = ServletActionContext.getRequest().getParameter("jslx");
			jxSkxxbService.addTec(gh, xm, kkkh,jslx);
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
			JxSkxxb skxx = (JxSkxxb) JSONObject.toBean(json, JxSkxxb.class);
			jxSkxxbService.update(skxx);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetKkkh(){
		try{
			String prefixion = ServletActionContext.getRequest().getParameter("prefixion");
			result.setMsg(this.jxSkxxbService.getKkkh(prefixion));
			result.setSuccess(true);
		}catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	
	public String AddSkxxb(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			JxSkxxb skxxmx = (JxSkxxb) JSONObject.toBean(json, JxSkxxb.class);
			JxSkjhgxb[] skjhArr = new  JxSkjhgxb[skjhDatas.size()];
			for(int i = 0; i < skjhDatas.size(); i++){
				JSONObject skjhJson = JSONObject.fromObject(skjhDatas.get(i));
				JxSkjhgxb skjh = (JxSkjhgxb) JSONObject.toBean(skjhJson, JxSkjhgxb.class);
				skjhArr[i] = skjh;
			}
			jxSkxxbService.add(skxxmx,skjhArr);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String DivideBj(){
		try {
			JSONObject skxxJson = JSONObject.fromObject(datas.get(0));
			JxSkxxb skxx = (JxSkxxb) JSONObject.toBean(skxxJson, JxSkxxb.class);
			JSONObject skjhJson = JSONObject.fromObject(skjhDatas.get(0));
			JxSkjhgxb skjh = (JxSkjhgxb) JSONObject.toBean(skjhJson,JxSkjhgxb.class);
			
			int fbs = Integer.parseInt(ServletActionContext.getRequest().getParameter("fbs"));
			String prefixion = ServletActionContext.getRequest().getParameter("prefixion");
			Long jhrs = skxx.getJhrs();
			Long eachRs = jhrs / fbs;
			
			for(int i = 0; i < fbs; i++){
				String kkkh = jxSkxxbService.getKkkh(prefixion);// 获得开课课号
				
				skxx.setKkkh(kkkh);
				skjh.setKkkh(kkkh);
				
				if(i == fbs-1 ){
					Long rs = jhrs - eachRs*(fbs - 1);
					skxx.setJhrs(rs);
				}else{
					skxx.setJhrs(eachRs);
				}
				jxSkxxbService.divideBj(skxx, skjh);
			}
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetSkxxmx(){
		try {
			String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
			String kch = ServletActionContext.getRequest().getParameter("kch");
			List<?> skxxmxList = jxSkxxbService.getSkxxmx(kkkh, kch);
			result.setList(skxxmxList);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetDivideSkxx(){
		try {
			String kkkhArray = ServletActionContext.getRequest().getParameter("kkkhArray");
			String kch = ServletActionContext.getRequest().getParameter("kch");
			List<?> list = jxSkxxbService.getDivideSkxx(kkkhArray, kch);
			result.setList(list);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String MergeEdit(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			JxSkxxb skxxmx = (JxSkxxb) JSONObject.toBean(json, JxSkxxb.class);
			JxSkjhgxb[] skjhArr = new  JxSkjhgxb[skjhDatas.size()];
			for(int i = 0; i < skjhDatas.size(); i++){
				JSONObject skjhJson = JSONObject.fromObject(skjhDatas.get(i));
				JxSkjhgxb skjh = (JxSkjhgxb) JSONObject.toBean(skjhJson, JxSkjhgxb.class);
				skjhArr[i] = skjh;
			}
			jxSkxxbService.update(skxxmx,skjhArr);
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
				List<?> tList = jxSkxxbService.Query(filters, order);
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
	public String getSkxxFilter(String skType){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				if("fggk".equals(skType)){
					filter = "ggkbzm='0'";
				}else if("ggk".equals(skType)){
					filter = "ggkbzm = '1'";
				}
					break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "ggkbzm='0' and kkdwh='" + szdwh + "'";
			}else if("SchoolRight".equals(webRight.getRightCode())){
				if("fggk".equals(skType)){
					filter = "ggkbzm='0'";
				}else if("ggk".equals(skType)){
					filter = "ggkbzm = '1'";
				}
			}
		}
		return filter;
	}
}
