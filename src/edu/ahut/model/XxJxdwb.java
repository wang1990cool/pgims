package edu.ahut.model;

/**
 * XxJxdwb entity. @author MyEclipse Persistence Tools
 */

public class XxJxdwb implements java.io.Serializable {

	private static final long serialVersionUID = 8107500737794263966L;
	private Long id;
	private String dwh;
	private String dwmc;
	private String dwjc;
	private String lsdwh;
	private Long pxh;
	private String sfyx;
	private String bz;
	private String zsdw;
	private String jxdw;
	private String ggjx;

	// Constructors

	/** default constructor */
	public XxJxdwb() {
	}

	/** minimal constructor */
	public XxJxdwb(String dwh, String dwmc) {
		this.dwh = dwh;
		this.dwmc = dwmc;
	}

	/** full constructor */
	public XxJxdwb(String dwh, String dwmc, String dwjc, String lsdwh,
			Long pxh, String sfyx, String bz, String zsdw, String jxdw,
			String ggjx) {
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.dwjc = dwjc;
		this.lsdwh = lsdwh;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.zsdw = zsdw;
		this.jxdw = jxdw;
		this.ggjx = ggjx;
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

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
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

	public String getZsdw() {
		return this.zsdw;
	}

	public void setZsdw(String zsdw) {
		this.zsdw = zsdw;
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

}