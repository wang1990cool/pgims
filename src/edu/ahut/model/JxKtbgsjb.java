package edu.ahut.model;

import java.util.Date;

/**
 * JxKtbgsjb entity. @author MyEclipse Persistence Tools
 */

public class JxKtbgsjb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String xn;
	private String xq;
	private String fyh;
	private String fymc;
	private String zydm;
	private String zymc;
	private String xslxm;
	private String xslx;
	private Date kssj;
	private Date jssj;
	private String bz;
	private String sznj;
	private String xwbz;

	// Constructors

	/** default constructor */
	public JxKtbgsjb() {
	}

	/** full constructor */
	public JxKtbgsjb(String xn, String xq, String fyh, String fymc,
			String zydm, String zymc, String xslxm, String xslx,
			Date kssj, Date jssj, String bz, String sznj, String xwbz) {
		this.xn = xn;
		this.xq = xq;
		this.fyh = fyh;
		this.fymc = fymc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.kssj = kssj;
		this.jssj = jssj;
		this.bz = bz;
		this.sznj = sznj;
		this.xwbz = xwbz;
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

	public String getFyh() {
		return this.fyh;
	}

	public void setFyh(String fyh) {
		this.fyh = fyh;
	}

	public String getFymc() {
		return this.fymc;
	}

	public void setFymc(String fymc) {
		this.fymc = fymc;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getZymc() {
		return this.zymc;
	}

	public void setZymc(String zymc) {
		this.zymc = zymc;
	}

	public String getXslxm() {
		return this.xslxm;
	}

	public void setXslxm(String xslxm) {
		this.xslxm = xslxm;
	}

	public String getXslx() {
		return this.xslx;
	}

	public void setXslx(String xslx) {
		this.xslx = xslx;
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

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getSznj() {
		return this.sznj;
	}

	public void setSznj(String sznj) {
		this.sznj = sznj;
	}

	public String getXwbz() {
		return xwbz;
	}

	public void setXwbz(String xwbz) {
		this.xwbz = xwbz;
	}



}