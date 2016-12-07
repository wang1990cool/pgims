package edu.ahut.model;

import java.util.Date;

/**
 * AttachData entity. @author MyEclipse Persistence Tools
 */

public class AttachData implements java.io.Serializable {


	private static final long serialVersionUID = -3613965863678229353L;
	private long id;
	private String billNo;
	private String attachName;
	private String attachCname;
	private String attachUrl;
	private Date uploadTime;

	// Constructors

	/** default constructor */
	public AttachData() {
	}

	/** full constructor */
	public AttachData(String billNo, String attachName, String attachCname,
			String attachUrl, Date uploadTime) {
		this.billNo = billNo;
		this.attachName = attachName;
		this.attachCname = attachCname;
		this.attachUrl = attachUrl;
		this.uploadTime = uploadTime;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBillNo() {
		return this.billNo;
	}

	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}

	public String getAttachName() {
		return this.attachName;
	}

	public void setAttachName(String attachName) {
		this.attachName = attachName;
	}

	public String getAttachCname() {
		return this.attachCname;
	}

	public void setAttachCname(String attachCname) {
		this.attachCname = attachCname;
	}

	public String getAttachUrl() {
		return this.attachUrl;
	}

	public void setAttachUrl(String attachUrl) {
		this.attachUrl = attachUrl;
	}

	public Date getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}

}