package edu.ahut.act;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.WebRight;
import edu.ahut.model.WebRole;
import edu.ahut.model.WebUser;
import edu.ahut.service.ViewXxJxdwService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewXxJxdwAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
    private String filter = "";
	private List<?> datas;
	private ViewXxJxdwService viewXxJxdwService;
	private JsonResult result = new JsonResult();

	public ViewXxJxdwAction(){
		viewXxJxdwService = (ViewXxJxdwService) SpringContextUtil.getBean("ViewXxJxdwServiceImpl");
	}

	@SuppressWarnings("unchecked")
	public String getFilter() {
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		WebRole webRole = webUser.getWebRole();
		List<WebRight> webRights = (List<WebRight>) webRole.getWebRights(); //获得该角色具备的权利
		if(webRights.size() > 0){
			for(int i = 0 ;i < webRights.size();i++){
				WebRight webRight = webRights.get(i);
				String temp = "";
				switch(webRight.getRightCode()){
					case "PersonalRight":{
						String szdwh = webUser.getSzdwh();
						temp = " dwh='" + szdwh + "' ";
						break;
					}
					case "AcademyRight":{// 学院权限，获得学院可以审批的培养方案
						String szdwh = webUser.getSzdwh();
						temp = " dwh='" + szdwh + "' ";
						break;
					}
					case "SchoolRight":{//获得全校能审批的培养方案
						temp = "";
						break;
					}
					case "SuperRight":{//获得所有的培养方案
						temp = "";
						break;
					}
					case "Other":{// 其他学院的培养方案
						String[] szdwhArray = webRight.getRightFilter().split(",");
						StringBuffer szdwhStr = new StringBuffer();
						if(szdwhArray.length > 0){
							for(String szdwh:szdwhArray){
								szdwhStr.append("'" + szdwh + "',");
							}
							szdwhStr.deleteCharAt(szdwhStr.length()-1); 
							temp = " dwh in (" + szdwhStr + ") ";
						}else{
							temp = "";
					}
				}
			}
				if(temp != ""){
					if(webRights.size() == 1){
						filter = temp;
					}else{
						if((i+1) == webRights.size()){
							filter += temp;
						}else{
							filter += temp + " or ";
						}
				}
			}
			}
		}
		if(filter.endsWith(" or ")){
			filter = filter.substring(0, filter.length()-4);
		}
		return filter;
	}
	
	public  void setFilter(String filter) {
		this.filter = filter;
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
	
	
	public ViewXxJxdwService getViewXxJxdwService() {
		return viewXxJxdwService;
	}

	public void setViewXxJxdwService(ViewXxJxdwService viewXxJxdwService) {
		this.viewXxJxdwService = viewXxJxdwService;
	}

	public String GetAll(){
		String filters = CommonUtil.MergeFilter(this.getFilter(), "");
		List<?> list = viewXxJxdwService.getAll(filters,null);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String getAll(){
		try {
			List<?> list = viewXxJxdwService.getAll(filter,null);
			setResult(new JsonResult(list,list.size()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
}
