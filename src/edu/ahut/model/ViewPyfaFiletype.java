package edu.ahut.model;

/**
 * ViewPyfaFiletype entity. @author MyEclipse Persistence Tools
 */

public class ViewPyfaFiletype implements java.io.Serializable {

	
	private static final long serialVersionUID = -5798705592506636863L;
	private Long id;
	private String attachCode;
	private String fileCode;
	private String fileType;
	private String sfyx;
	private double pyh;

	// Constructors

	/** default constructor */
	public ViewPyfaFiletype() {
	}

	/** minimal constructor */
	public ViewPyfaFiletype(Long id) {
		this.id = id;
	}

	/** full constructor */
	public ViewPyfaFiletype(Long id, String attachCode, String fileCode,
			String fileType, String sfyx, double pyh) {
		this.id = id;
		this.attachCode = attachCode;
		this.fileCode = fileCode;
		this.fileType = fileType;
		this.sfyx = sfyx;
		this.pyh = pyh;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAttachCode() {
		return this.attachCode;
	}

	public void setAttachCode(String attachCode) {
		this.attachCode = attachCode;
	}

	public String getFileCode() {
		return this.fileCode;
	}

	public void setFileCode(String fileCode) {
		this.fileCode = fileCode;
	}

	public String getFileType() {
		return this.fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public double getPyh() {
		return this.pyh;
	}

	public void setPyh(double pyh) {
		this.pyh = pyh;
	}

}