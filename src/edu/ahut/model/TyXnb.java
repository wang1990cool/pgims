package edu.ahut.model;

/**
 * TyXnb entity. @author MyEclipse Persistence Tools
 */

public class TyXnb implements java.io.Serializable {

	
	private static final long serialVersionUID = 5417448995472265863L;
	private Double id;
	private String xn;
	private String xq;
	private Double pxh;
	private String sfyx;
	private String bz;
	private String pkbz;
	private String xwbz;
	// Constructors

	/** default constructor */
	public TyXnb() {
	}

	/** minimal constructor */
	public TyXnb(Double id, String xn, String xq, String sfyx) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.sfyx = sfyx;
	}

	/** full constructor */
	public TyXnb(Double id, String xn, String xq, Double pxh, String sfyx,
			String bz, String pkbz,String xwbz) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.pkbz = pkbz;
		this.xwbz = xwbz;
	}

	// Property accessors

	public Double getId() {
		return this.id;
	}

	public String getXwbz() {
		return xwbz;
	}

	public void setXwbz(String xwbz) {
		this.xwbz = xwbz;
	}

	public void setId(Double id) {
		this.id = id;
	}

	public String getXn() {
		return this.xn;
	}

	public void setXn(String xn) {
		this.xn = xn;
	}

	public String getXq() {
		return this.xq;
	}

	public void setXq(String xq) {
		this.xq = xq;
	}

	public Double getPxh() {
		return this.pxh;
	}

	public void setPxh(Double pxh) {
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

	public String getPkbz() {
		return this.pkbz;
	}

	public void setPkbz(String pkbz) {
		this.pkbz = pkbz;
	}

}