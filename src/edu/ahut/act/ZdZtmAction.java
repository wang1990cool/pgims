package edu.ahut.act;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.ZdZtm;
import edu.ahut.service.ZdZtmService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ZdZtmAction extends ActionSupport {
	
	private static final long serialVersionUID = 9109833022067920852L;
	private JsonResult result = new JsonResult();
	private boolean success;
	private ZdZtmService zdZtmService;
	
	public ZdZtmAction(){
		this.zdZtmService = (ZdZtmService) SpringContextUtil
				.getBean("ZdZtmServiceImpl");
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

	public ZdZtmService getZdZtmService() {
		return zdZtmService;
	}

	public void setZdZtmService(ZdZtmService zdZtmService) {
		this.zdZtmService = zdZtmService;
	}

	public String getZt(){
		String ztlb = ServletActionContext.getRequest().getParameter("ztlb");
		try {
			List<ZdZtm> list = zdZtmService.getZt(ztlb);
			setResult(new JsonResult(list, list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

}