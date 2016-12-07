package edu.ahut.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.coobird.thumbnailator.Thumbnails;
import net.sf.json.JSONObject;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class ImgUploadServlet extends HttpServlet {
	private static final long serialVersionUID = 3915473377735772925L;
	private static final String TMP_DIR_PATH = "uploadfiles/erpImg/tmp";
	private static final String DESTINATION_DIR_PATH = "uploadfiles/erpImg/";
	private File tmpDir;
	private File destDir;

	public ImgUploadServlet() {
		super();
	}

	public void init() throws ServletException {
		super.init();
		String realPath = getServletContext().getRealPath(TMP_DIR_PATH);
		tmpDir = new File(realPath);
		if (!tmpDir.isDirectory()) {
			throw new ServletException(TMP_DIR_PATH + " 不是文件目录！");
		}

		realPath = getServletContext().getRealPath(DESTINATION_DIR_PATH);
		destDir = new File(realPath);
		if (!destDir.isDirectory()) {
			throw new ServletException(DESTINATION_DIR_PATH + " 不是文件目录！");
		}
	}

	public void destroy() {
		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	@SuppressWarnings("unchecked")
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/xml;charset= UTF-8");
		
		PrintWriter out = response.getWriter();
		if (isMultipart) {
			try{
				DiskFileItemFactory factory = new DiskFileItemFactory(1024 * 4,tmpDir);
				ServletFileUpload upload = new ServletFileUpload(factory);
				upload.setHeaderEncoding("UTF-8");
				upload.setSizeMax(1024 * 1024 );
	
				List<FileItem> fileItems = null;
				try {
					fileItems = upload.parseRequest(request);
				} catch (FileUploadException e1) {
					e1.printStackTrace();
				}
	
				JSONObject result = new JSONObject();

				Iterator<FileItem> iter = fileItems.iterator();
				while (iter.hasNext()) {
					FileItem item = (FileItem) iter.next();
					if (item.isFormField()) {
					} else {
						String uploadFileName = item.getName();
						String fileName = System.currentTimeMillis()+ uploadFileName.substring(uploadFileName.lastIndexOf("."));
						String sfileName =fileName.substring(0,fileName.lastIndexOf(".")) + "_small" +
								fileName.substring(fileName.lastIndexOf("."));
						if (fileName != null) {
							File file = new File(fileName);
							if (!file.exists()) {
								File fileOnServer = new File(destDir + "\\"
										+ file.getName());
								try {
									item.write(fileOnServer);
									Thumbnails.of(destDir + "\\" + fileName).size(300, 200).toFile(destDir + "\\" + sfileName); 
									result.put("fileName", DESTINATION_DIR_PATH + fileName);
									result.put("success", true);
								} catch (Exception e) {
									e.printStackTrace();
									result.put("msg", e.getMessage());
									result.put("success", false);
								}
								out.print(result);
								out.flush();
							}
						}
					}
				}
			}catch(Exception e){
				JSONObject result = new JSONObject();
				result.put("success", false);
				result.put("msg","文件超出上传文件 1M 大小限制！");
				out.print(result);
				out.flush();
			}
			out.close();
		}
	}
}
