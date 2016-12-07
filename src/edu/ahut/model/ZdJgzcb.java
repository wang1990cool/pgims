package edu.ahut.model;

/**
 * ZdJgzcb entity. @author MyEclipse Persistence Tools
 */

public class ZdJgzcb implements java.io.Serializable {

	private static final long serialVersionUID = 4440637392563407840L;
	private Long id;
	private String bm;
	private String mc;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdJgzcb() {
	}

	/** minimal constructor */
	public ZdJgzcb(String bm) {
		this.bm = bm;
	}

	/** full constructor */
	public ZdJgzcb(String bm, String mc, Long pxh, String sfyx, String bz) {
		this.bm = bm;
		this.mc = mc;
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

	public String getBm() {
		return this.bm;
	}

	public void setBm(String bm) {
		this.bm = bm;
	}

	public String getMc() {
		return this.mc;
	}

	public void setMc(String mc) {
		this.mc = mc;
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