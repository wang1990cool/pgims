package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.service.JxSkjhgxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxSkjhgxbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private JxSkjhgxbService jxSkjhgxbService;
	private JsonResult result = new JsonResult();

	public JxSkjhgxbAction(){
		jxSkjhgxbService = (JxSkjhgxbService) SpringContextUtil.getBean("JxSkjhgxbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		JxSkjhgxbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JxSkjhgxbService getJxSkjhgxbService() {
		return jxSkjhgxbService;
	}

	public void setJxSkjhgxbService(JxSkjhgxbService jxSkjhgxbService) {
		this.jxSkjhgxbService = jxSkjhgxbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
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
		Page<JxSkjhgxb> pageList = jxSkjhgxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String GetAll(){
		try {
			List<?> list = jxSkjhgxbService.getAll();
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
}
