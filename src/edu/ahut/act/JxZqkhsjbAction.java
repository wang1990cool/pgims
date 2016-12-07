package edu.ahut.act;

import java.util.Date;
import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxZqkhsjb;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxZqkhsjbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxZqkhsjbAction extends ActionSupport{

	private static final long serialVersionUID = 4183786154194055246L;
	private String filter = null;
	private List<?> datas;
	private JxZqkhsjbService jxZqkhsjbService;
	private JsonResult result = new JsonResult();
//	private boolean success;
//	private String msg;
	private String xn;
	private String xq;
	private String fyh;
	private String zydm;
	private String xslxm;
	private String sznj;
	private String xwbz;
	public JxZqkhsjbAction() {
		jxZqkhsjbService = (JxZqkhsjbService) SpringContextUtil
				.getBean("JxZqkhsjbServiceImpl");
	}
	
	public JxZqkhsjbService getJxSkxxbService() {
		return jxZqkhsjbService;
	}

	public void setJxZqkhsjbService(JxZqkhsjbService jxZqkhsjbService) {
		this.jxZqkhsjbService = jxZqkhsjbService;
	}
	
//	public String getMsg() {
//		return msg;
//	}
//
//	public void setMsg(String msg) {
//		this.msg = msg;
//	}

	public String getXn() {
		return xn;
	}

	public void setXn(String xn) {
		this.xn = xn;
	}

	public String getXq() {
		return xq;
	}

	public void setXq(String xq) {
		this.xq = xq;
	}

	public String getFyh() {
		return fyh;
	}

	public void setFyh(String fyh) {
		this.fyh = fyh;
	}

	public String getZydm() {
		return zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getXslxm() {
		return xslxm;
	}

	public void setXslxm(String xslxm) {
		this.xslxm = xslxm;
	}

	public String getSznj() {
		return sznj;
	}

	public void setSznj(String sznj) {
		this.sznj = sznj;
	}



//	public boolean isSuccess() {
//		return success;
//	}
//
//	public void setSuccess(boolean success) {
//		this.success = success;
//	}

	public String getXwbz() {
		return xwbz;
	}

	public void setXwbz(String xwbz) {
		this.xwbz = xwbz;
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

	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd",
							"yyyy-MM-dd HH:mm:ss" }));
			JxZqkhsjb jxZqkhsjb = (JxZqkhsjb) JSONObject.toBean(json, JxZqkhsjb.class);
			jxZqkhsjbService.add(jxZqkhsjb);
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
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd",
							"yyyy-MM-dd HH:mm:ss" }));
			JxZqkhsjb jxZqkhsjb = (JxZqkhsjb) JSONObject.toBean(json, JxZqkhsjb.class);
			jxZqkhsjbService.update(jxZqkhsjb);
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
			String hql ="delete JxZqkhsjb where id in (" + ids + ")"; 
			jxZqkhsjbService.hqlExcute(hql);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}
	
	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		String searchParams = ServletActionContext.getRequest().getParameter(
				"params");
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		filter = " (fyh='" + szdwh + "') ";
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<JxZqkhsjb> pageList = jxZqkhsjbService.pageQuery(startNo,
				pageSize, filters, order);
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
				List<?> tList = jxZqkhsjbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	public String getSj(){
		try{
			String xn = ServletActionContext.getRequest().getParameter("xn");
			String xq = ServletActionContext.getRequest().getParameter("xq");
			String fyh = ServletActionContext.getRequest().getParameter("fyh");
			String zydm = ServletActionContext.getRequest().getParameter("zydm");
			String xslxm = ServletActionContext.getRequest().getParameter("xslxm");
			String sznj = ServletActionContext.getRequest().getParameter("sznj");
			String filter = "sznj = '" + sznj + "' and xn = '" + xn + "'and xq ='" + xq + "'and fyh ='" + fyh + "'"
					+ "and zydm ='" + zydm + "'and xslxm ='" + xslxm + "'" ;
			String order = null;
			List<JxZqkhsjb> list =  (List<JxZqkhsjb>)this.jxZqkhsjbService.Query(filter,order);
			
			Date date = new Date();
			
					if( list.get(0).getXslxm().equals(xslxm)
							&&list.get(0).getSznj().equals(sznj) &&
							list.get(0).getFyh().equals(fyh) && list.get(0).getZydm().equals(zydm)
							&&list.get(0).getXn().equals(xn) && 
							list.get(0).getXq().equals(xq) &&
							date.getTime() >= list.get(0).getKssj().getTime() 
							&& date.getTime() <= list.get(0).getJssj().getTime() ){
						setResult(new JsonResult(list, list.size()));
						result.setSuccess(true);
//					}
			}else{
						result.setSuccess(false);
						result.setMsg("当前不在开题报告申请时间范围内！");
					}
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	public String changeFlowFlag() {
		try{
			jxZqkhsjbService.changeFlowFlag(sznj,xn,xq,fyh,zydm,xslxm,xwbz);
			result.setSuccess(true);
		}catch(Exception e){
			result.setSuccess(false);
			result.setMsg("读取数据失败！");
		}
		return SUCCESS;
	}

}