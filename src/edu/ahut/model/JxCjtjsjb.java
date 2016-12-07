package edu.ahut.model;

import java.sql.Timestamp;

/**
 * JxCjtjsjb entity. @author MyEclipse Persistence Tools
 */

public class JxCjtjsjb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 6465046573094604085L;
	private Long id;
	private String xn;
	private String xq;
	private Timestamp kssj;
	private Timestamp jssj;
	private String bz;

	// Constructors

	/** default constructor */
	public JxCjtjsjb() {
	}

	/** full constructor */
	public JxCjtjsjb(String xn, String xq, Timestamp kssj, Timestamp jssj,
			String bz) {
		this.xn = xn;
		this.xq = xq;
		this.kssj = kssj;
		this.jssj = jssj;
		this.bz = bz;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
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

	public Timestamp getKssj() {
		return this.kssj;
	}

	public void setKssj(Timestamp kssj) {
		this.kssj = kssj;
	}

	public Timestamp getJssj() {
		return this.jssj;
	}

	public void setJssj(Timestamp jssj) {
		this.jssj = jssj;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}