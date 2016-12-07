package edu.ahut.model;

/**
 * ViewXkDwxkb entity. @author MyEclipse Persistence Tools
 */

public class ViewXkDwxkb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String dwh;
	private String dwmc;
	private String dwjc;
	private String lsdwh;
	private String zydm;
	private String zymc;
	private String xkmlm;
	private String xkmlmc;
	private String sssyzk;
	private String bssyzk;
	private String xwlbm;
	private String xwlb;
	private String sfyx;
	private String bszsdw;
	private String sszsdw;
	private String jxdw;
	private String ggjx;
	private String dwlbm;

	// Constructors

	/** default constructor */
	public ViewXkDwxkb() {
	}

	/** minimal constructor */
	public ViewXkDwxkb(String dwh, String zydm) {
		this.dwh = dwh;
		this.zydm = zydm;
	}

	/** full constructor */
	public ViewXkDwxkb(String dwh, String dwmc, String dwjc, String lsdwh,
			String zydm, String zymc, String xkmlm, String xkmlmc,
			String sssyzk, String bssyzk, String xwlbm, String xwlb,
			String sfyx, String bszsdw, String sszsdw, String jxdw,
			String ggjx, String dwlbm) {
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.dwjc = dwjc;
		this.lsdwh = lsdwh;
		this.zydm = zydm;
		this.zymc = zymc;
		this.xkmlm = xkmlm;
		this.xkmlmc = xkmlmc;
		this.sssyzk = sssyzk;
		this.bssyzk = bssyzk;
		this.xwlbm = xwlbm;
		this.xwlb = xwlb;
		this.sfyx = sfyx;
		this.bszsdw = bszsdw;
		this.sszsdw = sszsdw;
		this.jxdw = jxdw;
		this.ggjx = ggjx;
		this.dwlbm = dwlbm;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDwh() {
		return this.dwh;
	}

	public void setDwh(String dwh) {
		this.dwh = dwh;
	}

	public String getDwmc() {
		return this.dwmc;
	}

	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}

	public String getDwjc() {
		return this.dwjc;
	}

	public void setDwjc(String dwjc) {
		this.dwjc = dwjc;
	}

	public String getLsdwh() {
		return this.lsdwh;
	}

	public void setLsdwh(String lsdwh) {
		this.lsdwh = lsdwh;
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

	public String getXkmlm() {
		return this.xkmlm;
	}

	public void setXkmlm(String xkmlm) {
		this.xkmlm = xkmlm;
	}

	public String getXkmlmc() {
		return this.xkmlmc;
	}

	public void setXkmlmc(String xkmlmc) {
		this.xkmlmc = xkmlmc;
	}

	public String getSssyzk() {
		return this.sssyzk;
	}

	public void setSssyzk(String sssyzk) {
		this.sssyzk = sssyzk;
	}

	public String getBssyzk() {
		return this.bssyzk;
	}

	public void setBssyzk(String bssyzk) {
		this.bssyzk = bssyzk;
	}

	public String getXwlbm() {
		return this.xwlbm;
	}

	public void setXwlbm(String xwlbm) {
		this.xwlbm = xwlbm;
	}

	public String getXwlb() {
		return this.xwlb;
	}

	public void setXwlb(String xwlb) {
		this.xwlb = xwlb;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public String getBszsdw() {
		return this.bszsdw;
	}

	public void setBszsdw(String bszsdw) {
		this.bszsdw = bszsdw;
	}

	public String getSszsdw() {
		return this.sszsdw;
	}

	public void setSszsdw(String sszsdw) {
		this.sszsdw = sszsdw;
	}

	public String getJxdw() {
		return this.jxdw;
	}

	public void setJxdw(String jxdw) {
		this.jxdw = jxdw;
	}

	public String getGgjx() {
		return this.ggjx;
	}

	public void setGgjx(String ggjx) {
		this.ggjx = ggjx;
	}

	public String getDwlbm() {
		return this.dwlbm;
	}

	public void setDwlbm(String dwlbm) {
		this.dwlbm = dwlbm;
	}

}