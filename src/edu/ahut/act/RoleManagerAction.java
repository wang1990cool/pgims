package edu.ahut.act;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.TreeNode;
import edu.ahut.model.WebMenu;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebRole;
import edu.ahut.model.WebUser;
import edu.ahut.service.WebMenuService;
import edu.ahut.service.WebRightService;
import edu.ahut.service.WebRoleService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.Filter;
import edu.ahut.util.FilterList;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class RoleManagerAction extends ActionSupport {
	private static final long serialVersionUID = -7097288397033467551L;

	private JsonResult result = new JsonResult();
	private List<?> datas;
	private WebRoleService webRoleService;
	private WebMenuService webMenuService;
	private WebRightService webRightService;
	public RoleManagerAction(){
		this.webRoleService = (WebRoleService) SpringContextUtil
				.getBean("WebRoleServiceImpl");
		this.webMenuService = (WebMenuService) SpringContextUtil
				.getBean("WebMenuServiceImpl");
		this.webRightService = (WebRightService) SpringContextUtil
				.getBean("WebRightServiceImpl");
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

	public WebRoleService getWebRoleService() {
		return webRoleService;
	}

	public void setWebRoleService(WebRoleService webRoleServiceImpl) {
		this.webRoleService = webRoleServiceImpl;
	}

	public WebMenuService getWebMenuService() {
		return webMenuService;
	}

	public void setWebMenuService(WebMenuService WebMenuServiceImpl) {
		this.webMenuService = WebMenuServiceImpl;
	}

	public WebRightService getWebRightService() {
		return webRightService;
	}

	public void setWebRightService(WebRightService webRightService) {
		this.webRightService = webRightService;
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
		
		String filters = CommonUtil.MergeFilter(null,searchParams);
		
		Page<WebRole> pageList = webRoleService.pageQuery(startNo,
				pageSize, filters, order);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		
		return SUCCESS;
	}

	public String Add() {
		JSONObject json = JSONObject.fromObject(datas.get(0)); 
		try {
			String rightCode = ServletActionContext.getRequest().getParameter("rightCode");
			String [] rightcodes = rightCode.split(",");
			WebRole webRole = (WebRole) JSONObject.toBean(json, WebRole.class);
			
			List<WebRight> rightList = new ArrayList<WebRight>();
			for(int i = 0;i < rightcodes.length;i++){
				WebRight right = this.webRightService.findByRightCode(rightcodes[i]);
				rightList.add(right);
			}
			webRole.setWebRights(rightList);
			webRoleService.add(webRole);
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
			String hql ="delete WebRole where roleCode in (" + ids + ")"; 
			webRoleService.hqlExecute(hql);
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
			String rightCode = ServletActionContext.getRequest().getParameter("rightCode");
			String [] rightcodes = rightCode.split(",");
			WebRole webRole = (WebRole) JSONObject.toBean(json, WebRole.class);
			
			List<WebRight> rightList = new ArrayList<WebRight>();
			for(int i = 0;i < rightcodes.length;i++){
				WebRight right = this.webRightService.findByRightCode(rightcodes[i]);
				rightList.add(right);
			}
			webRole.setWebRights(rightList);
			webRoleService.update(webRole);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}

	public WebRole Info() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		String roleCode = json.getString("roleCode");
		return webRoleService.findByRoleCode(roleCode);
	}

	public String GetAll() {
		List<?> list = this.getWebRoleService().getAll();
		setResult(new JsonResult(list, list.size()));
		
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
					filters = CommonUtil.MergeFilter(null,params);
				
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = webRoleService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}
	
	@SuppressWarnings({ "unused", "unchecked" })
	public String getWebMenus(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		try {
			int nodeId = Integer.parseInt(ServletActionContext.getRequest().getParameter("node"));
	        
			WebRole webRole=webUser.getWebRole();
			List<WebMenu> mList = (List<WebMenu>) webUser.getWebRole().getWebMenus();
		    Filter<WebMenu,Integer> filter = new Filter<WebMenu,Integer>() {
	           public boolean isMatched(WebMenu m, Integer mid) {
	                return (m.getParentid().equals(mid) && m.getShowflag());
	            }
	        };
	        List<WebMenu> menus = new FilterList<Integer>().filterList(mList, filter, nodeId);
	        this.setResult(new JsonResult(menus,menus.size()));
	        result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setMsg("菜单获取失败！");
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	@SuppressWarnings({ "unused", "unchecked" })
	public String getAllocateMenus(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		try {
			int nodeId = Integer.parseInt(ServletActionContext.getRequest().getParameter("node"));
	        
			WebRole webRole=webUser.getWebRole();
			List<WebMenu> mList = (List<WebMenu>) webUser.getWebRole().getWebMenus();
		    Filter<WebMenu,Integer> filter = new Filter<WebMenu,Integer>() {
	           public boolean isMatched(WebMenu m, Integer mid) {
	                return (m.getParentid().equals(mid) && m.getShowflag());
	            }
	        };
	        List<WebMenu> menus = new FilterList<Integer>().filterList(mList, filter, nodeId);
	        
			List<TreeNode> ListMenu = new ArrayList<TreeNode>();
			TreeNode node;
			for (WebMenu webMenu : menus){
				node = new TreeNode();

				node.setId(webMenu.getId());
				node.setOrderid(webMenu.getOrderid());
				node.setParameters(webMenu.getParam());
				node.setParentid(webMenu.getParentid());
				node.setText(webMenu.getText());
				node.setQtip(webMenu.getQtip());
				node.setIconCls(webMenu.getIconCls());
				node.setUrl(webMenu.getUrl());
				node.setLeaf(webMenu.getLeaf());
				node.setChecked(false);

				ListMenu.add(node);
			}
	        
			this.setResult(new JsonResult(ListMenu, ListMenu.size()));
	        result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setMsg("菜单获取失败！");
			result.setSuccess(false);
		}
		return "tree";
	}

	public String AllocateMenu() {
		JSONObject json = JSONObject.fromObject(datas.get(0)); 
		
		WebRole webRole = this.getWebRoleService().findByRoleCode(json.getString("roleCode"));
		webRole.setWebMenus(null);
		
		List<WebMenu> menuList = new ArrayList<WebMenu>();
		try {
			String [] menuIds = datas.get(1).toString().split(",");
			
			for (int i = 0; i < menuIds.length; i++) {
				menuList.add(this.getWebMenuService().getWebMenuByMenuId(
						Integer.valueOf(menuIds[i])));
			}
			webRole.setWebMenus(menuList);
			webRoleService.update(webRole);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	
	public String GetRightsByRoleCode(){
		try {
			String roleCode = ServletActionContext.getRequest().getParameter("roleCode");
			WebRole role = webRoleService.findByRoleCode(roleCode);
			List<?> webRights = role.getWebRights();
			result.setList(webRights);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		
		return SUCCESS;
	}
	
}
