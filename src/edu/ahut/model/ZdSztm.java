package edu.ahut.model;

/**
 * ZdSztm entity. @author MyEclipse Persistence Tools
 */

public class ZdSztm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String ztm;
	private String zt;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdSztm() {
	}

	/** minimal constructor */
	public ZdSztm(String ztm) {
		this.ztm = ztm;
	}

	/** full constructor */
	public ZdSztm(String ztm, String zt, Long pxh, String sfyx, String bz) {
		this.ztm = ztm;
		this.zt = zt;
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

	public String getZtm() {
		return this.ztm;
	}

	public void setZtm(String ztm) {
		this.ztm = ztm;
	}

	public String getZt() {
		return this.zt;
	}

	public void setZt(String zt) {
		this.zt = zt;
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