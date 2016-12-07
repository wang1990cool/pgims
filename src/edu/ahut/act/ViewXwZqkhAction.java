package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.TyXnb;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwZqkh;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.ViewXwZqkhService;
import edu.ahut.service.TyXnbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewXwZqkhAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private ViewXwZqkhService viewXwZqkhService;
	private TyXnbService tyXnbService;
	private JsonResult result = new JsonResult();
	private List<?> kch;
	private List<?> kcmc;
	private List<?> fyh;
	private List<?> fymc;
	private List<?> zydm;
	private List<?> zymc;
	public ViewXwZqkhAction(){
		viewXwZqkhService = (ViewXwZqkhService) SpringContextUtil.getBean("ViewXwZqkhServiceImpl");
		tyXnbService = (TyXnbService) SpringContextUtil.getBean("TyXnbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		ViewXwZqkhAction.filter = filter;
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
	
	
	
	public List<?> getKch() {
		return kch;
	}

	public void setKch(List<?> kch) {
		this.kch = kch;
	}
	public List<?> getKcmc() {
		return kcmc;
	}

	public void setKcmc(List<?> kcmc) {
		this.kcmc = kcmc;
	}
	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewXwZqkhService getViewXwZqkhService() {
		return viewXwZqkhService;
	}

	public void setViewXwZqkhService(ViewXwZqkhService viewXwZqkhService) {
		this.viewXwZqkhService = viewXwZqkhService;
	}
	
	public TyXnbService getTyXnbService() {
		return tyXnbService;
	}

	public void setTyXnbService(TyXnbService tyXnbService) {
		this.tyXnbService = tyXnbService;
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
		filter = this.shtgFilter();
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<ViewXwZqkh> pageList = viewXwZqkhService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String GetKCMC(){
		try {
			List<?> list = viewXwZqkhService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
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
	
	public String GetXNXQ(){
		try {
			List<?> list = viewXwZqkhService.getAll();
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
			List<?> list = viewXwZqkhService.getAll();
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
			List<?> list = viewXwZqkhService.getAll();
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String GetZJJS(){
		try {
			filter = this.getJsFilter();
			List<?> list = viewXwZqkhService.getAll(filter,null);
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getJsFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String filter = "";
		
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("AcademyRight".equals(webRight.getRightCode())){
				filter = "szdwh = '" + webUser.getSzdwh() + "'";
				break;
			}else if("PersonalRight".equals(webRight.getRightCode())){
				filter = "zjjsh = '" + webUser.getGh() + "'";
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())
							|| "SuperRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}
		}
		return filter;
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
				System.out.println(jsonParam.getString("cols"));
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = viewXwZqkhService.Query(filters, order);
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
				filter = "(dsh='" + webUser.getUserName() + "' and shztm in ('TG','DSH','WTG'))";
				break;
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = " (yxsh='" + szdwh + "' and shztm in ('TG','DSH','WTG')) ";
				break;
			}else{
				filter = "shztm in ('TG','DSH','WTG')";
			}
		}
		return filter;
	}
}
