package edu.ahut.model;


/**
 * XkXkzyjhb entity. @author MyEclipse Persistence Tools
 */

public class XkXkzyjhb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -1932073395278631130L;
	/**
	 * 
	 */
	private Long id;
	private String nj;
	private String dwh;
	private String dwmc;
	private String zydm;
	private String zymc;
	private String xxzymc;
	private String xslxm;
	private String xslx;
	private String sfyx;
	private Long pxh;
	private String bz;
	private Long jhrs;
	private Long lqrs;
	private Long rxrs;

	// Constructors

	/** default constructor */
	public XkXkzyjhb() {
	}

	/** minimal constructor */
	public XkXkzyjhb(Long id, String nj, String dwh) {
		this.id = id;
		this.nj = nj;
		this.dwh = dwh;
	}

	/** full constructor */
	public XkXkzyjhb(Long id, String nj, String dwh, String dwmc,
			String zydm, String zymc, String xxzymc, String xslxm, String xslx,
			String sfyx, Long pxh, String bz, Long jhrs, Long lqrs,
			Long rxrs) {
		this.id = id;
		this.nj = nj;
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.xxzymc = xxzymc;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.sfyx = sfyx;
		this.pxh = pxh;
		this.bz = bz;
		this.jhrs = jhrs;
		this.lqrs = lqrs;
		this.rxrs = rxrs;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNj() {
		return this.nj;
	}

	public void setNj(String nj) {
		this.nj = nj;
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

	public String getXxzymc() {
		return this.xxzymc;
	}

	public void setXxzymc(String xxzymc) {
		this.xxzymc = xxzymc;
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

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
		this.pxh = pxh;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public Long getJhrs() {
		return this.jhrs;
	}

	public void setJhrs(Long jhrs) {
		this.jhrs = jhrs;
	}

	public Long getLqrs() {
		return this.lqrs;
	}

	public void setLqrs(Long lqrs) {
		this.lqrs = lqrs;
	}

	public Long getRxrs() {
		return this.rxrs;
	}

	public void setRxrs(Long rxrs) {
		this.rxrs = rxrs;
	}

}