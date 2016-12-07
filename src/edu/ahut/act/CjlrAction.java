
package edu.ahut.act;

import java.util.ArrayList;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.CjdData;
import edu.ahut.model.CjxxData;
import edu.ahut.service.CjlrService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.PDFManager;
import edu.ahut.util.SpringContextUtil;

public class CjlrAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private CjlrService cjlrService;
	private JsonResult result = new JsonResult();
	private String kkkh;
	private boolean success = false;
	private String msg;
	
	public CjlrAction(){
		cjlrService = (CjlrService) SpringContextUtil.getBean("CjlrServiceImpl");
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
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public String getKkkh() {
		return kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public CjlrService getCjlrService() {
		return cjlrService;
	}

	public void setCjlrService(CjlrService cjlrService) {
		this.cjlrService = cjlrService;
	}

	
	public String SaveData() {
		
		String cjxxData = ServletActionContext.getRequest().getParameter("cjxxData");
		String flag = ServletActionContext.getRequest().getParameter("flag");
//		String cjbl = ServletActionContext.getRequest().getParameter("cjbl");
		try {
			cjlrService.saveCjxxData(cjxxData,flag);
			result.setSuccess(true);
			result.setMsg("数据保存成功！");
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
			result.setMsg("数据保存失败！");
		}
		return SUCCESS;
	}
	
	public String GetData(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		ArrayList<CjxxData> cjxxList = new ArrayList<CjxxData>();
		try {
			CjxxData cjxxData = cjlrService.getCjxxData(kkkh);
			cjxxList.add(cjxxData);
			result = new JsonResult(cjxxList, cjxxList.size());
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("读取数据失败！");
		}
		return SUCCESS;
	}
	
	public String GenCjmx(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh"); 
		String kch = ServletActionContext.getRequest().getParameter("kch");
		String xn = ServletActionContext.getRequest().getParameter("xn");
		String xq = ServletActionContext.getRequest().getParameter("xq");
		try{
			cjlrService.genCjmx(kkkh, kch, xn, xq);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("读取数据失败！");
		}
		return SUCCESS;
	}
	
	public String Reback(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		try{
			cjlrService.reback(kkkh);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("撤回失败！");
		}
		return SUCCESS;
	}
	
	public String Callback(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		try{
			cjlrService.callback(kkkh);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("撤回失败！");
		}
		return SUCCESS;
	}
	
	public String Pass(){
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		try{
			cjlrService.pass(kkkh);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMsg("确认失败！");
		}
		return SUCCESS;
	}
	
	public String toPDF() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		PDFManager pdfmanager = new PDFManager();
		try {
			CjdData cjdData = cjlrService.getCjdData(kkkh);
			 String url = pdfmanager.createCover(rootPath,cjdData);
			 this.setSuccess(true);
			 this.setMsg(url);
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
}
