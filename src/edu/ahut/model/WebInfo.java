package edu.ahut.model;

import java.util.Date;

public class WebInfo implements java.io.Serializable {
	
	private static final long serialVersionUID = -4896494786293894122L;
	private String id;
	private Integer orderid;
	private String title;
	private String content;
	private String author;
	private Date addTime;
	private Boolean publish;

	public WebInfo() {
	}

	public WebInfo(Integer orderid, String title, String content, String author,
			Date addTime, Boolean publish) {
		this.orderid = orderid;
		this.title = title;
		this.content = content;
		this.author = author;
		this.addTime = addTime;
		this.publish = publish;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getOrderid() {
		return this.orderid;
	}

	public void setOrderid(Integer orderid) {
		this.orderid = orderid;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Date getAddTime() {
		return this.addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public Boolean getPublish() {
		return this.publish;
	}

	public void setPublish(Boolean publish) {
		this.publish = publish;
	}
}