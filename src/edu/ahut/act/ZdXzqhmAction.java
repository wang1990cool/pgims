package edu.ahut.act;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.TreeNode;
import edu.ahut.service.ZdXzqhmService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ZdXzqhmAction extends ActionSupport {
	
	private static final long serialVersionUID = 9109833022067920852L;
	private JsonResult result = new JsonResult();
	private boolean success;
	private ZdXzqhmService zdXzqhmService;
	public String dicTabName;
	
	public ZdXzqhmAction(){
		this.zdXzqhmService = (ZdXzqhmService) SpringContextUtil
				.getBean("ZdXzqhmServiceImpl");
	}
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public String getDicTabName() {
		return dicTabName;
	}

	public void setDicTabName(String dicTabName) {
		this.dicTabName = dicTabName;
	}


	public ZdXzqhmService getTreeService() {
		return zdXzqhmService;
	}

	public void setZdXzqhmService(ZdXzqhmService zdXzqhmServiceImpl) {
		this.zdXzqhmService = zdXzqhmServiceImpl;
	}


	public String getTreeData() {
		try {
			List<TreeNode> lst = new ArrayList<TreeNode>();
			lst.add(zdXzqhmService.getTreeData(dicTabName));
			this.setResult(new JsonResult(lst,lst.size()));	
			this.setSuccess(true);
		} catch (Exception e) {
			this.setSuccess(false);
		}
		return SUCCESS;
	}

}