package edu.ahut.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.net.MalformedURLException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;

import edu.ahut.model.CjdData;
import edu.ahut.model.JxCjmxb;
import edu.ahut.service.CjlrService;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.AcroFields;
import com.itextpdf.text.pdf.PdfCopy;
import com.itextpdf.text.pdf.PdfImportedPage;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;

import edu.ahut.util.SpringContextUtil;

public class PDFManager {
	private CjlrService cjlrService;
//	private ErpInfoTabService ErpInfoTabService;
//
	public CjlrService getEpApplyServiceImpl() {
		this.cjlrService = ((CjlrService) SpringContextUtil.getBean("CjlrServiceImpl"));
		return cjlrService;
	}

	public void setEpApplyServiceImpl(CjlrService cjlrService) {
		this.cjlrService = cjlrService;
	}
	
	public String  createCover(String rootPath,CjdData cjd) throws DocumentException, MalformedURLException, IOException{
		   StringBuffer sb = new StringBuffer();
		   sb.append(rootPath + "/"+"uploadfiles/");
		   sb.append("cjd/");
		   sb.append("CjdTemp.pdf");
		   String resultPath=sb.substring(0,sb.lastIndexOf("/"));
		   File ft = new File(resultPath);
		   if (!ft.exists()) {
				ft.mkdirs();
		   }
		   String title = cjd.getJxCjjlbData().getKkkh()+ "_"+ cjd.getJxCjjlbData().getZjjsh()+".pdf";
		   
		   int zrs = cjd.getJxCjmxbData().size(); // 成绩单上的总人数
		   int cjksrs = 0; // 参加考试人数
		   int qkrs = 0; //缺考人数
		   double zf = 0; //总分数
		   int ys = 0; // 页数
		   int wyrs = 0; // 尾页人数
		   int num[] = {0,0,0,0,0}; //各分数段人数统计数组， num[0] >90, num[1] 89 - 80, num[2] 70-79, num[3] 60 - 69, num[4] < 60 
		   if(zrs%50 >= 0){
			   ys = zrs/50 + 1;
		   }else{
			   ys = zrs/50;
		   }
		   wyrs = zrs%50;
		 
		   
		   ByteArrayOutputStream baos[] = new ByteArrayOutputStream[ys];
		   FileOutputStream fos = new FileOutputStream(resultPath+"/"+title);
		   
		   for(int i = 0; i< ys; i++){
			   int m = 50;
			   int flag = 0;
			   if(i + 1 == ys){
				   m = wyrs;
				   flag = 1;
			   }
			   baos[i] = new ByteArrayOutputStream();  
			   PdfReader reader=new PdfReader(sb.toString());
			   PdfStamper stamper=new PdfStamper(reader,baos[i]);
			   AcroFields form=stamper.getAcroFields();
			   
			   form.setField("kcmc", cjd.getJxCjjlbData().getKcmc());
			   form.setField("kch", cjd.getJxCjjlbData().getKch());
			   form.setField("xq", cjd.getJxCjjlbData().getXn()+" ("+cjd.getJxCjjlbData().getXq()+")");
			   form.setField("zjjs", cjd.getJxCjjlbData().getZjjs());
			   form.setField("zjjsh", cjd.getJxCjjlbData().getZjjsh());
			   form.setField("kcxf", cjd.getJxCjjlbData().getKcxf().toString());
			   form.setField("ksrq", cjd.getJxCjjlbData().getKsrq());
			   form.setField("ksfs", cjd.getJxCjjlbData().getKsfs());
			   form.setField("ksdd", cjd.getJxCjjlbData().getKsdd());
			   if(cjd.getJxSkxxbData().getLlxs() != null){
				   form.setField("llxs", cjd.getJxSkxxbData().getLlxs().toString());
			   }
			   if(cjd.getJxSkxxbData().getZxs() != null){
				   form.setField("zxs", cjd.getJxSkxxbData().getZxs().toString());
			   }
			  
			   
			   for(int j = 0; j < m ; j++){
				   
				   List<JxCjmxb> cjmxList = cjd.getJxCjmxbData();
				   String ywpscj = cjd.getJxCjjlbData().getYwpscj().toString();  // 1： 有     0： 无
				   String cjlxm = cjd.getJxCjjlbData().getCjlxm();
				   // 1: 百分制  2： 五分制
				   JxCjmxb cjmx = cjmxList.get(i*50 + j);
				   form.setField("xh"+j, cjmx.getXh());
				   form.setField("xm"+j,cjmx.getXm());
				   
				   form.setField("ksxz"+j, cjmx.getKsxz().substring(0, 2));
				   
				   if(ywpscj.equals("1")){
					   if(cjmx.getPscj() != null)
						   form.setField("pscj"+j, cjmx.getPscj().toString());
				   }else if(ywpscj.equals("0")){
					   
				   }
				   
				   if(cjlxm.equals("1")){
					   if(cjmx.getFslkscj() != null){
						   form.setField("kscj"+j, cjmx.getFslkscj().toString());
					   }
				   }else if(cjlxm.equals("2")){
					   form.setField("kscj"+j, cjmx.getDjlkscj());
				   }
				   
				   if(cjmx.getKccj() != null){
					   DecimalFormat df = new DecimalFormat("0.00");
					   form.setField("kccj"+j, df.format(cjmx.getKccj()));
//					   form.setField("kccj"+j, cjmx.getKccj().toString());
				   }
				   
				   String ksxzm = cjmx.getKsxzm();
				   if( ksxzm.equals("01")){
					   cjksrs++;
					   double kccj = cjmx.getKccj();
					   zf = zf + kccj;
					   if(kccj >= 90){
						   num[0]++;
					   }else if(kccj >= 80 && kccj <90){
						   num[1]++;
					   }else if(kccj >= 70 && kccj <80){
						   num[2]++;
					   }else if(kccj >= 60 && kccj <70){
						   num[3]++;
					   }else if(kccj < 60){
						   num[4]++;
					   }
				   }else if( ksxzm.equals("20")){
					   qkrs++;
				   }
				   
			   }
			   if(flag == 1){
				   //获取格式化对象
			       NumberFormat nt = NumberFormat.getPercentInstance();
				   //设置百分数精确度2即保留两位小数
				   nt.setMinimumFractionDigits(2);
				   DecimalFormat df = new DecimalFormat("0.00");
				   
				   form.setField("cjksrs", Integer.toString(cjksrs));
				   form.setField("qkrs", Integer.toString(qkrs));
				   form.setField("zpjcj", df.format(zf/cjksrs));
				   form.setField("a", Integer.toString(num[0]));
				   form.setField("b", Integer.toString(num[1]));
				   form.setField("c", Integer.toString(num[2]));
				   form.setField("d", Integer.toString(num[3]));
				   form.setField("e", Integer.toString(num[4]));
				   form.setField("anum", nt.format((double)num[0]/(double)cjksrs));
				   form.setField("bnum", nt.format((double)num[1]/(double)cjksrs));
				   form.setField("cnum", nt.format((double)num[2]/(double)cjksrs));
				   form.setField("dnum", nt.format((double)num[3]/(double)cjksrs));
				   form.setField("enum", nt.format((double)num[4]/(double)cjksrs));
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
               impPage = pdfCopy.getImportedPage(new PdfReader(baos[i]  
                       .toByteArray()), 1);  
               pdfCopy.addPage(impPage);  
           }  
           doc.close();//当文件拷贝  记得关闭doc  
           return "uploadfiles/cjd/" + title;
		   }
	
}