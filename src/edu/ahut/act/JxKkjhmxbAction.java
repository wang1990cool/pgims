package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxKkjhmxb;
import edu.ahut.model.JxKkjhzb;
import edu.ahut.service.JxKkjhmxbService;
import edu.ahut.service.JxKkjhzbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxKkjhmxbAction extends ActionSupport{
	private static final long serialVersionUID = 4688235193882061219L;
	static private String filter = null;
	private List<?> datas;
	private List<?> kkjhDatas;
	private JxKkjhmxbService jxKkjhmxbService;
	private JxKkjhzbService jxKkjhzbService;
	private JsonResult result = new JsonResult();
	
	public JxKkjhmxbAction(){
		jxKkjhmxbService = (JxKkjhmxbService) SpringContextUtil.getBean("JxKkjhmxbServiceImpl");
		jxKkjhzbService = (JxKkjhzbService) SpringContextUtil.getBean("JxKkjhzbServiceImpl");
	}

	public static String getFilter() {
		return filter;
	}

	public static void setFilter(String filter) {
		JxKkjhmxbAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JxKkjhmxbService getJxKkjhmxbService() {
		return jxKkjhmxbService;
	}

	public void setJxKkjhmxbService(JxKkjhmxbService jxKkjhmxbService) {
		this.jxKkjhmxbService = jxKkjhmxbService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}
	
	public List<?> getKkjhDatas() {
		return kkjhDatas;
	}

	public void setKkjhDatas(List<?> kkjhDatas) {
		this.kkjhDatas = kkjhDatas;
	}

	public JxKkjhzbService getJxKkjhzbService() {
		return jxKkjhzbService;
	}

	public void setJxKkjhzbService(JxKkjhzbService jxKkjhzbService) {
		this.jxKkjhzbService = jxKkjhzbService;
	}

	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<JxKkjhmxb> pageList = jxKkjhmxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
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
		List<?> list = jxKkjhmxbService.getAll(filters,orders);
		setResult(new JsonResult(list,list.size()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	public String FakcList(){
		try {
			String pyfah = ServletActionContext.getRequest().getParameter("pyfah");
			List<?> fakcList = jxKkjhmxbService.findByPyfah(pyfah);
			result.setList(fakcList);
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Add(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxKkjhmxb grjh = (JxKkjhmxb) JSONObject.toBean(json,JxKkjhmxb.class);
			jxKkjhmxbService.add(grjh);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	public String Edit(){
		JSONObject json = JSONObject.fromObject(datas.get(0));
		try {
			JxKkjhmxb grjhkc = (JxKkjhmxb) JSONObject.toBean(json, JxKkjhmxb.class);
			jxKkjhmxbService.update(grjhkc);
			result.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
	// 保存个人计划课程
	public String SaveKkjhmx(){
		try {
			String kkjhh = ServletActionContext.getRequest().getParameter("kkjhh");
			if(datas != null){
				jxKkjhmxbService.deleteAllByKkjhh(kkjhh);
				for (int i = 0; i < datas.size(); i++) {
					JSONObject json = JSONObject.fromObject(datas.get(i));
					JxKkjhmxb jhkc = (JxKkjhmxb) JSONObject.toBean(json,JxKkjhmxb.class);
					jxKkjhmxbService.add(jhkc);
				}
			}else{
				jxKkjhmxbService.deleteAllByKkjhh(kkjhh);
			}
			if(kkjhDatas!=null){
				JSONObject kkjhJson = JSONObject.fromObject(kkjhDatas.get(0));
				JxKkjhzb kkjh = (JxKkjhzb) JSONObject.toBean(kkjhJson,JxKkjhzb.class);
				jxKkjhzbService.update(kkjh);
			}
			result.setSuccess(true);
		} catch (Exception e) {
			result.setSuccess(false);
		}
		return SUCCESS;
	}
	
}
