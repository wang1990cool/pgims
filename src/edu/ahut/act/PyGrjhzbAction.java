package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhzb;
import edu.ahut.service.PyGrjhzbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class PyGrjhzbAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private PyGrjhzbService pyGrjhzbService;
	private JsonResult result = new JsonResult();
	
	public PyGrjhzbAction(){
		pyGrjhzbService = (PyGrjhzbService) SpringContextUtil.getBean("PyGrjhzbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		PyGrjhzbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public PyGrjhzbService getPyGrjhzbService() {
		return pyGrjhzbService;
	}

	public void setPyGrjhzbService(PyGrjhzbService pyGrjhzbService) {
		this.pyGrjhzbService = pyGrjhzbService;
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
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<PyGrjhzb> pageList = pyGrjhzbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			PyGrjhzb grjh = (PyGrjhzb) JSONObject.toBean(json,PyGrjhzb.class);
			pyGrjhzbService.add(grjh);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Del(){
		try {
			String xhs = ServletActionContext.getRequest().getParameter("ids");
			pyGrjhzbService.deleteByXhs(xhs);
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
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(filter,params.substring(1, params.length()-1));
				else
					filters = filter;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = pyGrjhzbService.QueryView(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	/**
	 * 根据学号判断学生是否已经存在个人计划总表中
	 * @return
	 */
	public String CheckByXh(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			boolean isExist = this.pyGrjhzbService.checkIsExistByXh(xh);
			result.setSuccess(isExist);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	/**
	 * 跟新状态
	 * @return
	 */
	public String UpdateZt(){
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			PyGrjhzb grjh = (PyGrjhzb) JSONObject.toBean(json, PyGrjhzb.class);
			pyGrjhzbService.updateZt(grjh);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String ViewJcxxList(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<PyGrjhzb> pageList = pyGrjhzbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	/**
	 * 根据学号获得学生信息
	 * @return
	 */
	public String GetXsxx(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			List<?> list = pyGrjhzbService.findByXh(xh);
			result.setSuccess(true);
			result.setList(list);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	
}
