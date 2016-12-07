package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebUser;
import edu.ahut.service.WebRoleService;
import edu.ahut.service.WebUserService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class UserManagerAction extends ActionSupport {
	private static final long serialVersionUID = 1156321515582340432L;

	static private final String filter = "userName != 'admin'";
	private JsonResult result = new JsonResult();
	private List<?> datas;
	private WebUserService webUserService;
	private WebRoleService webRoleService;
	
	public static String getFilter() {
		return filter;
	}

	public UserManagerAction(){
		this.webUserService = (WebUserService) SpringContextUtil
				.getBean("WebUserServiceImpl");
		this.webRoleService = (WebRoleService) SpringContextUtil
				.getBean("WebRoleServiceImpl");
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

	public WebUserService getWebUserService() {
		return webUserService;
	}

	public void setWebUserService(WebUserService webUserServiceImpl) {
		this.webUserService = webUserServiceImpl;
	}

	public WebRoleService getWebRoleService() {
		return webRoleService;
	}

	public void setWebRoleService(WebRoleService webRoleService) {
		this.webRoleService = webRoleService;
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
		
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		
		Page<WebUser> pageList = webUserService.pageQuery(startNo,
				pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return SUCCESS;
	}
	
	public String Add() {
		JSONObject json = JSONObject.fromObject(datas.get(0)); 
		try {
			WebUser webUser = (WebUser) JSONObject.toBean(json, WebUser.class);
			webUser.setWebRole(webRoleService.findByRoleCode(json.getString("roleCode")));
			webUserService.add(webUser);
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
			webUserService.deleteByIds(ids);
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
			WebUser webUser = (WebUser) JSONObject.toBean(json, WebUser.class);
			webUser.setWebRole(webRoleService.findByRoleCode(
					json.getString("roleCode")));
			webUserService.update(webUser);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}

	public WebUser Info() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		String userName = json.getString("userName");
		
		return webUserService.findByUserName(userName);
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
				List<?> tList = webUserService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}

	public String PwdSet() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			String userName = json.getString("userName");
			String userPwd = json.getString("userPwd");
			String newUserPwd = json.getString("newUserPwd");
			
			WebUser webUser = webUserService.findByUserName(userName);
			if (webUser == null) {
				result.setSuccess(false);
				result.setMsg("没有该用户！");
			}
			if (!userPwd.equals(webUser.getUserPwd())) {
				result.setSuccess(false);
				result.setMsg("旧密码错误！");
			} else {
				webUser.setUserPwd(newUserPwd);
				webUserService.update(webUser);
				result.setSuccess(true);
				result.setMsg("密码设置成功！");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	public String CheckIsExistByName(){
		String name = ServletActionContext.getRequest().getParameter("userName");
		result.setSuccess(webUserService.checkIsExistByName(name));
		return SUCCESS;
	}
}
