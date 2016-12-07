package edu.ahut.act;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import edu.ahut.model.XsJcxxb;
import edu.ahut.model.ViewJxCjcxAll;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.XsJcxxbService;
import edu.ahut.service.CjdyService;
import edu.ahut.service.ViewJxCjcxAllService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class CjdyAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private CjdyService cjdyService;
	private ViewJxCjcxAllService viewJxCjcxAllService;
	private XsJcxxbService xsJcxxbService;
	private JsonResult result = new JsonResult();
	private boolean success = false;
	private String msg;

	public CjdyAction(){
		xsJcxxbService = (XsJcxxbService) SpringContextUtil.getBean("XsJcxxbServiceImpl");
		viewJxCjcxAllService = (ViewJxCjcxAllService) SpringContextUtil.getBean("ViewJxCjcxAllServiceImpl");
		cjdyService = (CjdyService) SpringContextUtil.getBean("CjdyServiceImpl");
		
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		CjdyAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public ViewJxCjcxAllService getViewJxCjcxAllService() {
		return viewJxCjcxAllService;
	}

	public void setViewJxCjcxAllService(ViewJxCjcxAllService viewJxCjcxAllService) {
		this.viewJxCjcxAllService = viewJxCjcxAllService;
	}
	
	
	public CjdyService getCjdyService() {
		return cjdyService;
	}

	public void setCjdyService(CjdyService cjdyService) {
		this.cjdyService = cjdyService;
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

	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String orders = null;
		if(sort != null && dir != null){
			orders = sort + " " + dir;
		}
		String filter = this.getXsFilter();
		String searchParams = ServletActionContext.getRequest().getParameter("params");
		String filters = CommonUtil.MergeFilter(filter,searchParams);
		Page<XsJcxxb> pageList = xsJcxxbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(),pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String getXsFilter(){
		WebUser webUser = (WebUser) ActionContext.getContext().getSession().get("webUser");
		String szdwh = webUser.getSzdwh();
		String filter = "";
		List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
		for(int i = 0;i < webRights.size();i++){
			WebRight webRight = webRights.get(i);
			if("SuperRight".equals(webRight.getRightCode()) || "SchoolRight".equals(webRight.getRightCode())){
				filter = null;
				break;
			}else if("AcademyRight".equals(webRight.getRightCode()) || "PersonalRight".equals(webRight.getRightCode())){
				filter = "fyh='" + szdwh + "'";
			}
		}
		return filter;
	}
	
	public String toPDF() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		try {
			XsJcxxb[] xsxxArr = new  XsJcxxb[datas.size()];
			for(int i = 0; i < datas.size(); i++){
				JSONObject xsxxJson = JSONObject.fromObject(datas.get(i));
				XsJcxxb xsxx = (XsJcxxb) JSONObject.toBean(xsxxJson, XsJcxxb.class);
				xsxxArr[i] = xsxx;
			}
		
			String url = this.createCover(rootPath,xsxxArr);
		    this.setSuccess(true);
	   	    this.setMsg(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
	
	public String  createCover(String rootPath,XsJcxxb[] xsxxArr) throws DocumentException, MalformedURLException, IOException{
		   StringBuffer sb = new StringBuffer();
		   sb.append(rootPath + "/"+"temps/");
		   sb.append("cjdy/");
		   sb.append("CjdyTemp.pdf");
		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(resultPath);
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
		   
		   String titles = "";
		   
		   for(int q = 0;q < xsxxArr.length; q++){
			   List<ViewJxCjcxAll> xscjList = cjdyService.getCj(xsxxArr[q].getXh());
			   String title = xsxxArr[q].getXh() + ".pdf";
			  
			   double kczxf = 0, xwkcxf = 0, fxwkcxf = 0;
			   double xwkzcj = 0,fxwkzcj = 0,zcj = 0;
			   double xwkjqzcj = 0,fxwkjqzcj = 0,jqzcj = 0;
			   int countxw = 0,countfxw = 0, countzkc = 0;
			   String bz = "课程不及格，未计入统计！";
			   int ys = 0;
			   int wykcs = 0;
			   if(xscjList.size() == 0){
				   ys = 1;
				   wykcs = 0;
			   }else{
				   int zkcs =  xscjList.size();
				   if(zkcs%20 >= 0){
					   ys = zkcs/20 + 1;
				   }else{
					   ys = zkcs/20;
				   }
				   wykcs = zkcs%20;
			   }
			   
			   ByteArrayOutputStream baos[] = new ByteArrayOutputStream[ys];
			   FileOutputStream fos = new FileOutputStream(resultPath+"/"+title);
			   
			   for(int i = 0; i< ys; i++){
				   int m = 20;
				   if(i + 1 == ys){
					   m = wykcs;
				   }
				   baos[i] = new ByteArrayOutputStream();  
				   PdfReader reader=new PdfReader(sb.toString());
				   PdfStamper stamper=new PdfStamper(reader,baos[i]);
				   AcroFields form=stamper.getAcroFields();
				   
				   Date date = new Date();
				   SimpleDateFormat matter=new SimpleDateFormat("yyyy年MM月dd日");
				   
				   DecimalFormat df = new DecimalFormat("0.00");
				   
				   if(xsxxArr[q]!=null){

				   form.setField("xh", xsxxArr[q].getXh());
				   form.setField("xm", xsxxArr[q].getXm());
				   form.setField("zymc", xsxxArr[q].getZymc());
				   form.setField("fymc", xsxxArr[q].getFymc());
				   form.setField("nj", xsxxArr[q].getSznj());
				  
				   
				   Map<String,ViewJxCjcxAll> kchMap = new HashMap<String,ViewJxCjcxAll>();
				   for(int p = 0;p < m;p++){
					   ViewJxCjcxAll xscj = xscjList.get(i*20 + p);
					   String kch = xscj.getKch();
					   ViewJxCjcxAll cj = kchMap.get(kch);
					   if(cj == null){
						   kchMap.put(kch, xscj);
						   continue;
					   }else if(cj != null && cj.getKccj() < xscj.getKccj()){
						   kchMap.put(kch, xscj);
					   	   continue;
					   }
				   }
				   
				   for (String key : kchMap.keySet()) {
					   ViewJxCjcxAll xscj = kchMap.get(key);
					   
					   if(xscj.getKccj() != null &&  xscj.getKccj() >= 60 && xscj.getKcxf() != null){
						   kczxf += xscj.getKcxf();
						   zcj += xscj.getKccj();
					       countzkc += 1;
						   jqzcj += (xscj.getKcxf()*xscj.getKccj());
					   }
					   
					   if(xscj.getKccj() < 60){
						   bz = "《" + xscj.getKcmc() + "》" + bz;
						   continue;
					   }
					   
					   if(xscj.getKclb()!=null){
						   if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null  && xscj.getKclb().equals("学位课")){
							   countxw = countxw + 1;
							   xwkzcj += xscj.getKccj();
							   xwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   xwkcxf += xscj.getKcxf();
						   }else if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null && xscj.getKclb().equals("非学位课") ){
							   countfxw = countfxw + 1;
							   fxwkzcj += xscj.getKccj();
							   fxwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   fxwkcxf += xscj.getKcxf();
						   }
					   }else{
						   if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null){
							   countfxw = countfxw + 1;
							   fxwkzcj += xscj.getKccj();
							   fxwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   fxwkcxf += xscj.getKcxf();
						   }
					   }
				 }
				   
				   for(int k = 0; k < m ; k++){
					   ViewJxCjcxAll xscj = xscjList.get(i*20 + k);
					   form.setField("kch"+k, xscj.getKch());
					   form.setField("kcmc"+k,xscj.getKcmc());
					   
					   if(xscj.getKclb()!=null){
						   form.setField("kclb"+k,xscj.getKclb());
					   }else{
						   form.setField("kclb"+k,"非学位课");
					   }
						   
					   
					   form.setField("zjjs"+k,xscj.getZjjs());
					   form.setField("xn"+k, xscj.getXn()+'('+xscj.getXq()+')');
					   if(xscj.getKsxz().equals("免修")){
						   form.setField("ksxz"+k,xscj.getKsxz());
					   }else{
						   form.setField("ksxz"+k,null);
					   }
					   
					   if(xscj.getKccj() != null){
						   form.setField("kccj"+k, df.format(xscj.getKccj()));
					   }
					   
					   if(xscj.getKcxf() != null){
						   form.setField("kcxf"+k, xscj.getKcxf().toString());
					   }
				   }
				   }
				   form.setField("rq", matter.format(date));
				   form.setField("xwkcxf", String.valueOf(xwkcxf));
				   form.setField("fxwkcxf", String.valueOf(fxwkcxf));
				   form.setField("xwkpjcj", df.format(xwkzcj/countxw));
				   form.setField("fxwkpjcj", df.format(fxwkzcj/countfxw));
				   form.setField("xwkjqpjcj", df.format(xwkjqzcj/xwkcxf));
				   form.setField("fxwkjqpjcj", df.format(fxwkjqzcj/fxwkcxf));
				   form.setField("kczxf", String.valueOf(kczxf));
				   form.setField("pjcj", df.format(zcj/countzkc));
				   form.setField("jqpjcj", df.format(jqzcj/kczxf));
				   if(!bz.startsWith("课程不及格，未计入统计！")){
					   form.setField("bz", bz);
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
	    	   titles += "temps/cjdy/" + title + ",";
		   }
		   
		   return titles.substring(0,titles.length()-1);
	   }
	
	
	
	public String toPrint() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		try {
			XsJcxxb[] xsxxArr = new  XsJcxxb[datas.size()];
			for(int i = 0; i < datas.size(); i++){
				JSONObject xsxxJson = JSONObject.fromObject(datas.get(i));
				XsJcxxb xsxx = (XsJcxxb) JSONObject.toBean(xsxxJson, XsJcxxb.class);
				xsxxArr[i] = xsxx;
			}
		
			String url = this.createCoverZCJ(rootPath,xsxxArr);
		    this.setSuccess(true);
	   	    this.setMsg(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
	
	public String  createCoverZCJ(String rootPath,XsJcxxb[] xsxxArr) throws DocumentException, MalformedURLException, IOException{
		   StringBuffer sb = new StringBuffer();
		   sb.append(rootPath + "/"+"temps/");
		   sb.append("cjdy/");
		   sb.append("CjdyTemp.pdf");
		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(resultPath);
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
		   
		   String titles = "";
		   
		   for(int q = 0;q < xsxxArr.length; q++){
			   List<ViewJxCjcxAll> xscjList = cjdyService.getZcj(xsxxArr[q].getXh());
			   String title = xsxxArr[q].getXh() + ".pdf";
			  
			   double kczxf = 0, xwkcxf = 0, fxwkcxf = 0;
			   double xwkzcj = 0,fxwkzcj = 0,zcj = 0;
			   double xwkjqzcj = 0,fxwkjqzcj = 0,jqzcj = 0;
			   int countxw = 0,countfxw = 0, countzkc = 0;
			   String bz = "课程不及格，未计入统计！";
			   int ys = 0;
			   int wykcs = 0;
			   if(xscjList.size() == 0){
				   ys = 1;
				   wykcs = 0;
			   }else{
				   int zkcs =  xscjList.size();
				   if(zkcs%20 >= 0){
					   ys = zkcs/20 + 1;
				   }else{
					   ys = zkcs/20;
				   }
				   wykcs = zkcs%20;
			   }
			   
			   ByteArrayOutputStream baos[] = new ByteArrayOutputStream[ys];
			   FileOutputStream fos = new FileOutputStream(resultPath+"/"+title);
			   
			   for(int i = 0; i< ys; i++){
				   int m = 20;
				   if(i + 1 == ys){
					   m = wykcs;
				   }
				   baos[i] = new ByteArrayOutputStream();  
				   PdfReader reader=new PdfReader(sb.toString());
				   PdfStamper stamper=new PdfStamper(reader,baos[i]);
				   AcroFields form=stamper.getAcroFields();
				   
				   Date date = new Date();
				   SimpleDateFormat matter=new SimpleDateFormat("yyyy年MM月dd日");
				   
				   DecimalFormat df = new DecimalFormat("0.00");
				   
				   if(xsxxArr[q]!=null){

				   form.setField("xh", xsxxArr[q].getXh());
				   form.setField("xm", xsxxArr[q].getXm());
				   form.setField("zymc", xsxxArr[q].getZymc());
				   form.setField("fymc", xsxxArr[q].getFymc());
				   form.setField("nj", xsxxArr[q].getSznj());
				   
				   for(int k = 0; k < m ; k++){
					   ViewJxCjcxAll xscj = xscjList.get(i*20 + k);
					   form.setField("kch"+k, xscj.getKch());
					   form.setField("kcmc"+k,xscj.getKcmc());
					   
					   if(xscj.getKclb()!=null){
						   form.setField("kclb"+k,xscj.getKclb());
					   }else{
						   form.setField("kclb"+k,"非学位课");
					   }
						   
					   
					   form.setField("zjjs"+k,xscj.getZjjs());
					   form.setField("xn"+k, xscj.getXn()+'('+xscj.getXq()+')');
					   if(xscj.getKsxz().equals("免修")){
						   form.setField("ksxz"+k,xscj.getKsxz());
					   }else{
						   form.setField("ksxz"+k,null);
					   }
					   
					   if(xscj.getKccj() != null){
						   form.setField("kccj"+k, df.format(xscj.getKccj()));
					   }
					   
					   
					   if(xscj.getKcxf() != null){
						   form.setField("kcxf"+k, xscj.getKcxf().toString());
					   }
					   
					   if(xscj.getKccj() != null &&  xscj.getKccj() >= 60 && xscj.getKcxf() != null){
						   kczxf += xscj.getKcxf();
						   zcj += xscj.getKccj();
					       countzkc += 1;
						   jqzcj += (xscj.getKcxf()*xscj.getKccj());
					   }
					   
					   
					   if(xscj.getKclb()!=null){
						   if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null  && xscj.getKclb().equals("学位课")){
							   countxw = countxw + 1;
							   xwkzcj += xscj.getKccj();
							   xwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   xwkcxf += xscj.getKcxf();
						   }else if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null && xscj.getKclb().equals("非学位课") ){
							   countfxw = countfxw + 1;
							   fxwkzcj += xscj.getKccj();
							   fxwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   fxwkcxf += xscj.getKcxf();
						   }else if(xscj.getKccj() != null && xscj.getKccj() < 60 && xscj.getKcxf() != null){
							   xwkjqzcj += 0;
							   fxwkjqzcj += 0;
							   xwkcxf += 0;
							   bz = "《"+ xscj.getKcmc() + "》" + bz ;
						   }else{
							   xwkjqzcj += 0;
							   fxwkjqzcj += 0;
							   xwkcxf += 0;
						   }
					   }else{
						   if(xscj.getKccj() != null && xscj.getKccj() >= 60 && xscj.getKcxf() != null){
							   countfxw = countfxw + 1;
							   fxwkzcj += xscj.getKccj();
							   fxwkjqzcj += (xscj.getKccj()*xscj.getKcxf());
							   fxwkcxf += xscj.getKcxf();
						   }else{
							   bz = "《"+ xscj.getKcmc() + "》" + bz ;
						   }
						   
					   }
					
				   }
				   
				   }
				   form.setField("rq", matter.format(date));
				   form.setField("xwkcxf", String.valueOf(xwkcxf));
				   form.setField("fxwkcxf", String.valueOf(fxwkcxf));
				   form.setField("xwkpjcj", df.format(xwkzcj/countxw));
				   form.setField("fxwkpjcj", df.format(fxwkzcj/countfxw));
				   form.setField("xwkjqpjcj", df.format(xwkjqzcj/xwkcxf));
				   form.setField("fxwkjqpjcj", df.format(fxwkjqzcj/fxwkcxf));
				   form.setField("kczxf", String.valueOf(kczxf));
				   form.setField("pjcj", df.format(zcj/countzkc));
				   form.setField("jqpjcj", df.format(jqzcj/kczxf));
				   if(!bz.startsWith("课程不及格，未计入统计！")){
					   form.setField("bz", bz);
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
	    	   titles += "temps/cjdy/" + title + ",";
		   }
		   
		   return titles.substring(0,titles.length()-1);
	   }
	
}
