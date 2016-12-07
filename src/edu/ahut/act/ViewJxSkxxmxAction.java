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

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.ViewJxSkxxmx;
import edu.ahut.service.JxSkjhgxbService;
import edu.ahut.service.ViewJxSkxxmxService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewJxSkxxmxAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
    private String filter = "";
	private List<?> datas;
	private List<?> skjhDatas;
	private ViewJxSkxxmxService viewJxSkxxmxService;
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

	public ViewJxSkxxmxAction(){
		viewJxSkxxmxService = (ViewJxSkxxmxService) SpringContextUtil.getBean("ViewJxSkxxmxServiceImpl");
		jxSkjhgxbService = (JxSkjhgxbService) SpringContextUtil.getBean("JxSkjhgxbServiceImpl");
	}

	@SuppressWarnings("unchecked")
	public  String getFilter() {
		List<JxSkjhgxb> skjhList = (List<JxSkjhgxb>) jxSkjhgxbService.getAll();
		StringBuffer kkjh = new StringBuffer();
		StringBuffer kch = new StringBuffer();
		if(skjhList.size() > 0){
			for(int i = 0;i < skjhList.size();i++){
				kkjh.append("'" + skjhList.get(i).getKkjhh() + "',");
				kch.append("'" + skjhList.get(i).getKch() + "',");
			}
			kkjh.deleteCharAt(kkjh.length()-1); 
			kch.deleteCharAt(kch.length() - 1);
		}
		filter += "kkjhh not in(" + kkjh + ") and kch not in(" + kch + ")"; 
		System.out.println("filter=" + filter);
		return filter;
	}

	public  void setFilter(String filter) {
		this.filter = filter;
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

	public ViewJxSkxxmxService getViewJxSkxxmxService() {
		return viewJxSkxxmxService;
	}

	public void setViewJxSkxxmxService(ViewJxSkxxmxService viewJxSkxxmxService) {
		this.viewJxSkxxmxService = viewJxSkxxmxService;
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
		String filters = CommonUtil.MergeFilter(this.getFilter(), searchParams);
		Page<ViewJxSkxxmx> pageList = viewJxSkxxmxService.pageQuery(startNo, pageSize, filters, orders);
		
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
				List<?> tList = viewJxSkxxmxService.Query(filters, order);
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
			List<?> list = viewJxSkxxmxService.getAll();
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
}
