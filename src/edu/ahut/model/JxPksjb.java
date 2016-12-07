package edu.ahut.model;

import java.sql.Timestamp;

/**
 * JxPksjb entity. @author MyEclipse Persistence Tools
 */

public class JxPksjb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 9010450621230466151L;
	private Long id;
	private String xn;
	private String xq;
	private Timestamp kssj;
	private Timestamp jssj;
	private String yxbz;
	private String bz;
	private String pydwh;
	private String pydw;

	// Constructors

	/** default constructor */
	public JxPksjb() {
	}

	/** minimal constructor */
	public JxPksjb(Long id) {
		this.id = id;
	}

	/** full constructor */
	public JxPksjb(Long id, String xn, String xq, Timestamp kssj,
			Timestamp jssj, String yxbz, String bz, String pydwh, String pydw) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.kssj = kssj;
		this.jssj = jssj;
		this.yxbz = yxbz;
		this.bz = bz;
		this.pydwh = pydwh;
		this.pydw = pydw;
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

	public String getPydwh() {
		return this.pydwh;
	}

	public void setPydwh(String pydwh) {
		this.pydwh = pydwh;
	}

	public String getPydw() {
		return this.pydw;
	}

	public void setPydw(String pydw) {
		this.pydw = pydw;
	}

}