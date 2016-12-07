package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.service.ViewJxCjcxAllService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewJxCjcxAllAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewJxCjcxAllService viewJxCjcxAllService;
	private JsonResult result = new JsonResult();
	private List<?> xh;
	private List<?> xm;
	private List<?> fyh;
	private List<?> fymc;
	private List<?> zydm;
	private List<?> zymc;
	public ViewJxCjcxAllAction(){
		viewJxCjcxAllService = (ViewJxCjcxAllService) SpringContextUtil.getBean("ViewJxCjcxAllServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewJxCjcxAllAction.filter = filter;
	}
    
	public List<?> getFyh() {
		return fyh;
	}

	public void setFyh(List<?> fyh) {
		this.fyh = fyh;
	}
	public List<?> getFymc() {
		return fymc;
	}

	public void setFymc(List<?> fymc) {
		this.fymc = fymc;
	}
	public List<?> getZydm() {
		return zydm;
	}

	public void setZydm(List<?> zydm) {
		this.zydm = zydm;
	}
	public List<?> getZymc() {
		return zymc;
	}

	public void setZymc(List<?> zymc) {
		this.zymc = zymc;
	}
	
	
	
	public List<?> getXh() {
		return xh;
	}

	public void setXh(List<?> xh) {
		this.xh = xh;
	}
	public List<?> getXm() {
		return xm;
	}

	public void setXm(List<?> xm) {
		this.xm = xm;
	}
	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxCjcxAllService getViewJxCjcxAllService() {
		return viewJxCjcxAllService;
	}

	public void setViewJxCjcxAllService(ViewJxCjcxAllService viewJxCjcxAllService) {
		this.viewJxCjcxAllService = viewJxCjcxAllService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
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
		List<?> list = viewJxCjcxAllService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	public String GetXM(){
		try {
			List<?> list = viewJxCjcxAllService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String GetXNXQ(){
		try {
			List<?> list = viewJxCjcxAllService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String GetFYMC(){
		try {
			List<?> list = viewJxCjcxAllService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String GetZYMC(){
		try {
			List<?> list = viewJxCjcxAllService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		System.out.println(excelParams);
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
//				System.out.println(jsonParam.getString("cols"));
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = viewJxCjcxAllService.Query(filters, order);
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
