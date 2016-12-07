package edu.ahut.act;

import java.util.List;

import net.sf.ezmorph.object.DateMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditFlow;
import edu.ahut.service.AuditFlowService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class AuditFlowAction extends ActionSupport{
	private static final long serialVersionUID = 5943216485711085702L;

	private String filter = null;
	private List<?> datas;
	private AuditFlow auditFlow;
	private AuditFlowService auditFlowService;
	private JsonResult result = new JsonResult();;
	private Boolean success;
	private String targetTab;
	
	public AuditFlowAction() {
		auditFlowService = (AuditFlowService) SpringContextUtil.getBean("AuditFlowServiceImpl");
		this.auditFlow = (AuditFlow) ActionContext.getContext().getSession().get("auditFlow");
	}
	
	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}
	
	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
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

	public AuditFlow getAuditFlow() {
		return auditFlow;
	}

	public void setAuditFlow(AuditFlow auditFlow) {
		this.auditFlow = auditFlow;
	}

	public String getTargetTab() {
		return targetTab;
	}

	public void setTargetTab(String targetTab) {
		this.targetTab = targetTab;
	}

	public String Page() {
		return "page";
	}

	public String List() {
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if (sort != null && dir != null)
			order = sort + " " + dir;
		
		try {
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
			Page<AuditFlow> pageList = (Page<AuditFlow>) auditFlowService.pageQuery(startNo,pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	public String add() {
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(new String[] { "yyyy-MM-dd",
							"yyyy-MM-dd HH:mm:ss" }));
			AuditFlow auditFlow = (AuditFlow) JSONObject.toBean(json, AuditFlow.class);		
			auditFlowService.add(auditFlow);
			this.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			this.setSuccess(false);
		}
		return SUCCESS;
	}

	public String edit() {
		JSONObject json = JSONObject.fromObject(datas.get(0));

		try {
			JSONUtils.getMorpherRegistry().registerMorpher(
					new DateMorpher(new String[] { "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss" }));
			AuditFlow auditFlow = (AuditFlow) JSONObject.toBean(json, AuditFlow.class);
			auditFlowService.update(auditFlow);
			this.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			this.setSuccess(false);
		}
		return SUCCESS;
	}

	public String del() {
		try {
			String flowCodes = ServletActionContext.getRequest().getParameter("ids");
			auditFlowService.deleteByFlowCodes(flowCodes);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}

	public String toExcel() {
		String excelParams = ServletActionContext.getRequest().getParameter(
				"excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String paramString = jsonParam.getString("params");
				JSONObject paramsJO = JSONObject.fromObject(paramString);
				String params = paramsJO.getString("params");
				String filters = null;
				
				if(!params.equals(""))
					filters = CommonUtil.MergeFilter(null,params);
				if(order == "null"|| order =="") order = null;
				
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = auditFlowService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String CheckFlowCode() {
		String flowCode = ServletActionContext.getRequest().getParameter("flowCode");
		result.setSuccess(auditFlowService.checkFlowCode(flowCode));
		return SUCCESS;
	}
	
}
