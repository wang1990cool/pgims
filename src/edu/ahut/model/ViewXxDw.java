package edu.ahut.model;

/**
 * ViewXxDw entity. @author MyEclipse Persistence Tools
 */

public class ViewXxDw implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 7426640688388358441L;
	private String dwh;
	private String dwmc;
	private String sfyx;

	// Constructors

	/** default constructor */
	public ViewXxDw() {
	}

	/** minimal constructor */
	public ViewXxDw(String dwh, String dwmc) {
		this.dwh = dwh;
		this.dwmc = dwmc;
	}

	/** full constructor */
	public ViewXxDw(String dwh, String dwmc, String sfyx) {
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.sfyx = sfyx;
	}

	// Property accessors

	public String getDwh() {
		return this.dwh;
	}

	public void setDwh(String dwh) {
		this.dwh = dwh;
	}

	public String getDwmc() {
		return this.dwmc;
	}

	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}