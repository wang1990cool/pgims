package edu.ahut.model;

/**
 * ZdKsxsm entity. @author MyEclipse Persistence Tools
 */

public class ZdKsxsm implements java.io.Serializable {

	private static final long serialVersionUID = 80005263945350649L;
	private Long id;
	private String ksxsm;
	private String ksxs;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKsxsm() {
	}

	/** minimal constructor */
	public ZdKsxsm(String ksxsm) {
		this.ksxsm = ksxsm;
	}

	/** full constructor */
	public ZdKsxsm(String ksxsm, String ksxs, Long pxh, String sfyx, String bz) {
		this.ksxsm = ksxsm;
		this.ksxs = ksxs;
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

	public String getKsxsm() {
		return this.ksxsm;
	}

	public void setKsxsm(String ksxsm) {
		this.ksxsm = ksxsm;
	}

	public String getKsxs() {
		return this.ksxs;
	}

	public void setKsxs(String ksxs) {
		this.ksxs = ksxs;
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