package edu.ahut.model;

/**
 * TyFabbhb entity. @author MyEclipse Persistence Tools
 */

public class TyFabbhb implements java.io.Serializable {

	private static final long serialVersionUID = -4012764621172915383L;
	private Long id;
	private String bbh;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public TyFabbhb() {
	}

	/** minimal constructor */
	public TyFabbhb(Long id) {
		this.id = id;
	}

	/** full constructor */
	public TyFabbhb(Long id, String bbh, Long pxh, String sfyx, String bz) {
		this.id = id;
		this.bbh = bbh;
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

	public String getBbh() {
		return this.bbh;
	}

	public void setBbh(String bbh) {
		this.bbh = bbh;
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