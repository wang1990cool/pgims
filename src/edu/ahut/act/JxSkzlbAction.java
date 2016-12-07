package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkzlb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxSkzlbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxSkzlbAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private List<?> skjhDatas;
	private JsonResult result = new JsonResult();
	
	private JxSkzlbService jxSkzlbService;

	public JxSkzlbAction(){
		jxSkzlbService = (JxSkzlbService) SpringContextUtil.getBean("JxSkzlbServiceImpl");
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		JxSkzlbAction.filter = filter;
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
	
	public List<?> getSkjhDatas() {
		return skjhDatas;
	}

	public void setSkjhDatas(List<?> skjhDatas) {
		this.skjhDatas = skjhDatas;
	}
	
	
	public JxSkzlbService getJxSkzlbService() {
		return jxSkzlbService;
	}

	public void setJxSkzlbService(JxSkzlbService jxSkzlbService) {
		this.jxSkzlbService = jxSkzlbService;
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
		String filter = this.getSkzlFilter();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter, searchParams);
		Page<JxSkzlb> pageList = jxSkzlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String Edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxSkzlb skzl = (JxSkzlb) JSONObject.toBean(json, JxSkzlb.class);
			jxSkzlbService.update(skzl);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String EditBatch(){
		try {
			if(datas != null){
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					JxSkzlb skzl = (JxSkzlb) JSONObject.toBean(json, JxSkzlb.class);
					jxSkzlbService.update(skzl);
				}
			}
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String FileUploadZl() {
		return "pfileUploadZl";
	}
	
	public String FileDeleteZl() {
		return "pfileDeleteZl";
	}
	
	public String FileDownloadZl() {
		return "pfileDownloadZl";
	}
	
	@SuppressWarnings("unchecked")
	public String getSkzlFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String userName = webUser.getUserName();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("SchoolRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("PersonalRight".equals(webRight.getRightCode())){
				filter = "zjjsh = '" + userName + "'";
			}else if("AcademyRight".equals(webRight.getRightCode())){
				filter = "kkdwh='" + szdwh + "'";
			}
		}
		return filter;
	}
	
}
