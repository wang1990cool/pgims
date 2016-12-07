package edu.ahut.model;

/**
 * ZdKwjbm entity. @author MyEclipse Persistence Tools
 */

public class ZdKwjbm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String kwjbm;
	private String kwjb;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKwjbm() {
	}

	/** minimal constructor */
	public ZdKwjbm(String kwjbm) {
		this.kwjbm = kwjbm;
	}

	/** full constructor */
	public ZdKwjbm(String kwjbm, String kwjb, Long pxh, String sfyx, String bz) {
		this.kwjbm = kwjbm;
		this.kwjb = kwjb;
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

	public String getKwjbm() {
		return this.kwjbm;
	}

	public void setKwjbm(String kwjbm) {
		this.kwjbm = kwjbm;
	}

	public String getKwjb() {
		return this.kwjb;
	}

	public void setKwjb(String kwjb) {
		this.kwjb = kwjb;
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