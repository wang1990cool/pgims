package edu.ahut.model;

/**
 * ZdCglxm entity. @author MyEclipse Persistence Tools
 */

public class ZdCglxm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String cglxm;
	private String cglx;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdCglxm() {
	}

	/** minimal constructor */
	public ZdCglxm(String cglxm) {
		this.cglxm = cglxm;
	}

	/** full constructor */
	public ZdCglxm(String cglxm, String cglx, Long pxh, String sfyx, String bz) {
		this.cglxm = cglxm;
		this.cglx = cglx;
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

	public String getCglxm() {
		return this.cglxm;
	}

	public void setCglxm(String cglxm) {
		this.cglxm = cglxm;
	}

	public String getCglx() {
		return this.cglx;
	}

	public void setCglx(String cglx) {
		this.cglx = cglx;
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