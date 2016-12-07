package edu.ahut.model;

import java.util.Date;

/**
 * JxSkzlb entity. @author MyEclipse Persistence Tools
 */

public class JxSkzlb implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2291269067493504938L;
	// Fields

	private long id;
	private String kkkh;
	private String kch;
	private String xn;
	private String xq;
	private String kkdwh;
	private String ztm;
	private String kcmc;
	private String kkdw;
	private String zjjsh;
	private String zjjs;
	private String zt;
	private String bz;
	private String zllxm;
	private String zllx;
	private String zlwj;
	private String zlwjmc;
	private String zlwjdz;
	private Date zlscsj;
	private String zlscr;
	private String zlscip;
	// Constructors

	/** default constructor */
	public JxSkzlb() {
	}

	/** minimal constructor */
	public JxSkzlb(String kkkh, String kch, String xn, String xq) {
		this.kkkh = kkkh;
		this.kch = kch;
		this.xn = xn;
		this.xq = xq;
	}

	/** full constructor */
	public JxSkzlb(String kkkh, String kch, String xn, String xq, String kkdwh,
			String ztm, String kcmc, String kkdw, String zjjsh, String zjjs,
			String zt, String bz, String zllxm, String zllx, String zlwj,
			String zlwjmc, String zlwjdz, Date zlscsj, String zlscr,String zlscip) {
		this.kkkh = kkkh;
		this.kch = kch;
		this.xn = xn;
		this.xq = xq;
		this.kkdwh = kkdwh;
		this.ztm = ztm;
		this.kcmc = kcmc;
		this.kkdw = kkdw;
		this.zjjsh = zjjsh;
		this.zjjs = zjjs;
		this.zt = zt;
		this.bz = bz;
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.zlwj = zlwj;
		this.zlwjmc = zlwjmc;
		this.zlwjdz = zlwjdz;
		this.zlscsj = zlscsj;
		this.zlscr = zlscr;
		this.zlscip = zlscip;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
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

	public String getKkdwh() {
		return this.kkdwh;
	}

	public void setKkdwh(String kkdwh) {
		this.kkdwh = kkdwh;
	}

	public String getZtm() {
		return this.ztm;
	}

	public void setZtm(String ztm) {
		this.ztm = ztm;
	}

	public String getKcmc() {
		return this.kcmc;
	}

	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}

	public String getKkdw() {
		return this.kkdw;
	}

	public void setKkdw(String kkdw) {
		this.kkdw = kkdw;
	}

	public String getZjjsh() {
		return this.zjjsh;
	}

	public void setZjjsh(String zjjsh) {
		this.zjjsh = zjjsh;
	}

	public String getZjjs() {
		return this.zjjs;
	}

	public void setZjjs(String zjjs) {
		this.zjjs = zjjs;
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
		return zlscip;
	}

	public void setZlscip(String zlscip) {
		this.zlscip = zlscip;
	}

}