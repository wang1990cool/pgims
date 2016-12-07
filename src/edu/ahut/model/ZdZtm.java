package edu.ahut.model;

/**
 * ZdZtm entity. @author MyEclipse Persistence Tools
 */

public class ZdZtm implements java.io.Serializable {

	private static final long serialVersionUID = 6153941145324890587L;
	private Long id;
	private String ztm;
	private String zt;
	private Long pxh;
	private String sfyx;
	private String bz;
	private String ztlb;

	// Constructors

	/** default constructor */
	public ZdZtm() {
	}

	/** minimal constructor */
	public ZdZtm(String ztm, String ztlb) {
		this.ztm = ztm;
		this.ztlb = ztlb;
	}

	/** full constructor */
	public ZdZtm(String ztm, String zt, Long pxh, String sfyx, String bz,
			String ztlb) {
		this.ztm = ztm;
		this.zt = zt;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.ztlb = ztlb;
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

	public String getZtlb() {
		return this.ztlb;
	}

	public void setZtlb(String ztlb) {
		this.ztlb = ztlb;
	}

}