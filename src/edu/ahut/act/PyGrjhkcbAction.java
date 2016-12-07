package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhkcb;
import edu.ahut.service.PyGrjhkcbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class PyGrjhkcbAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private PyGrjhkcbService pyGrjhkcbService;
	private JsonResult result = new JsonResult();
	
	public PyGrjhkcbAction(){
		pyGrjhkcbService = (PyGrjhkcbService) SpringContextUtil.getBean("PyGrjhkcbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		PyGrjhkcbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public PyGrjhkcbService getPyGrjhkcbService() {
		return pyGrjhkcbService;
	}

	public void setPyGrjhkcbService(PyGrjhkcbService pyGrjhkcbService) {
		this.pyGrjhkcbService = pyGrjhkcbService;
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
		Page<PyGrjhkcb> pageList = pyGrjhkcbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String GetAll(){
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		List<?> list = pyGrjhkcbService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String FakcList(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			List<?> fakcList = pyGrjhkcbService.findByPyfah(pyfah);
			result.setList(fakcList);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			PyGrjhkcb grjh = (PyGrjhkcb) JSONObject.toBean(json,PyGrjhkcb.class);
			pyGrjhkcbService.add(grjh);
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
			PyGrjhkcb grjhkc = (PyGrjhkcb) JSONObject.toBean(json, PyGrjhkcb.class);
			pyGrjhkcbService.update(grjhkc);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	// 保存个人计划课程
	public String SaveGrjhkc(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			if(datas != null){
				pyGrjhkcbService.deleteAllByXh(xh);
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					PyGrjhkcb jhkc = (PyGrjhkcb) JSONObject.toBean(json,PyGrjhkcb.class);
					pyGrjhkcbService.add(jhkc);
				}
			}else{
				pyGrjhkcbService.deleteAllByXh(xh);
			}
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
}
