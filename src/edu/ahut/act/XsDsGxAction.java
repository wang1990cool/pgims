package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import net.sf.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.RsJgxxb;
import edu.ahut.model.XsJcxxb;
import edu.ahut.service.RsJgxxbService;
import edu.ahut.service.XsJcxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

/**
 * ViewRsDsxxId entity. @author MyEclipse Persistence Tools
 */

public class XsDsGxAction  extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2064286936708301334L;
	static private String filter = null;
	private List<?> datas;
	private XsJcxxbService xsJcxxbService;
	private RsJgxxbService rsJgxxbService;
	private JsonResult result = new JsonResult();
	
	public XsDsGxAction(){
		this.xsJcxxbService = (XsJcxxbService) SpringContextUtil
				.getBean("XsJcxxbServiceImpl");
		this.rsJgxxbService = (RsJgxxbService) SpringContextUtil
				.getBean("RsJgxxbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		XsDsGxAction.filter = filter;
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
	
	public XsJcxxbService getXsJcxxbService() {
		return xsJcxxbService;
	}

	public void setXsJcxxbService(XsJcxxbService xsJcxxbService) {
		this.xsJcxxbService = xsJcxxbService;
	}
	
	public RsJgxxbService getRsJgxxbService() {
		return rsJgxxbService;
	}

	public void setRsJgxxbService(RsJgxxbService rsJgxxbService) {
		this.rsJgxxbService = rsJgxxbService;
	}
	
	public String Confirm(){
		try{
			JSONObject json = JSONObject.fromObject(datas.get(0));
			String xh = json.getString("xh");
			String gh = json.getString("gh");
			String xm = json.getString("xm");
			XsJcxxb xsJcxxb = xsJcxxbService.findByXh(xh);
			xsJcxxb.setDsh(gh);
			xsJcxxb.setDsxm(xm);
			xsJcxxbService.update(xsJcxxb);
			result.setSuccess(true);
		} catch (Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()	.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter(
				"params");
		String filters = CommonUtil.MergeFilter(null, searchParams);
		
		Page<RsJgxxb> pageList = rsJgxxbService.pageQuery(startNo,pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return "list";
	}

}