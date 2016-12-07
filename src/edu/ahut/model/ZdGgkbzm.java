package edu.ahut.model;

/**
 * ZdGgkbzm entity. @author MyEclipse Persistence Tools
 */

public class ZdGgkbzm implements java.io.Serializable {

	private static final long serialVersionUID = -8559642248661866159L;
	private Long id;
	private String ggkbzm;
	private String ggkbz;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdGgkbzm() {
	}

	/** minimal constructor */
	public ZdGgkbzm(Long id, String ggkbzm) {
		this.id = id;
		this.ggkbzm = ggkbzm;
	}

	/** full constructor */
	public ZdGgkbzm(Long id, String ggkbzm, String ggkbz, Long pxh,
			String sfyx, String bz) {
		this.id = id;
		this.ggkbzm = ggkbzm;
		this.ggkbz = ggkbz;
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

	public String getGgkbzm() {
		return this.ggkbzm;
	}

	public void setGgkbzm(String ggkbzm) {
		this.ggkbzm = ggkbzm;
	}

	public String getGgkbz() {
		return this.ggkbz;
	}

	public void setGgkbz(String ggkbz) {
		this.ggkbz = ggkbz;
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