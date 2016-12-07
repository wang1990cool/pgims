package edu.ahut.act;

import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebInfo;
import edu.ahut.model.WebUser;
import edu.ahut.service.WebInfoService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class InfoAction extends ActionSupport {
	private static final long serialVersionUID = 5943216485711085702L;

	private String filter = null;
	private List<?> datas;
	private WebUser webUser;
	private WebInfoService webInfoService;
	private JsonResult result = new JsonResult();;

	public InfoAction() {
		webInfoService = (WebInfoService) SpringContextUtil
				.getBean("WebInfoServiceImpl");
		this.webUser = (WebUser) ActionContext.getContext().getSession()
				.get("webUser");
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

	public WebUser getWebUser() {
		return webUser;
	}

	public void setWebUser(WebUser webUser) {
		this.webUser = webUser;
	}

	public String Page() {
		return "page";
	}

	public String Last() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest()
				.getParameter("limit"));
		
		filter = "publish=1";
		String order = "orderid desc";
		
		try {
			String searchParams = ServletActionContext.getRequest()
					.getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			Page<WebInfo> pageList = webInfoService.pageQuery(startNo,
					pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),
					pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	public String More() {
		filter = "publish=1";
		String order = "orderid desc";
		
		try {
			String searchParams = ServletActionContext.getRequest()
					.getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			List<WebInfo> webInfoLst = webInfoService.Query(filters, order);
			setResult(new JsonResult(webInfoLst, webInfoLst.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
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
		
		try {
			String searchParams = ServletActionContext.getRequest()
					.getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			Page<WebInfo> pageList = webInfoService.pageQuery(startNo,
					pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),
					pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	public String Add() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd",
							"yyyy-MM-dd HH:mm:ss" }));
			WebInfo webInfo = (WebInfo) JSONObject.toBean(json, WebInfo.class);

			webInfo.setAuthor(getWebUser().getUserName());
			webInfo.setAddTime(new java.util.Date());
			webInfoService.add(webInfo);
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
			WebInfo webInfo = (WebInfo) JSONObject.toBean(json, WebInfo.class);

			webInfo.setAuthor(getWebUser().getUserName());
			webInfo.setAddTime(new java.util.Date());
			webInfoService.update(webInfo);

			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String publish() {
		String ids = ServletActionContext.getRequest().getParameter("ids");
		ids = "'" + ids.replace(",","','") + "'";
		String publish = ServletActionContext.getRequest().getParameter(
				"publish");

		try {
			webInfoService.hqlExecute("update WebInfo set publish="
					+ publish + " where id in (" + ids + ")");
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String Del() {
		String ids = ServletActionContext.getRequest().getParameter("ids");
		ids = "'" + ids.replace(",","','") + "'";

		try {
			webInfoService.hqlExecute("Delete WebInfo where id in (" + ids + ")");
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String toExcel() {
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
					filters = CommonUtil.MergeFilter(null,params);
				
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = webInfoService.Query(filters, order);
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