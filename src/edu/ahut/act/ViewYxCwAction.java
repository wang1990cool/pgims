package edu.ahut.act;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Image;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.AcroFields;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxCw;
import edu.ahut.model.YxXsjbxxb;
import edu.ahut.service.ViewYxCwService;
import edu.ahut.service.YxXsjbxxbService;
import edu.ahut.util.CommonUtil;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class ViewYxCwAction extends ActionSupport{
	private static final long serialVersionUID = 8411848302070961482L;

	static private String filter = null;
	private List<?> datas;
	private ViewYxCwService viewYxCwService;
	private YxXsjbxxbService yxXsjbxxbService;
	private JsonResult result = new JsonResult();
	private boolean success = false;
	private String msg;
	
	public ViewYxCwAction(){
		viewYxCwService = (ViewYxCwService) SpringContextUtil.getBean("ViewYxCwServiceImpl");
		yxXsjbxxbService = (YxXsjbxxbService) SpringContextUtil.getBean("YxXsjbxxbServiceImpl");
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

	public ViewYxCwService getViewYxCwService() {
		return viewYxCwService;
	}

	public void setViewYxCwService(ViewYxCwService viewYxCwService) {
		this.viewYxCwService = viewYxCwService;
	}
	
	public YxXsjbxxbService getYxXsjbxxbService() {
		return yxXsjbxxbService;
	}

	public void setYxXsjbxxbService(YxXsjbxxbService yxXsjbxxbService) {
		this.yxXsjbxxbService = yxXsjbxxbService;
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
	
//	public String List(){
//		String searchParams = ServletActionContext.getRequest().getParameter("params");
//		String filters = CommonUtil.MergeFilter(filter, searchParams);
//		List<ViewYxCw> list = viewYxCwService.getCwxx(filters);
//		setResult(new JsonResult(list, list.size()));
//		result.setSuccess(true);
//		return SUCCESS;
//	}
	
	
	public String List(){
		int startNo = Integer.parseInt(ServletActionContext.getRequest().getParameter("start"));
		int pageSize = Integer.parseInt(ServletActionContext.getRequest().getParameter("limit"));
		String sort = ServletActionContext.getRequest().getParameter("sort");
		String dir = ServletActionContext.getRequest().getParameter("dir");
		String order = null;
		if(sort != null && dir !=null) {
			order = sort + " " + dir;
		}	
		try{
			String searchParams = ServletActionContext.getRequest().getParameter("params");
			String filters = CommonUtil.MergeFilter(filter, searchParams);
//			List<?> lst = viewYxCwService.hqlQuery("from ViewYxCw");
			Page<ViewYxCw> pageList = viewYxCwService.pageQuery(startNo,pageSize, filters, order);
			setResult(new JsonResult(pageList.getResult(), pageList.getTotalCount()));
			result.setSuccess(true);
		}catch(Exception e){
			e.printStackTrace();
			result.setSuccess(false);
		}

		return SUCCESS;
	}
	
	public String toPDF() {
		String rootPath  = ServletActionContext.getServletContext().getRealPath("/");
		String xh = ServletActionContext.getRequest().getParameter("xh");
		try {
			List<YxXsjbxxb> jbxxList = yxXsjbxxbService.getJbxx(xh);
			List<ViewYxCw> cwxxList = viewYxCwService.getCwxx(xh);
			String url = this.createCover(rootPath,jbxxList,cwxxList);
			this.setSuccess(true);
			this.setMsg(url);
	
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pdf";
	}
	
	public String  createCover(String rootPath,List<YxXsjbxxb> jbxxList,List<ViewYxCw> cwxxList) throws DocumentException, MalformedURLException, IOException{
		StringBuffer sb = new StringBuffer();
		StringBuffer sd = new StringBuffer();
		   sb.append(rootPath + "/"+"temps/");
		   sb.append("xsxx/");
		   sb.append("XsxxTemp.pdf");
		   
		   sd.append(rootPath + "/"+"downfiles/");
		   sd.append("xsxx/");
//		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(sd.toString());
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
//		   String zpTitle = jbxxList.get(0).getXh() + ".jpg";
		   String title = jbxxList.get(0).getXh() + ".pdf";
		   
		   FileOutputStream fos = new FileOutputStream(sd.toString()+"/"+title);
		   PdfReader reader=new PdfReader(sb.toString());
		   PdfStamper stamper=new PdfStamper(reader,fos);     /*将要生成的目标PDF文件名称*/
		   AcroFields form=stamper.getAcroFields();         /*取出报表模板中的所有字段*/
		   
		   form.setField("xh", jbxxList.get(0).getXh());     
		   form.setField("xm", jbxxList.get(0).getXm());
		   form.setField("lqxy", jbxxList.get(0).getLqxy());
		   form.setField("lqzy", jbxxList.get(0).getLqzy());
		   form.setField("lqlb", jbxxList.get(0).getLqlb());
//		   System.out.println(jbxxList.get(0).getBdztm());
		   if(jbxxList.get(0).getBdztm() != null){
			   if(jbxxList.get(0).getBdztm().equals("0")){
				   form.setField("bdzt","未报到");
			   }else if(jbxxList.get(0).getBdztm().equals("1")){
			       form.setField("bdzt","已报到");
			   }
		   }
		   
		   byte[] zp = jbxxList.get(0).getZp();
		   if(zp != null){
//		   InputStream inputStream = new ByteArrayInputStream(zp);  
//           ImageUtil.readBlob(inputStream, sd.toString()+"/"+zpTitle);
			
		   Image img = Image.getInstance(zp);
		   img.setDpi(100, 100);
		   img.setBorderWidth(200);
		   img.scaleAbsolute(80, 100); 
		   img.setAbsolutePosition(430, 600);
		   PdfContentByte over = stamper.getOverContent(1);
		   over.addImage(img);
		   }
	
	
		   if(cwxxList.get(0).getDyxnxf() != null){
			   form.setField("dyxnxf", cwxxList.get(0).getDyxnxf().toString());
		   }
		   if(cwxxList.get(0).getJcf() != null){
			   form.setField("jcf", cwxxList.get(0).getJcf().toString());
		   }
		   if(cwxxList.get(0).getZsf() != null){
			   form.setField("zsf", cwxxList.get(0).getZsf().toString());
		   }
		   if(cwxxList.get(0).getTjf() != null){
			   form.setField("tjf", cwxxList.get(0).getTjf().toString());
		   }
		   if(cwxxList.get(0).getYktf() != null){
			   form.setField("yktf", cwxxList.get(0).getYktf().toString());
		   }
		   if(cwxxList.get(0).getYlbxf() != null){
			   form.setField("ylbxf", cwxxList.get(0).getYlbxf().toString());
		   }
		   if(cwxxList.get(0).getHj() != null){
			   form.setField("hj", cwxxList.get(0).getHj().toString());
		   }
		   if(cwxxList.get(0).getNpaid() != null){
			   form.setField("npaid", cwxxList.get(0).getNpaid().toString());
		   }
		   if(cwxxList.get(0).getNowe() != null){
			   form.setField("nowe", cwxxList.get(0).getNowe().toString());
		   }
		   
		   stamper.setFormFlattening(true);
		   stamper.close();
		   reader.close();
		   return  "downfiles/xsxx/"+ title;
		
	}
	
	}
