package edu.ahut.model;

/**
 * ZdFbztm entity. @author MyEclipse Persistence Tools
 */

public class ZdFbztm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String fbztm;
	private String fbzt;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdFbztm() {
	}

	/** minimal constructor */
	public ZdFbztm(String fbztm) {
		this.fbztm = fbztm;
	}

	/** full constructor */
	public ZdFbztm(String fbztm, String fbzt, Long pxh, String sfyx, String bz) {
		this.fbztm = fbztm;
		this.fbzt = fbzt;
		this.pxh = pxh;
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

	public String getFbztm() {
		return this.fbztm;
	}

	public void setFbztm(String fbztm) {
		this.fbztm = fbztm;
	}

	public String getFbzt() {
		return this.fbzt;
	}

	public void setFbzt(String fbzt) {
		this.fbzt = fbzt;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
		this.pxh = pxh;
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