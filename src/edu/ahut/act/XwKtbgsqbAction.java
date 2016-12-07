package edu.ahut.act;

import java.net.URLDecoder;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKtbgsq;
import edu.ahut.model.XwKtbgsqb;
import edu.ahut.service.ViewXwKtbgsqService;
import edu.ahut.service.XwKtbgsqbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XwKtbgsqbAction extends ActionSupport{

	private static final long serialVersionUID = 3580237237617022837L;
	private String filter = null;
	private List<?> datas;
	private XwKtbgsqbService xwKtbgsqbService;
	private ViewXwKtbgsqService viewXwKtbgsqService;
	private JsonResult result = new JsonResult();
	

	public XwKtbgsqbAction() {
		xwKtbgsqbService = (XwKtbgsqbService) SpringContextUtil
				.getBean("XwKtbgsqbServiceImpl");
		
	}
	
	public XwKtbgsqbService getXwKtbgsqbService() {
		return xwKtbgsqbService;
	}

	public void setXwKtbgsqbService(XwKtbgsqbService xwKtbgsqbService) {
		this.xwKtbgsqbService = xwKtbgsqbService;
	}

	public ViewXwKtbgsqService getViewXwKtbgsqService() {
		return viewXwKtbgsqService;
	}

	public void setViewXwKtbgsqService(ViewXwKtbgsqService viewXwKtbgsqService) {
		this.viewXwKtbgsqService = viewXwKtbgsqService;
	}

//	public XsJcxxbService getXsJcxxbService() {
//		return xsJcxxbService;
//	}
//
//	public void setXsJcxxbService(XsJcxxbService xsJcxxbService) {
//		this.xsJcxxbService = xsJcxxbService;
//	}
	
	
	
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
			XwKtbgsqb xwKtbgsqb = (XwKtbgsqb) JSONObject.toBean(json, XwKtbgsqb.class);
			xwKtbgsqbService.add(xwKtbgsqb);
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
			XwKtbgsqb xwKtbgsqb = (XwKtbgsqb) JSONObject.toBean(json, XwKtbgsqb.class);
			xwKtbgsqbService.update(xwKtbgsqb);
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
			String hql ="delete XwKtbgsqb where id in (" + ids + ")"; 
			xwKtbgsqbService.hqlExcute(hql);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}
	
//	public String List() {
//		int startNo = Integer.parseInt(ServletActionContext.getRequest()
//				.getParameter("start"));
//		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
//				.getParameter("limit"));
//		
//		String sort = ServletActionContext.getRequest().getParameter("sort");
//		String dir = ServletActionContext.getRequest().getParameter("dir");
//		String order = null;
//		if (sort != null && dir != null)
//			order = sort + " " + dir;
//		
//		String searchParams = ServletActionContext.getRequest().getParameter(
//				"params");
//		
//		String filters = CommonUtil.MergeFilter(filter,searchParams);
//		
//		Page<VJxXkzb> pageList = vJxXkzbService.pageQuery(startNo,
//				pageSize, filters, order);
//		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
//		result.setSuccess(true);
//		
//		return SUCCESS;
//	}
//	
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
		Page<XwKtbgsqb> pageList = xwKtbgsqbService.pageQuery(startNo, pageSize, filters, orders);
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
				List<?> tList = xwKtbgsqbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
//	public String sel() throws UnsupportedEncodingException{
//		String xh = ServletActionContext.getRequest().getParameter("xh");
////		String czr = ServletActionContext.getRequest().getParameter("czr");
//		String xn = ServletActionContext.getRequest().getParameter("xn");
//		String xq = ServletActionContext.getRequest().getParameter("xq");
//		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
////		String kkkhs = ServletActionContext.getRequest().getParameter("data");
//		String czr = (String)ActionContext.getContext().getSession().get("userCName");
////		String kcmh = "";
////		String kcmh = vXkCtjcService.isConflict(kkkh,xn,xq,kkkhs);
////		if( kcmh == null || kcmh.equals("")){
////			String filter = "kkkh ='" + kkkh + "'";
//			JxXsxkb xsxk = new JxXsxkb();
//			xsxk.setKkkh(kkkh);
//			xsxk.setXh(xh);
//			xsxk.setXn(xn);
//			xsxk.setXq(xq);
//			xsxk.setCzr(czr);
//			xsxk.setCzrzh(xh);
//			xsxk.setXksj(new Date());
//			try{
//				
//				this.jxXsxkbService.add(xsxk);
////				JxSkxxb skxx = jxSkxxbService.Query(filter,null).get(0);
////				skxx.setXkrs(skxx.getXkrs()+1);
////				this.jxSkxxbService.update(skxx);
//				result.setSuccess(true);
//			}catch(Exception e){
//				e.printStackTrace();
//				result.setSuccess(false);
//			}
////		}else{
////			result.setMsg(kcmh);
////			result.setSuccess(false);
////		}
//		return SUCCESS;
//	}
	
//	public String back() throws UnsupportedEncodingException{
//		String czr = (String)ActionContext.getContext().getSession().get("userCName");
//		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
//		String xn = ServletActionContext.getRequest().getParameter("xn");
//		String xq = ServletActionContext.getRequest().getParameter("xq");
//		String xh = ServletActionContext.getRequest().getParameter("xh");
//		JxXstkb jxXstkb = new JxXstkb();
//		jxXstkb.setKkkh(kkkh);
//		jxXstkb.setXn(xn);
//		jxXstkb.setXq(xq);
//		jxXstkb.setXh(xh);
//		jxXstkb.setCzr(czr);
//		jxXstkb.setXksj(new Date());
//		String filter = "kkkh ='" + kkkh + "'";
//		try{
//			String hql ="delete JxXsxkb where kkkh = '" + kkkh + "' and xh ='" + xh +"'"; 
//			jxSkxxbService.hqlExcute(hql);
//			JxSkxxb skxx = jxSkxxbService.Query(filter,null).get(0);
//			if(skxx.getXkrs()>0){
//				skxx.setXkrs(skxx.getXkrs()-1);
//				this.jxSkxxbService.update(skxx);
//			}
//			jxXstkbService.add(jxXstkb);
//			result.setSuccess(true);
//		}catch(Exception e){
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}

//	public static void main(String[] args) {
//		XwKtbgsqb
//	}
//	
//	public String UpdateZt(){
//	try {
//		JSONObject json = JSONObject.fromObject(datas.get(0));
//		XwKtbgsqb pyfa = (XwKtbgsqb) JSONObject.toBean(json, XwKtbgsqb.class);
//		
//		xwKtbgsqbService.updateZt(pyfa);
//		result.setSuccess(true);
//	} catch (Exception e) {
//		e.printStackTrace();
//		result.setSuccess(false);
//	}
//	return SUCCESS;
//}
	public String UpdateZtm(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			String shzt =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shzt"),"UTF-8");
			String shztm = ServletActionContext.getRequest().getParameter("shztm");
			String shyj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shyj"),"UTF-8");
			String shr =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shr"),"UTF-8");
			result.setSuccess(xwKtbgsqbService.updateZtm(xh, shztm, shzt,shyj,shr));
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
