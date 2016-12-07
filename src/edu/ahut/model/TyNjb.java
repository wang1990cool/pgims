package edu.ahut.model;

/**
 * TyNjb entity. @author MyEclipse Persistence Tools
 */

public class TyNjb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 7091259525629339311L;
	private Long id;
	private String nj;
	private String sfyx;
	private Long pxh;
	private String bz;

	// Constructors

	/** default constructor */
	public TyNjb() {
	}

	/** minimal constructor */
	public TyNjb(Long id, String nj) {
		this.id = id;
		this.nj = nj;
	}

	/** full constructor */
	public TyNjb(Long id, String nj, String sfyx, Long pxh, String bz) {
		this.id = id;
		this.nj = nj;
		this.sfyx = sfyx;
		this.pxh = pxh;
		this.bz = bz;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNj() {
		return this.nj;
	}

	public void setNj(String nj) {
		this.nj = nj;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
		this.pxh = pxh;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}