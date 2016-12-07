package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjmxb;
import edu.ahut.service.JxCjmxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxCjmxbAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private JxCjmxbService jxCjmxbService;
	private JsonResult result = new JsonResult();
	
	public JxCjmxbAction(){
		jxCjmxbService = (JxCjmxbService) SpringContextUtil.getBean("JxCjmxbServiceImpl");
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

	public JxCjmxbService getJxCjmxbService() {
		return jxCjmxbService;
	}

	public void setJxCjmxbService(JxCjmxbService jxCjmxbService) {
		this.jxCjmxbService = jxCjmxbService;
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
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<JxCjmxb> pageList = jxCjmxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Add(){
		String xh =ServletActionContext.getRequest().getParameter("xh");
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		try {
			jxCjmxbService.add(xh,kkkh);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxCjmxb pyKck = (JxCjmxb) JSONObject.toBean(json, JxCjmxb.class);
			jxCjmxbService.update(pyKck);
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
			jxCjmxbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String del(){
		
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		String xh = ServletActionContext.getRequest().getParameter("xh");
		try{
			String hql ="delete JxCjmxb where kkkh = '" + kkkh + "' and xh ='" + xh +"'"; 
			jxCjmxbService.hqlExcute(hql);
			result.setSuccess(true);
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
//	public String CheckByKch(){
//		try {
//			String kch = ServletActionContext.getRequest().getParameter("kch");
//			boolean isExist = this.jxCjmxbService.checkIsExistByKch(kch);
//			result.setSuccess(isExist);
//		} catch (Exception e) {
//			e.printStackTrace();
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
				
				if(!params.equals("")){
					filters = CommonUtil.MergeFilter(filter, params).substring(1,params.length()-1);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxCjmxbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String getCjmx() {
//		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		String order = "xh ASC";
//		String filter = "kkkh ='"+kkkh+"'";
		try{
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(null, searchParams);
			List<JxCjmxb> list =  (List<JxCjmxb>)this.jxCjmxbService.Query(filters,order);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String checkCode(){
		try {
			String xh =ServletActionContext.getRequest().getParameter("xh");
			String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
			String filters = "xh = '" + xh  + "' and kkkh = '" + kkkh + "'";
			Boolean isExist = false;
			List<JxCjmxb> batchDetail = (List<JxCjmxb>)jxCjmxbService.Query(filters, null);
			if(batchDetail.size() != 0){
				isExist = true;
			}
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
