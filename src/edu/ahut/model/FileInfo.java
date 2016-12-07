package edu.ahut.model;

public class FileInfo implements java.io.Serializable {
	private static final long serialVersionUID = 7213376900753613388L;

	private String fileName;
	private String fileCname;
	private String fileUrl;
	private String uploadTime;

	public FileInfo() {
	}

	public FileInfo(String fileName, String fileCname,String fileUrl, String uploadTime) {
		this.setFileName(fileName);
		this.setFileCname(fileCname);
		this.setFileUrl(fileUrl);
		this.setUploadTime(uploadTime);
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileCname() {
		return fileCname;
	}

	public void setFileCname(String fileCname) {
		this.fileCname = fileCname;
	}

	public String getFileUrl() {
		return fileUrl;
	}

	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}

	public String getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}
}