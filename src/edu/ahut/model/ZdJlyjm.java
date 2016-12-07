package edu.ahut.model;

/**
 * ZdJlyjm entity. @author MyEclipse Persistence Tools
 */

public class ZdJlyjm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String jlyjm;
	private String jlyj;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdJlyjm() {
	}

	/** minimal constructor */
	public ZdJlyjm(String jlyjm) {
		this.jlyjm = jlyjm;
	}

	/** full constructor */
	public ZdJlyjm(String jlyjm, String jlyj, Long pxh, String sfyx, String bz) {
		this.jlyjm = jlyjm;
		this.jlyj = jlyj;
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

	public String getJlyjm() {
		return this.jlyjm;
	}

	public void setJlyjm(String jlyjm) {
		this.jlyjm = jlyjm;
	}

	public String getJlyj() {
		return this.jlyj;
	}

	public void setJlyj(String jlyj) {
		this.jlyj = jlyj;
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