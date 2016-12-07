package edu.ahut.act;

import java.net.URLDecoder;
import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.TyXnb;
import edu.ahut.model.XwZqkhb;
import edu.ahut.service.XwZqkhbService;
import edu.ahut.service.TyXnbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XwZqkhbAction extends ActionSupport{

	private static final long serialVersionUID = 3580237237617022837L;
	private String filter = null;
	private List<?> datas;
	private XwZqkhbService xwZqkhbService;
	private TyXnbService tyXnbService;
	private JsonResult result = new JsonResult();
	

	public XwZqkhbAction() {
		xwZqkhbService = (XwZqkhbService) SpringContextUtil.getBean("XwZqkhbServiceImpl");
		tyXnbService = (TyXnbService) SpringContextUtil.getBean("TyXnbServiceImpl");
		
	}
	
	public XwZqkhbService getXwZqkhbService() {
		return xwZqkhbService;
	}

	public void setXwZqkhbService(XwZqkhbService xwZqkhbService) {
		this.xwZqkhbService = xwZqkhbService;
	}
	
	public TyXnbService getTyXnbService() {
		return tyXnbService;
	}

	public void setTyXnbService(TyXnbService tyXnbService) {
		this.tyXnbService = tyXnbService;
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
//		System.out.println(filters +"filters");
		Page<XwZqkhb> pageList = xwZqkhbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	

//	public String UpdateZtm(){
//		try {
//			String xh = ServletActionContext.getRequest().getParameter("xh");
//			String shzt =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shzt"),"UTF-8");
//			String shztm = ServletActionContext.getRequest().getParameter("shztm");
//			String shyj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shyj"),"UTF-8");
//			String shr =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shr"),"UTF-8");
//			result.setSuccess(xwZqkhbService.updateZtm(xh, shztm, shzt,shyj,shr));
//		} catch (Exception e) {
//			e.printStackTrace();
//			result.setSuccess(false);
//		}
//		return SUCCESS;
//	}
	
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

	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			XwZqkhb xwZqkhb = (XwZqkhb) JSONObject.toBean(json, XwZqkhb.class);
			xwZqkhbService.update(xwZqkhb);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String UpdateZtm(){
		try {
			String xh = ServletActionContext.getRequest().getParameter("xh");
			String shzt =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shzt"),"UTF-8");
			String shztm = ServletActionContext.getRequest().getParameter("shztm");
			String shyj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shyj"),"UTF-8");
			String shrgh = ServletActionContext.getRequest().getParameter("shrgh");
			String shr =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("shr"),"UTF-8");
			String dskhdjm = ServletActionContext.getRequest().getParameter("dskhdjm");
			String dskhdj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("dskhdj"),"UTF-8");
			String xzkhdjm = ServletActionContext.getRequest().getParameter("xzkhdjm");
			String xzkhdj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("xzkhdj"),"UTF-8");
			String xykhdjm = ServletActionContext.getRequest().getParameter("xykhdjm");
			String xykhdj =  URLDecoder.decode(ServletActionContext.getRequest().getParameter("xykhdj"),"UTF-8");
			
			result.setSuccess(xwZqkhbService.updateZtm(xh, shztm, shzt,shyj,shrgh,shr,dskhdjm,
					dskhdj,xzkhdjm,xzkhdj,xykhdjm,xykhdj));
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
