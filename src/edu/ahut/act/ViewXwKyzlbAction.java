package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.ViewXwKyzlb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.model.XwKtbgsqb;
import edu.ahut.service.ViewXwKyzlbService;
import edu.ahut.service.XwKtbgsqbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;
import edu.ahut.dao.support.Page;

public class ViewXwKyzlbAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private ViewXwKyzlbService viewXwKyzlbService;
	private XwKtbgsqbService xwKtbgsqbService;
	private JsonResult result = new JsonResult();
	
	public ViewXwKyzlbAction(){
		viewXwKyzlbService = (ViewXwKyzlbService) SpringContextUtil.getBean("ViewXwKyzlbServiceImpl");
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

	public ViewXwKyzlbService getViewXwKyzlbService() {
		return viewXwKyzlbService;
	}

	public void setViewXwKyzlbService(ViewXwKyzlbService viewXwKyzlbService) {
		this.viewXwKyzlbService = viewXwKyzlbService;
	}

	public XwKtbgsqbService getXwKtbgsqbService() {
		return xwKtbgsqbService;
	}

	public void setXwKtbgsqbService(XwKtbgsqbService xwKtbgsqbService) {
		this.xwKtbgsqbService = xwKtbgsqbService;
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
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String xh = webUser.getUserName();	
//		filter = "xh = '" + xh + "'";
		filter=this.shtgFilter();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewXwKyzlb> pageList = viewXwKyzlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	public String ListCK(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}	
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String xh = webUser.getUserName();	
//		filter = "xh = '" + xh + "'";
		filter=this.shtgFilter1();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<ViewXwKyzlb> pageList = viewXwKyzlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			ViewXwKyzlb pyKck = (ViewXwKyzlb) JSONObject.toBean(json, ViewXwKyzlb.class);
			viewXwKyzlbService.add(pyKck);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		System.out.println(json.toString());
		try {
			XwKtbgsqb xwKtbgsqb = (XwKtbgsqb) JSONObject.toBean(json, XwKtbgsqb.class);
		
//			System.out.println(pyKck);
			xwKtbgsqbService.update(xwKtbgsqb);
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
			viewXwKyzlbService.deleteByIds(ids);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String CheckByXh(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			boolean isExist = this.viewXwKyzlbService.checkIsExistByXh(xh);
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
				List<?> tList = viewXwKyzlbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	@SuppressWarnings("unchecked")
	public String shtgFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("PersonalRight".equals(webRight.getRightCode())){
				filter = "(dsh='" + webUser.getUserName() + "' and ztm in ('1','2','4'))";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = " (fyh='" + szdwh + "' and ztm in ('1','2','3','4','5')) ";
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())){
				filter = " ztm in ('2','4','5') ";
				break;
			}else{
				filter = " ztm in ('0','1','2','3','4','5') ";
			}
		}
		return filter;
	}
	@SuppressWarnings("unchecked")
	public String shtgFilter1(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String filter = "";
		String szdwh = webUser.getSzdwh();
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			
			WebRight webRight = webRights.get(i);
			if("PersonalRight".equals(webRight.getRightCode())){
				filter = "(dsh='" + webUser.getUserName() + "' and ztm in ('0','1','2','3','4','5'))";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = " (fyh='" + szdwh + "' and ztm in ('0','1','2','3','4','5')) ";
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())){
				filter = " ztm in ('0','1','2','3','4','5') ";
				break;
			}else{
				filter = " ztm in ('0','1','2','3','4','5') ";
			}
		}
		return filter;
	}
}
