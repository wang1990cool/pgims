package edu.ahut.act;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewZxkkjhPk;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxSkjhgxbService;
import edu.ahut.service.ViewZxkkjhPkService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewZxkkjhPkAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
    private static String filter = "";
	private List<?> datas;
	private List<?> skjhDatas;
	private ViewZxkkjhPkService viewZxkkjhPkService;
	private JxSkjhgxbService jxSkjhgxbService;
	private JsonResult result = new JsonResult();
	private String  kkkh;
	private Long id;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKkkh() {
		return kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public ViewZxkkjhPkAction(){
		viewZxkkjhPkService = (ViewZxkkjhPkService) SpringContextUtil.getBean("ViewZxkkjhPkServiceImpl");
		jxSkjhgxbService = (JxSkjhgxbService) SpringContextUtil.getBean("JxSkjhgxbServiceImpl");
	}

	public  String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewZxkkjhPkAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}
	
	public List<?> getSkjhDatas() {
		return skjhDatas;
	}

	public void setSkjhDatas(List<?> skjhDatas) {
		this.skjhDatas = skjhDatas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewZxkkjhPkService getViewZxkkjhPkService() {
		return viewZxkkjhPkService;
	}

	public void setViewZxkkjhPkService(ViewZxkkjhPkService viewZxkkjhPkService) {
		this.viewZxkkjhPkService = viewZxkkjhPkService;
	}

	public JxSkjhgxbService getJxSkjhgxbService() {
		return jxSkjhgxbService;
	}

	public void setJxSkjhgxbService(JxSkjhgxbService jxSkjhgxbService) {
		this.jxSkjhgxbService = jxSkjhgxbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
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
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String ggkbzm = ServletActionContext.getRequest().getParameter("ggkbzm");
		filter = this.getSkxxFilter(ggkbzm);
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewZxkkjhPk> pageList = viewZxkkjhPkService.pageQuery(startNo, pageSize, filters, orders);
		
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
//	public String AddSkxxb(){
//		try {
//			JSONObject json = JSONObject.fromObject(datas.get(0));
//			JxSkxxb skxxmx = (JxSkxxb) JSONObject.toBean(json, JxSkxxb.class);
//			JxSkjhb[] skjhArr = new  JxSkjhb[skjhDatas.size()];
//			for(int i = 0; i < skjhDatas.size(); i++){
//				JSONObject skjhJson = JSONObject.fromObject(skjhDatas.get(i));
//				JxSkjhb skjh = (JxSkjhb) JSONObject.toBean(skjhJson, JxSkjhb.class);
//				skjhArr[i] = skjh;
//			}
//			viewJxSkxxmxService.add(skxxmx,skjhArr);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}
	
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
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(filter,params.substring(1, params.length()-1));
				else
					filters = filter;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = viewZxkkjhPkService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
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
	
	
//	public String UpdateZt(){
//		try {
//			JSONObject json = JSONObject.fromObject(datas.get(0));
//			ViewJxSkxxmx pyfa = (ViewJxSkxxmx) JSONObject.toBean(json, ViewJxSkxxmx.class);
//			
//			viewJxSkxxmxService.updateZt(pyfa);
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}
	
	
	public String ListSkjh(){
		try {
			List<?> list = viewZxkkjhPkService.getAll();
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
//	public String DivideBj(){
//		try {
//			JSONObject skxxJson = JSONObject.fromObject(datas.get(0));
//			JxSkxxb skxx = (JxSkxxb) JSONObject.toBean(skxxJson, JxSkxxb.class);
//			
//			JSONObject skjhJson = JSONObject.fromObject(skjhDatas.get(0));
//			JxSkjhb skjh = (JxSkjhb) JSONObject.toBean(skjhJson,JxSkjhb.class);
//			
//			int fbs = Integer.parseInt(ServletActionContext.getRequest().getParameter("fbs"));
//			String prefixion = ServletActionContext.getRequest().getParameter("prefixion");
//			
//			Long jhrs = skxx.getJhrs();
//			Long eachRs = jhrs / fbs;
//			
//			for(int i = 0; i < fbs; i++){
//				String kkkh = viewJxSkxxmxService.getKkkh(prefixion);// 获得开课课号
//				
//				skxx.setKkkh(kkkh);
//				skjh.setKkkh(kkkh);
//				
//				if(i == fbs-1 ){
//					Long rs = jhrs - eachRs*(fbs - 1);
//					skxx.setJhrs(rs);
//				}else{
//					skxx.setJhrs(eachRs);
//				}
//				viewJxSkxxmxService.divideBj(skxx, skjh);
//			}
//			result.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}
	
	@SuppressWarnings("unchecked")
	public String getSkxxFilter(String ggkbzm){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = "ggkbzm='" + ggkbzm + "'" ;
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "ggkbzm='"+ ggkbzm +  "' and kkdwh='" + szdwh + "'";
			}
		}
		return filter;
	}
	
//	public String getSkxxFilter(String ggkbzm){
//		String filter = "";
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		
//		String szdwh = webUser.getSzdwh();
//		String roleCode = webUser.getWebRole().getRoleCode();
////		if(roleCode.equals("Academy")){
//		if(roleCode.equals("Academy") || roleCode.equals("AcademyP")){
//			filter = "ggkbzm='"+ ggkbzm +  "' and kkdwh='" + szdwh + "'";
//		}else{
//			filter = "ggkbzm='" + ggkbzm + "'" ;
//		}
//		if("1".equals(ggkbzm)){
//			filter = "ggkbzm='1'" ;
//		}else if("0".equals(ggkbzm)){
//			filter = "ggkbzm='0' and kkdwh='" + szdwh + "'";
//		}
//		return filter;
//	}
}
