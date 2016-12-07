package edu.ahut.model;

import java.util.Date;


/**
 * XwKyxmb entity. @author MyEclipse Persistence Tools
 */

public class XwKyxmb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String xn;
	private String xq;
	private String xh;
	
	private String xmmc;
	private String xmfzr;
	private String xmlxm;
	private String xmlx;
	private String jzqk;
	private String lrrgh;
	private String lrr;
	private String lrip;
	private Date lrsj;
	private String ztm;
	private String zt;
	private String bz;

	// Constructors

	/** default constructor */
	public XwKyxmb() {
	}

	/** minimal constructor */
	public XwKyxmb(String xn, String xq, String xh, String xmmc, String xmfzr,
			String xmlxm, String xmlx, String jzqk, String ztm, String zt) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.xmmc = xmmc;
		this.xmfzr = xmfzr;
		this.xmlxm = xmlxm;
		this.xmlx = xmlx;
		this.jzqk = jzqk;
		this.ztm = ztm;
		this.zt = zt;
	}

	/** full constructor */
	public XwKyxmb(String xn, String xq, String xh, String xmmc, String xmfzr,
			String xmlxm, String xmlx, String jzqk, String lrrgh, String lrr,
			String lrip, Date lrsj, String ztm, String zt, String bz) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.xmmc = xmmc;
		this.xmfzr = xmfzr;
		this.xmlxm = xmlxm;
		this.xmlx = xmlx;
		this.jzqk = jzqk;
		this.lrrgh = lrrgh;
		this.lrr = lrr;
		this.lrip = lrip;
		this.lrsj = lrsj;
		this.ztm = ztm;
		this.zt = zt;
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

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}

	public String getXmmc() {
		return this.xmmc;
	}

	public void setXmmc(String xmmc) {
		this.xmmc = xmmc;
	}

	public String getXmfzr() {
		return this.xmfzr;
	}

	public void setXmfzr(String xmfzr) {
		this.xmfzr = xmfzr;
	}

	public String getXmlxm() {
		return this.xmlxm;
	}

	public void setXmlxm(String xmlxm) {
		this.xmlxm = xmlxm;
	}

	public String getXmlx() {
		return this.xmlx;
	}

	public void setXmlx(String xmlx) {
		this.xmlx = xmlx;
	}

	public String getJzqk() {
		return this.jzqk;
	}

	public void setJzqk(String jzqk) {
		this.jzqk = jzqk;
	}

	public String getLrrgh() {
		return this.lrrgh;
	}

	public void setLrrgh(String lrrgh) {
		this.lrrgh = lrrgh;
	}

	public String getLrr() {
		return this.lrr;
	}

	public void setLrr(String lrr) {
		this.lrr = lrr;
	}

	public String getLrip() {
		return this.lrip;
	}

	public void setLrip(String lrip) {
		this.lrip = lrip;
	}

	public Date getLrsj() {
		return this.lrsj;
	}

	public void setLrsj(Date lrsj) {
		this.lrsj = lrsj;
	}

	public String getZtm() {
		return this.ztm;
	}

	public void setZtm(String ztm) {
		this.ztm = ztm;
	}

	public String getZt() {
		return this.zt;
	}

	public void setZt(String zt) {
		this.zt = zt;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}