package edu.ahut.act;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.AcroFields;
import com.itextpdf.text.pdf.PdfCopy;
import com.itextpdf.text.pdf.PdfImportedPage;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxXsxkall;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.JxSkxxbService;
import edu.ahut.service.PsdmService;
import edu.ahut.service.ViewJxXsxkallService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class PsdmAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private PsdmService psdmService;
	private ViewJxXsxkallService viewJxXsxkallService;
	private JxSkxxbService jxSkxxbService;
	private JsonResult result = new JsonResult();
//	private String kkkh;
	private boolean success = false;
	private String msg;

	public PsdmAction(){
		jxSkxxbService = (JxSkxxbService) SpringContextUtil.getBean("JxSkxxbServiceImpl");
		viewJxXsxkallService = (ViewJxXsxkallService) SpringContextUtil.getBean("ViewJxXsxkallServiceImpl");
		psdmService = (PsdmService) SpringContextUtil.getBean("PsdmServiceImpl");
		
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		PsdmAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxXsxkallService getViewJxXsxkallService() {
		return viewJxXsxkallService;
	}

	public void setViewJxXsxkallService(ViewJxXsxkallService viewJxXsxkallService) {
		this.viewJxXsxkallService = viewJxXsxkallService;
	}
	
	
	public PsdmService getPsdmService() {
		return psdmService;
	}

	public void setPsdmService(PsdmService psdmService) {
		this.psdmService = psdmService;
	}

	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
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

//	public String list(){
//		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
//		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
//		String sort = ServletActionContext.getRequest().getParameter("sort");
//		String dir = ServletActionContext.getRequest().getParameter("dir");
//		String orders = null;
//		if(sort != null && dir != null){
//			orders = sort + " " + dir;
//		}
//		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
//		String gh = webUser.getGh();	
//		filter = "zjjsh = '" + gh + "'";
//		String searchParams = ServletActionContext.getRequest().getParameter("params");
//		String filters = CommonUtil.MergeFilter(filter,searchParams);
//		Page<JxSkxxb> pageList = jxSkxxbService.pageQuery(startNo, pageSize, filters, orders);
//		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
//		result.setSuccess(true);
//		return SUCCESS;
//	}
	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		String filter = this.getPsdmFilter();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<JxSkxxb> pageList = jxSkxxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getPsdmFilter(){
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
	
	public String toPDF() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		try {
			JxSkxxb[] skxxArr = new  JxSkxxb[datas.size()];
			for(int i = 0; i < datas.size(); i++){
				JSONObject skxxJson = JSONObject.fromObject(datas.get(i));
				JxSkxxb skxx = (JxSkxxb) JSONObject.toBean(skxxJson, JxSkxxb.class);
				skxxArr[i] = skxx;
			}
//			List<List<ViewJxXsxkall>> jxXsxkList = psdmService.getXsxk(skxxArr);
			String url = this.createCover(rootPath,skxxArr);
		    this.setSuccess(true);
	   	    this.setMsg(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
	
	public String  createCover(String rootPath,JxSkxxb[] skxxArr) throws DocumentException, MalformedURLException, IOException{
		   StringBuffer sb = new StringBuffer();
		   sb.append(rootPath + "/"+"temps/");
		   sb.append("psdm/");
		   sb.append("PsdmTemp.pdf");
		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(resultPath);
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
		   
		   String titles = "";
		   
		   for(int q = 0;q < skxxArr.length; q++){
			   List<ViewJxXsxkall> jxXsxkList = psdmService.getXk(skxxArr[q].getKkkh());
			   String title = skxxArr[q].getKkkh() + "_" + skxxArr[q].getKch() + ".pdf";
			  
			   int ys = 0;
			   int wyrs = 0;
			   if(jxXsxkList.size() == 0){
				   ys = 1;
				   wyrs = 0;
			   }else{
				   int zrs =  jxXsxkList.size();
				   if(zrs%40 >= 0){
					   ys = zrs/40 + 1;
				   }else{
					   ys = zrs/40;
				   }
				   wyrs = zrs%40;
			   }
			   
			   ByteArrayOutputStream baos[] = new ByteArrayOutputStream[ys];
			   FileOutputStream fos = new FileOutputStream(resultPath+"/"+title);
			   
			   for(int i = 0; i< ys; i++){
				   int m = 40;
				   if(i + 1 == ys){
					   m = wyrs;
				   }
				   baos[i] = new ByteArrayOutputStream();  
				   PdfReader reader=new PdfReader(sb.toString());
				   PdfStamper stamper=new PdfStamper(reader,baos[i]);
				   AcroFields form=stamper.getAcroFields();
				   
				   form.setField("xn", skxxArr[q].getXn());
				   form.setField("xq", skxxArr[q].getXq());
				   form.setField("kkkh", skxxArr[q].getKkkh());
				   form.setField("kcmc", skxxArr[q].getKcmc());
				   form.setField("kkdw", skxxArr[q].getKkdw());
				   form.setField("zjjs", skxxArr[q].getZjjs());
				   
				   if(skxxArr[q].getZxs() != null){
					   form.setField("zxs", skxxArr[q].getZxs().toString());
				   }
				   
				   if(skxxArr[q].getKcxf() != null){
					   form.setField("kcxf", skxxArr[q].getKcxf().toString());
				   }
				   
				   for(int k = 0; k < m ; k++){
					   ViewJxXsxkall xsxk = jxXsxkList.get(i*40 + k);
					   form.setField("xh"+k, xsxk.getXh());
					   form.setField("xm"+k,xsxk.getXm());
					   form.setField("zymc"+k,xsxk.getZymc());
				   }
				   stamper.setFormFlattening(true);
				   stamper.close();
				   reader.close();
			   }
			   
			   Document doc = new Document();  
	           PdfCopy pdfCopy = new PdfCopy(doc, fos);  
	           doc.open();  
	           PdfImportedPage impPage = null; 
	           
	           /**取出之前保存的每页内容*/  
	           for (int i = 0; i < ys; i++) {  
	               impPage = pdfCopy.getImportedPage(new PdfReader(baos[i].toByteArray()), 1);  
	               pdfCopy.addPage(impPage);  
	           } 
	    	   doc.close();//当文件拷贝  记得关闭doc 
	    	   titles += "temps/psdm/" + title + ",";
		   }
		   
		   return titles.substring(0,titles.length()-1);
	   }
	
}
