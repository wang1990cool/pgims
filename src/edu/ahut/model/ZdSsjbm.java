package edu.ahut.model;

/**
 * ZdSsjbm entity. @author MyEclipse Persistence Tools
 */

public class ZdSsjbm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String ssjbm;
	private String ssjb;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdSsjbm() {
	}

	/** minimal constructor */
	public ZdSsjbm(String ssjbm) {
		this.ssjbm = ssjbm;
	}

	/** full constructor */
	public ZdSsjbm(String ssjbm, String ssjb, Long pxh, String sfyx, String bz) {
		this.ssjbm = ssjbm;
		this.ssjb = ssjb;
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

	public String getSsjbm() {
		return this.ssjbm;
	}

	public void setSsjbm(String ssjbm) {
		this.ssjbm = ssjbm;
	}

	public String getSsjb() {
		return this.ssjb;
	}

	public void setSsjb(String ssjb) {
		this.ssjb = ssjb;
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