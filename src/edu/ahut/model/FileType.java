package edu.ahut.model;


public class FileType implements java.io.Serializable {


	private static final long serialVersionUID = 5700441101584196494L;
	private String id;
	private String codeId;
	private String fileType;

	public FileType() {
	}

	public FileType(String id) {
		this.id = id;
	}

	public FileType(String id, String codeId, String fileType) {
		this.id = id;
		this.codeId = codeId;
		this.fileType = fileType;
	}


	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCodeId() {
		return this.codeId;
	}

	public void setCodeId(String codeId) {
		this.codeId = codeId;
	}

	public String getFileType() {
		return this.fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

}