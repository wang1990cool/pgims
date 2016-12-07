package edu.ahut.model;

/**
 * ZdCylxm entity. @author MyEclipse Persistence Tools
 */

public class ZdCylxm implements java.io.Serializable {

	// Fields

	private Long id;
	private String cylxm;
	private String cylx;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdCylxm() {
	}

	/** minimal constructor */
	public ZdCylxm(String cylxm) {
		this.cylxm = cylxm;
	}

	/** full constructor */
	public ZdCylxm(String cylxm, String cylx, Long pxh, String sfyx, String bz) {
		this.cylxm = cylxm;
		this.cylx = cylx;
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

	public String getCylxm() {
		return this.cylxm;
	}

	public void setCylxm(String cylxm) {
		this.cylxm = cylxm;
	}

	public String getCylx() {
		return this.cylx;
	}

	public void setCylx(String cylx) {
		this.cylx = cylx;
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