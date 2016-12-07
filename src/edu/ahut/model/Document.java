package edu.ahut.model;

import java.util.Date;
public class Document implements java.io.Serializable {

	private static final long serialVersionUID = 1L;

	private String id;
	private String fileTypeCode;
	private String fileNo;
	private String fileName;
	private String fileCName;
	private String fileUrl;
	private String fileAbstract;
	private String fileUnit;
	private Date fileTime;

	public Document() {
	}

	public Document(String fileNo,String fileName, String fileCName, 
			String fileTypeCode,String fileUrl,String fileAbstract, String fileUnit, Date fileTime) {
		this.fileNo = fileNo;
		this.fileUrl = fileUrl;
		this.fileName = fileName;
		this.fileCName = fileCName;
		this.fileAbstract = fileAbstract;
		this.fileUnit = fileUnit;
		this.fileTime = fileTime;
		this.fileTypeCode = fileTypeCode;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFileNo() {
		return fileNo;
	}

	public void setFileNo(String fileNo) {
		this.fileNo = fileNo;
	}

	public String getFileUrl() {
		return this.fileUrl;
	}

	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}

	public String getFileName() {
		return this.fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileCName() {
		return fileCName;
	}

	public void setFileCName(String fileCName) {
		this.fileCName = fileCName;
	}

	public String getFileAbstract() {
		return this.fileAbstract;
	}

	public void setFileAbstract(String fileAbstract) {
		this.fileAbstract = fileAbstract;
	}

	public String getFileUnit() {
		return this.fileUnit;
	}

	public void setFileUnit(String fileUnit) {
		this.fileUnit = fileUnit;
	}

	public Date getFileTime() {
		return this.fileTime;
	}

	public void setFileTime(Date fileTime) {
		this.fileTime = fileTime;
	}

	public String getFileTypeCode() {
		return fileTypeCode;
	}

	public void setFileTypeCode(String fileTypeCode) {
		this.fileTypeCode = fileTypeCode;
	}
}