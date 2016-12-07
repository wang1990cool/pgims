package edu.ahut.model;

import java.util.Date;

/**
 * XwZqkhzlb entity. @author MyEclipse Persistence Tools
 */

public class XwZqkhzlb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -8201322637542133163L;
	private Long id;
	private String xh;
	private String zllxm;
	private String zllx;
	private String zlwj;
	private String zlwjmc;
	private String zlwjdz;
	private Date zlscsj;
	private String zlscr;
	private String zlscip;
	private String ztm;
	private String zt;
	private String xn;
	private String xq;

	// Constructors

	/** default constructor */
	public XwZqkhzlb() {
	}

	/** minimal constructor */
	public XwZqkhzlb(Long id, String xh, String zllxm, String zllx, String xn,
			String xq) {
		this.id = id;
		this.xh = xh;
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.xn = xn;
		this.xq = xq;
	}

	/** full constructor */
	public XwZqkhzlb(Long id, String xh, String zllxm, String zllx,
			String zlwj, String zlwjmc, String zlwjdz, Date zlscsj,
			String zlscr, String zlscip, String ztm, String zt, String xn,
			String xq) {
		this.id = id;
		this.xh = xh;
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.zlwj = zlwj;
		this.zlwjmc = zlwjmc;
		this.zlwjdz = zlwjdz;
		this.zlscsj = zlscsj;
		this.zlscr = zlscr;
		this.zlscip = zlscip;
		this.ztm = ztm;
		this.zt = zt;
		this.xn = xn;
		this.xq = xq;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}

	public String getZllxm() {
		return this.zllxm;
	}

	public void setZllxm(String zllxm) {
		this.zllxm = zllxm;
	}

	public String getZllx() {
		return this.zllx;
	}

	public void setZllx(String zllx) {
		this.zllx = zllx;
	}

	public String getZlwj() {
		return this.zlwj;
	}

	public void setZlwj(String zlwj) {
		this.zlwj = zlwj;
	}

	public String getZlwjmc() {
		return this.zlwjmc;
	}

	public void setZlwjmc(String zlwjmc) {
		this.zlwjmc = zlwjmc;
	}

	public String getZlwjdz() {
		return this.zlwjdz;
	}

	public void setZlwjdz(String zlwjdz) {
		this.zlwjdz = zlwjdz;
	}

	public Date getZlscsj() {
		return this.zlscsj;
	}

	public void setZlscsj(Date zlscsj) {
		this.zlscsj = zlscsj;
	}

	public String getZlscr() {
		return this.zlscr;
	}

	public void setZlscr(String zlscr) {
		this.zlscr = zlscr;
	}

	public String getZlscip() {
		return this.zlscip;
	}

	public void setZlscip(String zlscip) {
		this.zlscip = zlscip;
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

}