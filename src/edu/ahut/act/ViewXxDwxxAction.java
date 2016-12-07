package edu.ahut.act;

import java.util.ArrayList;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.TreeNode;
import edu.ahut.service.ViewXxDwxxService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewXxDwxxAction extends ActionSupport{
	

	private static final long serialVersionUID = 8669307733221245613L;
	private JsonResult result = new JsonResult();
	private String filters;
	private String order;
	private List<?> datas;
	private ViewXxDwxxService viewXxDwxxService;
	
	public ViewXxDwxxAction() {
		this.viewXxDwxxService = (ViewXxDwxxService) SpringContextUtil
				.getBean("ViewXxDwxxServiceImpl");
	}

	public String getFilters() {
		return filters;
	}

	public void setFilters(String filters) {
		this.filters = filters;
	}


	public String getOrder() {
		return order;
	}


	public void setOrder(String order) {
		this.order = order;
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

	public ViewXxDwxxService getViewXxDwxxService() {
		return viewXxDwxxService;
	}

	public void setViewXxDwxxService(ViewXxDwxxService viewXxDwxxServiceImpl) {
		this.viewXxDwxxService = viewXxDwxxServiceImpl;
	}

	public String GetDwmc(){
		List<?> list = this.viewXxDwxxService.Query(filters, order);
		setResult(new JsonResult(list, list.size()));
		return SUCCESS;
	}
	
	public String getTreeData() {
		try {
			String dicTabName = ServletActionContext.getRequest().getParameter("dicTabName");
			List<TreeNode> lst = new ArrayList<TreeNode>();
			lst.add(viewXxDwxxService.getTreeData(dicTabName));
			this.setResult(new JsonResult(lst,lst.size()));	
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
