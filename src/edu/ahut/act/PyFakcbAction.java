package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyFakcb;
import edu.ahut.model.PyFazb;
import edu.ahut.service.PyFakcbService;
import edu.ahut.service.PyFazbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class PyFakcbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private List<?> pyfaDatas;
	private PyFakcbService pyFakcbService;
	private PyFazbService pyFazbService;
	private JsonResult result = new JsonResult();
	
	public PyFakcbAction(){
		pyFakcbService = (PyFakcbService) SpringContextUtil.getBean("PyFakcbServiceImpl");
		pyFazbService = (PyFazbService) SpringContextUtil.getBean("PyFazbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		PyFakcbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}
	
	public List<?> getPyfaDatas() {
		return pyfaDatas;
	}

	public void setPyfaDatas(List<?> pyfaDatas) {
		this.pyfaDatas = pyfaDatas;
	}

	public PyFakcbService getPyFakcbService() {
		return pyFakcbService;
	}

	public void setPyFakcbService(PyFakcbService pyFakcbService) {
		this.pyFakcbService = pyFakcbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	
	public PyFazbService getPyFazbService() {
		return pyFazbService;
	}

	public void setPyFazbService(PyFazbService pyFazbService) {
		this.pyFazbService = pyFazbService;
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
		String filters = CommonUtil.MergeFilter(null, searchParams);
		Page<PyFakcb> pageList = pyFakcbService.pageQueryByView(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
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
		List<?> list = pyFakcbService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			PyFakcb fakc = (PyFakcb) JSONObject.toBean(json, PyFakcb.class);
			pyFakcbService.add(fakc);
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
			PyFakcb fakc = (PyFakcb) JSONObject.toBean(json, PyFakcb.class);
			pyFakcbService.update(fakc);
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
			pyFakcbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String CheckFakcIsExist(){
		try {
			String pyfah =  ServletActionContext.getRequest().getParameter("pyfah");
			String kch = ServletActionContext.getRequest().getParameter("kch");
			result.setSuccess(pyFakcbService.checkFakcIsExist(pyfah, kch));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	// 保存个人计划课程
	public String SaveFakc(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			if(datas != null){
				pyFakcbService.deleteAllByPyfah(pyfah);
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					PyFakcb jhkc = (PyFakcb) JSONObject.toBean(json,PyFakcb.class);
					pyFakcbService.add(jhkc);
				}
			}else{
				pyFakcbService.deleteAllByPyfah(pyfah);
			}
			if(pyfaDatas!=null){
				JSONObject pyfaJson = JSONObject.fromObject(pyfaDatas.get(0));
				PyFazb pyfa = (PyFazb) JSONObject.toBean(pyfaJson,PyFazb.class);
				pyFazbService.update(pyfa);
			}
			result.setSuccess(true);
		} catch (Exception e) {
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
				String title ="方案课程";
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals("")){
					filters = CommonUtil.MergeFilter(filter, params);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = pyFakcbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
}
