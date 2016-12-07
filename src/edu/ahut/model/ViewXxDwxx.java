package edu.ahut.model;

/**
 * ViewXxDwxx entity. @author MyEclipse Persistence Tools
 */

public class ViewXxDwxx implements java.io.Serializable {

	private static final long serialVersionUID = 7579468658665683459L;
	private Long id;
	private String dwlbm;
	private String dwh;
	private String dwmc;
	private String dwjc;
	private String lsdwh;
	private String bszsdw;
	private String sszsdw;
	private String jxdw;
	private String ggjx;
	private Long pxh;
	private String sfyx;
	private String bz;
	private String dwlb;

	// Constructors

	/** default constructor */
	public ViewXxDwxx() {
	}

	/** minimal constructor */
	public ViewXxDwxx(Long id, String dwh) {
		this.id = id;
		this.dwh = dwh;
	}

	/** full constructor */
	public ViewXxDwxx(Long id, String dwlbm, String dwh, String dwmc,
			String dwjc, String lsdwh, String bszsdw, String sszsdw,
			String jxdw, String ggjx, Long pxh, String sfyx, String bz,
			String dwlb) {
		this.id = id;
		this.dwlbm = dwlbm;
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.dwjc = dwjc;
		this.lsdwh = lsdwh;
		this.bszsdw = bszsdw;
		this.sszsdw = sszsdw;
		this.jxdw = jxdw;
		this.ggjx = ggjx;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.dwlb = dwlb;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDwlbm() {
		return this.dwlbm;
	}

	public void setDwlbm(String dwlbm) {
		this.dwlbm = dwlbm;
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

	public String getDwlb() {
		return this.dwlb;
	}

	public void setDwlb(String dwlb) {
		this.dwlb = dwlb;
	}

}