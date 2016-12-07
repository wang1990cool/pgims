package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;
import edu.ahut.model.JxCjmxb;
import edu.ahut.service.JxCjjlbService;
import edu.ahut.service.JxCjmxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxCjjlbAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private List<?> cjmxDatas;
	private JxCjjlbService jxCjjlbService;
	private JxCjmxbService jxCjmxbService;
	private JsonResult result = new JsonResult();
	private String  zjjsh;
	
	public JxCjjlbAction(){
		jxCjjlbService = (JxCjjlbService) SpringContextUtil.getBean("JxCjjlbServiceImpl");
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

	public JxCjjlbService getJxCjjlbService() {
		return jxCjjlbService;
	}

	public void setJxCjjlbService(JxCjjlbService jxCjjlbService) {
		this.jxCjjlbService = jxCjjlbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public String getZjjsh() {
		return zjjsh;
	}

	public void setPyfah(String zjjsh) {
		this.zjjsh = zjjsh;
	}
	
	
	public List<?> getCjmxDatas() {
		return cjmxDatas;
	}

	public void setCjmxDatas(List<?> cjmxDatas) {
		this.cjmxDatas = cjmxDatas;
	}
	
	

	public JxCjmxbService getJxCjmxbService() {
		return jxCjmxbService;
	}

	public void setJxCjmxbService(JxCjmxbService jxCjmxbService) {
		this.jxCjmxbService = jxCjmxbService;
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
		Page<JxCjjlb> pageList = jxCjjlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject cjjlJson = JSONObject.fromObject(datas.get(0));
		try {
			String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
			List<?> cjmxList = jxCjmxbService.getByKkkh(kkkh);
			if(cjmxList.size() == 0){
				if(cjmxDatas != null){
					for (int i = 0; i < cjmxDatas.size(); i++) {
						JSONObject json = JSONObject.fromObject(cjmxDatas.get(i));
						JxCjmxb jhkc = (JxCjmxb) JSONObject.toBean(json,JxCjmxb.class);
						jxCjmxbService.add(jhkc);
					}
				}
			}
			JxCjjlb jxCjjlb = (JxCjjlb) JSONObject.toBean(cjjlJson, JxCjjlb.class);
			if(Long.toString(jxCjjlb.getId()).length() > 0){
				jxCjjlbService.update(jxCjjlb);
			}else{
				jxCjjlbService.add(jxCjjlb);
				result.setMsg(Long.toString(jxCjjlb.getId()));
			}
			System.out.println(jxCjjlb.getId() + "ID");
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
			JxCjjlb jxCjjlb = (JxCjjlb) JSONObject.toBean(json, JxCjjlb.class);
			jxCjjlbService.update(jxCjjlb);
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
			jxCjjlbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String CheckByZjjsh(){
		try {
			String zjjsh = ServletActionContext.getRequest().getParameter("zjjsh");
			boolean isExist = this.jxCjjlbService.checkIsExistByZjjsh(zjjsh);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
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
					filters = CommonUtil.MergeFilter(filter, params).substring(1,params.length()-1);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxCjjlbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String getByKkkh(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		System.out.println(kkkh);
		List<?> list = jxCjjlbService.getByKkkh(kkkh);
		if(list.size() > 0){
			result.setList(list);
			result.setSuccess(true);
		}else{
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
