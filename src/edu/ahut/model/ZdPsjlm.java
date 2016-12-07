package edu.ahut.model;

/**
 * ZdPsjlm entity. @author MyEclipse Persistence Tools
 */

public class ZdPsjlm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String psjlm;
	private String psjl;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdPsjlm() {
	}

	/** minimal constructor */
	public ZdPsjlm(String psjlm) {
		this.psjlm = psjlm;
	}

	/** full constructor */
	public ZdPsjlm(String psjlm, String psjl, Long pxh, String sfyx, String bz) {
		this.psjlm = psjlm;
		this.psjl = psjl;
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

	public String getPsjlm() {
		return this.psjlm;
	}

	public void setPsjlm(String psjlm) {
		this.psjlm = psjlm;
	}

	public String getPsjl() {
		return this.psjl;
	}

	public void setPsjl(String psjl) {
		this.psjl = psjl;
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