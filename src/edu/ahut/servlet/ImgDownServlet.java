package edu.ahut.servlet;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ImgDownServlet extends HttpServlet {
	private static final long serialVersionUID = -8704153381839657594L;
	
	public ImgDownServlet() {
		super();
	}
	
	public void init() throws ServletException {
		super.init();
	}
	
	public void destroy() {
		super.destroy();
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String fileFullName = request.getParameter("fileName");
		String fileName = fileFullName.substring(fileFullName.lastIndexOf("/") + 1);
		String realPath = getServletContext().getRealPath(fileFullName);
		
		File file = new File(realPath);

		if (file.exists()) {
			try {
				InputStream fis = new BufferedInputStream(new FileInputStream(
						file));
				byte[] buf = new byte[1024];
				int len = 0;

				response.reset();
				response.addHeader(
						"Content-Disposition",
						"attachment;filename="
								+ new String(fileName.getBytes("gb2312"),
										"ISO8859-1"));
				response.setContentType("application/octet-stream");
				OutputStream out = response.getOutputStream();
				while ((len = fis.read(buf)) > 0)
					out.write(buf, 0, len);
				fis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
