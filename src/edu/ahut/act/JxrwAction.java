package edu.ahut.act;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.AcroFields;
import com.itextpdf.text.pdf.PdfCopy;
import com.itextpdf.text.pdf.PdfImportedPage;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.ViewPkJxrw;
import edu.ahut.service.JxPkjlbService;
import edu.ahut.service.JxrwService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.Excel;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class JxrwAction extends ActionSupport{
	private static final long serialVersionUID = 5753359956958912148L;
	
	static private String filter = null;
	private List<?> datas;
	private JxrwService jxrwService;
	private JxPkjlbService jxPkjlbService;
	private JsonResult result = new JsonResult();
//	private String kkkh;
	private boolean success = false;
	private String msg;

	public JxrwAction(){
		jxPkjlbService = (JxPkjlbService) SpringContextUtil.getBean("JxPkjlbServiceImpl");
		jxrwService = (JxrwService) SpringContextUtil.getBean("JxrwServiceImpl");
		
	}

	public static String getFilter() {
		
		return filter;
	}

	public static void setFilter(String filter) {
		JxrwAction.filter = filter;
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}

	public JxPkjlbService getJxPkjlbService() {
		return jxPkjlbService;
	}

	public void setJxPkjlbService(JxPkjlbService jxPkjlbService) {
		this.jxPkjlbService = jxPkjlbService;
	}
	
	
	public JxrwService getJxrwService() {
		return jxrwService;
	}

	public void setJxrwService(JxrwService jxrwService) {
		this.jxrwService = jxrwService;
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
	
//	public String getKkkh() {
//		return kkkh;
//	}
//
//	public void setKkkh(String kkkh) {
//		this.kkkh = kkkh;
//	}
	
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
		Page<JxPkjlb> pageList = jxPkjlbService.pageQuery(startNo, pageSize, filters, orders);
		setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
		result.setSuccess(true);
		return SUCCESS;
	}
	
	
	
	public String toExcel(){
		String excelParams = ServletActionContext.getRequest().getParameter("excelParams");
		if(!excelParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(excelParams);
				String title = jsonParam.getString("title");
				String order = jsonParam.getString("order");
				String params = jsonParam.getString("params");
				String filters = null;
				
				if(!params.equals("")){
					filters = CommonUtil.MergeFilter(filter, params);
				}else{
					filters = filter;
				}
				JSONArray colsArray = JSONArray.fromObject(jsonParam.getString("cols"));
				List<?> tList = jxPkjlbService.Query(filters, order);
				Excel excel = new Excel(title);
	
				excel.toExcel(tList, colsArray);
				return null;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String toPDF() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		String kkkh = ServletActionContext.getRequest().getParameter("kkkh");
		try {
			List<ViewPkJxrw> jxPkjlList = jxrwService.getSkxx(kkkh);
			String url = this.createCover(rootPath,jxPkjlList);
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
	
	public String toPDFAll() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		try {
			List<ViewPkJxrw> jxPkjlList = jxrwService.getAll();
			String url = this.createCover(rootPath,jxPkjlList);
		    this.setSuccess(true);
	   	    this.setMsg(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
	
	public String  createCover(String rootPath,List<ViewPkJxrw> jxPkjlList) throws DocumentException, MalformedURLException, IOException{
		   StringBuffer sb = new StringBuffer();
		   sb.append(rootPath + "/"+"temps/");
		   sb.append("jxrw/");
		   sb.append("JxrwTemp.pdf");
		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(resultPath);
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
		   String title = "jxrw.pdf";
		   
		   int  recordCount  = jxPkjlList.size();
		   
		   ByteArrayOutputStream baos[] = new ByteArrayOutputStream[recordCount];
		   FileOutputStream fos = new FileOutputStream(resultPath+"/"+title);
		 
		   Date date = new Date();
		   SimpleDateFormat matter=new SimpleDateFormat("yyyy年MM月"); 
		   
		   int j = 0;
		   for(int i = 0;i < recordCount;){
			   baos[j] = new ByteArrayOutputStream();  
			   PdfReader reader=new PdfReader(sb.toString());
			   PdfStamper stamper=new PdfStamper(reader,baos[j]);
			   AcroFields form=stamper.getAcroFields();
			   
			   form.setField("xq1", jxPkjlList.get(i).getXn()+" ("+jxPkjlList.get(i).getXq()+")");
			   form.setField("zjjs1", jxPkjlList.get(i).getZjjs());
			   form.setField("kcmc1", jxPkjlList.get(i).getKcmc());
			   form.setField("zkjs1", jxPkjlList.get(i).getZkjs());
			   form.setField("kksj1", jxPkjlList.get(i).getKksj());
			   form.setField("kkdd1", jxPkjlList.get(i).getJsmc());
			   form.setField("zymc1", jxPkjlList.get(i).getZymc());
			   
			   form.setField("rq1", matter.format(date));
			   
			   if(jxPkjlList.get(i).getZxs() != null){
				   form.setField("zxs1", jxPkjlList.get(i).getZxs().toString());
			   }
			   
			   if(jxPkjlList.get(i).getMzxs() != null){
				   form.setField("mzxs1", jxPkjlList.get(i).getMzxs().toString());
			   }
			   
			   if(jxPkjlList.get(i).getKczs() != null){
				   String kczs1 = jxPkjlList.get(i).getKczs();
				   if(kczs1.contains("/")){
					   form.setField("ksz1", kczs1.substring(0, kczs1.indexOf("/")));
					   form.setField("jsz1", kczs1.substring(kczs1.lastIndexOf("/") + 1,kczs1.length()));
				   }else{
					   form.setField("ksz1", kczs1);
					   form.setField("jsz1", kczs1);
				   }
			   }
			   
			   if(recordCount != i+1){
				   form.setField("xq2", jxPkjlList.get(i+1).getXn()+" ("+jxPkjlList.get(i+1).getXq()+")");
				   form.setField("zjjs2", jxPkjlList.get(i+1).getZjjs());
				   form.setField("kcmc2", jxPkjlList.get(i+1).getKcmc());
				   form.setField("zkjs2", jxPkjlList.get(i+1).getZkjs());
				   form.setField("kksj2", jxPkjlList.get(i+1).getKksj());
				   form.setField("kkdd2", jxPkjlList.get(i+1).getJsmc());
				   form.setField("zymc2", jxPkjlList.get(i+1).getZymc());
				   
				   form.setField("rq2", matter.format(date));
				   
				   if(jxPkjlList.get(i+1).getZxs() != null){
					   form.setField("zxs2", jxPkjlList.get(i+1).getZxs().toString());
				   }
				   
				   if(jxPkjlList.get(i+1).getMzxs() != null){
					   form.setField("mzxs2", jxPkjlList.get(i+1).getMzxs().toString());
				   }
				   
				   if(jxPkjlList.get(i+1).getKczs() != null){
					   String kczs2 = jxPkjlList.get(i+1).getKczs();
					   if(kczs2.contains("/")){
						   form.setField("ksz2", kczs2.substring(0, kczs2.indexOf("/")));
						   form.setField("jsz2", kczs2.substring(kczs2.lastIndexOf("/") + 1,kczs2.length()));
					   }else{
						   form.setField("ksz2", kczs2);
						   form.setField("jsz2", kczs2);
					   }
				   }
			   }
			   i = i + 2;
			   j++;
			   stamper.setFormFlattening(true);
			   stamper.close();
			   reader.close();
		   }
		
		   Document doc = new Document();  
           PdfCopy pdfCopy = new PdfCopy(doc, fos);  
           doc.open();  
           PdfImportedPage impPage = null; 
           
           int ys = 0;
           if(recordCount%2 == 0){
        	   ys = recordCount/2 ;
           }else if(recordCount%2 == 1){
        	   ys = recordCount/2 + 1;
           }
           /**取出之前保存的每页内容*/  
           for (int i = 0; i < ys; i++) {  
               impPage = pdfCopy.getImportedPage(new PdfReader(baos[i].toByteArray()), 1);  
               pdfCopy.addPage(impPage);  
           }  
           doc.close();//当文件拷贝  记得关闭doc  
		   return "temps/jxrw/" + title;
	   }
}
