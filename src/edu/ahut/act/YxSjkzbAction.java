package edu.ahut.act;

import java.util.Date;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.YxSjkzb;
import edu.ahut.service.YxSjkzbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;



/**
 * YxSjkzb entity. @author MyEclipse Persistence Tools
 */

public class YxSjkzbAction  extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private YxSjkzbService yxSjkzbService;
	private boolean success;
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public YxSjkzbAction(){
		this.yxSjkzbService = (YxSjkzbService) SpringContextUtil
				.getBean("YxSjkzbServiceImpl");
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

	public YxSjkzbService getYxSjkzbService() {
		return yxSjkzbService;
	}

	public void setYxSjkzbService(YxSjkzbService yxSjkzbService) {
		this.yxSjkzbService = yxSjkzbService;
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
		
		String filters = CommonUtil.MergeFilter(null,searchParams);
		
		Page<YxSjkzb> pageList = yxSjkzbService.pageQuery(startNo,
				pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return SUCCESS;
	}

	public String Add() {
		JSONObject json = JSONObject.fromObject(datas.get(0)); 
		try {
			YxSjkzb YxSjkzb = (YxSjkzb) JSONObject.toBean(json, YxSjkzb.class);
			yxSjkzbService.add(YxSjkzb);
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
			String hql ="delete YxSjkzb where id in (" + ids + ")"; 
			yxSjkzbService.hqlExcute(hql);
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
			YxSjkzb YxSjkzb = (YxSjkzb) JSONObject.toBean(json, YxSjkzb.class);
			yxSjkzbService.update(YxSjkzb);
			result.setSuccess(true);
			this.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
			this.setSuccess(false);
		}
		
		return SUCCESS;
	}

	public String GetAll() {
		List<?> list = this.getYxSjkzbService().getAll();
		setResult(new JsonResult(list, list.size()));
		
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
				String paramString = jsonParam.getString("params");
				JSONObject paramsJO = JSONObject.fromObject(paramString);
				String params = paramsJO.getString("params");
				String filters = null;
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(null,params);
				
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = yxSjkzbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	public String getYxsj(){
		try{
//			String nj = ServletActionContext.getRequest().getParameter("nj");
//			String filter = "nj = '" + nj + "'" ;
//			String order = null;
//			List<YxSjkzb> list =  (List<YxSjkzb>)this.yxSjkzbService.Query(filter,order);
			
			
			@SuppressWarnings("unchecked")
			List<YxSjkzb> list =  (List<YxSjkzb>)this.yxSjkzbService.getAll();
			Date date = new Date();
			
			if(date.getTime() >= list.get(0).getKssj().getTime() && date.getTime() <= list.get(0).getJssj().getTime()){
				setResult(new JsonResult(list, list.size()));
				result.setSuccess(true);
			}else{
				result.setSuccess(false);
				result.setMsg("当前不在报到时间范围内！");
			}
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

}