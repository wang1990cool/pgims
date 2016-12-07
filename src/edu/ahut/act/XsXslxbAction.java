package edu.ahut.act;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.service.XsXslxbService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class XsXslxbAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private XsXslxbService xsXslxbService;
	private JsonResult result = new JsonResult();
	
	public XsXslxbAction(){
		xsXslxbService = (XsXslxbService) SpringContextUtil.getBean("XsXslxbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public XsXslxbService getXsXslxbService() {
		return xsXslxbService;
	}

	public void setXsXslxbService(XsXslxbService xsXslxbService) {
		this.xsXslxbService = xsXslxbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public String List(){
		System.out.println("#33");
		List<?> list = xsXslxbService.getAll();
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
}
