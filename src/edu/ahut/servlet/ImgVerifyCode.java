package edu.ahut.servlet;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ImgVerifyCode extends HttpServlet {
	private static final long serialVersionUID = 2342390359102158524L;

	public ImgVerifyCode() {
		super();
	}
	
	public void init() throws ServletException {
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

		//设置页面不缓存  
		response.setHeader("Pragma","No-cache");  
		response.setHeader("Cache-Control","no-cache");  
		response.setDateHeader("Expires", 0);  
		  
		// 在内存中创建图象  
		int width=60, height=24;  
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);  
		  
		// 获取图形上下文  
		Graphics g = image.getGraphics();  
		  
		//生成随机类  
		Random random = new Random();  
		  
		// 设定背景色  
		g.setColor(getRandColor(200,250));  
		g.fillRect(0, 0, width, height);  
		  
		//设定字体  
		g.setFont(new Font("Times New Roman",Font.PLAIN,20));  
		  
		//画边框  
		//g.setColor(new Color());  
		//g.drawRect(0,0,width-1,height-1);  
		  
		// 随机产生155条干扰线，使图象中的认证码不易被其它程序探测到  
		g.setColor(getRandColor(160,200));  
		for (int i=0;i<155;i++)  
		{  
		int x = random.nextInt(width);  
		int y = random.nextInt(height);  
		int xl = random.nextInt(12);  
		int yl = random.nextInt(12);  
		g.drawLine(x,y,x+xl,y+yl);  
		}  
		  
		// 取随机产生的认证码(4位数字)  
		String sRand="";  
		for (int i=0;i<4;i++){  
		String rand=String.valueOf(random.nextInt(10));  
		sRand+=rand;  
		// 将认证码显示到图象中  
		g.setColor(new Color(24+random.nextInt(110),24+random.nextInt(110),24+random.nextInt(110)));
		g.drawString(rand,13*i+6,20);  
		}  
		  
		// 将认证码存入SESSION   
		HttpSession session = request.getSession();
		session.setAttribute("rand",sRand);  
		  
		// 图象生效  
		g.dispose();  
		OutputStream output=response.getOutputStream();  
		  
		// 输出图象到页面  
		ImageIO.write(image, "GIF", response.getOutputStream());  
		output.flush();  
		output.close();
	}
	
	private Color getRandColor(int fc,int bc){//给定范围获得随机颜色  
		Random random = new Random();  
		if(fc>255) fc=255;  
		if(bc>255) bc=255;  
		int r=fc+random.nextInt(bc-fc);  
		int g=fc+random.nextInt(bc-fc);  
		int b=fc+random.nextInt(bc-fc);  
		return new Color(r,g,b);  
	}  
}