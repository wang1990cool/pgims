package edu.ahut.act;

import java.util.Date;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjtjsjb;
import edu.ahut.service.JxCjtjsjbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxCjtjsjbAction extends ActionSupport{

	private static final long serialVersionUID = 4183786154194055246L;
	private String filter = null;
	private List<?> datas;
	private JxCjtjsjbService jxCjtjsjbService;
	private JsonResult result = new JsonResult();
	

	public JxCjtjsjbAction() {
		jxCjtjsjbService = (JxCjtjsjbService) SpringContextUtil
				.getBean("JxCjtjsjbServiceImpl");
	}
	
	public JxCjtjsjbService getJxSkxxbService() {
		return jxCjtjsjbService;
	}

	public void setJxCjtjsjbService(JxCjtjsjbService jxCjtjsjbService) {
		this.jxCjtjsjbService = jxCjtjsjbService;
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

	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxCjtjsjb jxCjtjsjb = (JxCjtjsjb) JSONObject.toBean(json, JxCjtjsjb.class);
			jxCjtjsjbService.add(jxCjtjsjb);
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
			JxCjtjsjb jxCjtjsjb = (JxCjtjsjb) JSONObject.toBean(json, JxCjtjsjb.class);
			jxCjtjsjbService.update(jxCjtjsjb);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Del() {
		try {
			String ids = ServletActionContext.getRequest().getParameter("ids");
			ids = "'" + ids.replace(",","','") + "'";
			String hql ="delete JxCjtjsjb where id in (" + ids + ")"; 
			jxCjtjsjbService.hqlExcute(hql);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}
	
	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter(
				"params");
		
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<JxCjtjsjb> pageList = jxCjtjsjbService.pageQuery(startNo,
				pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return SUCCESS;
	}
	
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter(
				"excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(filter,params);
				else
					filters = filter;
				
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxCjtjsjbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	public String getSj(){
		try{
			String xn = ServletActionContext.getRequest().getParameter("xn");
			String xq = ServletActionContext.getRequest().getParameter("xq");
			@SuppressWarnings("unchecked")
			List<JxCjtjsjb> list =  (List<JxCjtjsjb>)this.jxCjtjsjbService.getAll();
			
			Date date = new Date();
			
//			if(list.get(0).getXn().equals(xn) && list.get(0).getXq().equals(xq)){
					if(list.get(0).getXn().equals(xn) && list.get(0).getXq().equals(xq) && date.getTime() >= list.get(0).getKssj().getTime() && date.getTime() <= list.get(0).getJssj().getTime() ){
						setResult(new JsonResult(list, list.size()));
						result.setSuccess(true);
//					}
			}else{
						result.setSuccess(false);
//						result.setMsg("当前不在录入成绩时间范围内！");
					}
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
