package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.TyXnb;
import edu.ahut.service.XwZqkhzlbService;
import edu.ahut.service.TyXnbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XwZqkhzlbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private JsonResult result = new JsonResult();
	private XwZqkhzlbService xwZqkhzlbService;
	private TyXnbService tyXnbService;

	public XwZqkhzlbAction(){
		xwZqkhzlbService = (XwZqkhzlbService) SpringContextUtil.getBean("XwZqkhzlbServiceImpl");
		tyXnbService = (TyXnbService) SpringContextUtil.getBean("TyXnbServiceImpl");
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		XwZqkhzlbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public XwZqkhzlbService getXwZqkhzlbService() {
		return xwZqkhzlbService;
	}

	public void setXwZqkhzlbService(XwZqkhzlbService xwZqkhzlbService) {
		this.xwZqkhzlbService = xwZqkhzlbService;
	}
	
	public TyXnbService getTyXnbService() {
		return tyXnbService;
	}

	public void setTyXnbService(TyXnbService tyXnbService) {
		this.tyXnbService = tyXnbService;
	}
	
	public String FileDownloadZqkh() {
		return "pfileDownloadZqkh";
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
		List<?> list = xwZqkhzlbService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	public String getXn(){
		String order = null;
		try{
			
			List<TyXnb> list = (List<TyXnb>)tyXnbService.Query("xq ='"+1+"'", order);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		}catch(Exception e){
			result.setSuccess(false);
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public String getXq(){
		String order = "";
		try{
			List<TyXnb> list = tyXnbService.Query(null, order);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
			
		}catch(Exception e){
			result.setSuccess(false);
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
}
