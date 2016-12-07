package edu.ahut.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class FileUploadServlet extends HttpServlet {
	private static final long serialVersionUID = 3199517111830216094L;
	private static final String DESTINATION_DIR_PATH = "uploadfiles/tmp";
	private File destDir;

	public FileUploadServlet() {
		super();
	}

	public void init() throws ServletException {
		super.init();
		String realPath = getServletContext().getRealPath(DESTINATION_DIR_PATH);
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
		
		if (isMultipart) {
			try{
				DiskFileItemFactory factory = new DiskFileItemFactory(1024 * 4,destDir);
				ServletFileUpload upload = new ServletFileUpload(factory);
				upload.setHeaderEncoding("UTF-8");
	
				List<FileItem> fileItems = null;
				try {
					fileItems = upload.parseRequest(request);
				} catch (FileUploadException e1) {
					e1.printStackTrace();
				}
				
				FileItem item = fileItems.get(0);
				
				String uploadFileName = item.getName();
				String fileName = System.currentTimeMillis()+ uploadFileName.substring(uploadFileName.lastIndexOf("."));
				
				File file = new File(fileName);
				File fileOnServer = new File(destDir + "\\" + file.getName());
				item.write(fileOnServer);
				item.delete();
				
				String callback = request.getParameter("CKEditorFuncNum");  
                response.setContentType("text/html;charset=utf-8");  
                PrintWriter out = response.getWriter();  
                out.write("<script type=\"text/javascript\">");  
                out.write("window.parent.CKEDITOR.tools.callFunction("+callback+",'uploadfiles/tmp/"+fileName+"',''"+")");  
                out.write("</script>");
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}
}
