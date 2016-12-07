package edu.ahut.model;

import java.util.Date;


/**
 * YxSjkzb entity. @author MyEclipse Persistence Tools
 */

public class YxSjkzb implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3260087304870487836L;
	// Fields

	private Integer id;
	private String nj;
	private Date kssj;
	private Date jssj;
	private String yxbz;
	private String bz;

	// Constructors

	/** default constructor */
	public YxSjkzb() {
	}

	/** minimal constructor */
	public YxSjkzb(String nj) {
		this.nj = nj;
	}

	/** full constructor */
	public YxSjkzb(String nj, Date kssj, Date jssj, String yxbz,
			String bz) {
		this.nj = nj;
		this.kssj = kssj;
		this.jssj = jssj;
		this.yxbz = yxbz;
		this.bz = bz;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNj() {
		return this.nj;
	}

	public void setNj(String nj) {
		this.nj = nj;
	}

	public Date getKssj() {
		return this.kssj;
	}

	public void setKssj(Date kssj) {
		this.kssj = kssj;
	}

	public Date getJssj() {
		return this.jssj;
	}

	public void setJssj(Date jssj) {
		this.jssj = jssj;
	}

	public String getYxbz() {
		return this.yxbz;
	}

	public void setYxbz(String yxbz) {
		this.yxbz = yxbz;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}