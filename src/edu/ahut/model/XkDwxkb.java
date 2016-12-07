package edu.ahut.model;

/**
 * XkDwxkb entity. @author MyEclipse Persistence Tools
 */

public class XkDwxkb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1503294335130248307L;
	private Long id;
	private String dwh;
	private String zydm;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public XkDwxkb() {
	}

	/** minimal constructor */
	public XkDwxkb(String dwh, String zydm) {
		this.dwh = dwh;
		this.zydm = zydm;
	}

	/** full constructor */
	public XkDwxkb(String dwh, String zydm, String sfyx, String bz) {
		this.dwh = dwh;
		this.zydm = zydm;
		this.sfyx = sfyx;
		this.bz = bz;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDwh() {
		return this.dwh;
	}

	public void setDwh(String dwh) {
		this.dwh = dwh;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}