package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.AttachData;
import edu.ahut.model.PyFakcb;
import edu.ahut.model.PyFazb;
import edu.ahut.service.AttachDataService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class AttachDataAction extends ActionSupport{
	

	private static final long serialVersionUID = 5008276581321670323L;
	private static String filter = "";
	private List<?> datas;
	private AttachDataService attachDataService;
	private JsonResult result = new JsonResult();

	public AttachDataAction(){
		attachDataService = (AttachDataService) SpringContextUtil.getBean("AttachDataServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		AttachDataAction.filter = filter;
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
	
	public AttachDataService getAttachDataService() {
		return attachDataService;
	}

	public void setAttachDataService(AttachDataService attachDataService) {
		this.attachDataService = attachDataService;
	}

	public String GetAll(){
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir !=null) {
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		List<?> list = attachDataService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
}
