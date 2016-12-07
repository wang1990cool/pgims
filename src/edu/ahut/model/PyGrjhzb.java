package edu.ahut.model;

/**
 * PyGrjhzbId entity. @author MyEclipse Persistence Tools
 */

public class PyGrjhzb implements java.io.Serializable {

	private static final long serialVersionUID = 5600439523279948428L;
	private Long id;
	private String nj;
	private String yxsh;
	private String zydm;
	private String xh;
	private String dsh;
	private String ztm;
	private String zt;
	private String sfyx;
	private String sxrq;
	private String pyfah;
	// Constructors

	/** default constructor */
	public PyGrjhzb() {
	}

	/** minimal constructor */
	public PyGrjhzb(Long id, String nj, String yxsh, String zydm, String xh,
			String dsh) {
		this.id = id;
		this.nj = nj;
		this.yxsh = yxsh;
		this.zydm = zydm;
		this.xh = xh;
		this.dsh = dsh;
	}

	/** full constructor */
	public PyGrjhzb(Long id, String nj, String yxsh, String zydm, String xh,
			String dsh, String ztm, String zt, String sfyx, String sxrq,String pyfah) {
		this.id = id;
		this.nj = nj;
		this.yxsh = yxsh;
		this.zydm = zydm;
		this.xh = xh;
		this.dsh = dsh;
		this.ztm = ztm;
		this.zt = zt;
		this.sfyx = sfyx;
		this.sxrq = sxrq;
		this.pyfah = pyfah;
	}

	// Property accessors

	
	
	public Long getId() {
		return this.id;
	}

	public String getPyfah() {
		return pyfah;
	}

	public void setPyfah(String pyfah) {
		this.pyfah = pyfah;
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

	public String getYxsh() {
		return this.yxsh;
	}

	public void setYxsh(String yxsh) {
		this.yxsh = yxsh;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}

	public String getDsh() {
		return this.dsh;
	}

	public void setDsh(String dsh) {
		this.dsh = dsh;
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

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public String getSxrq() {
		return this.sxrq;
	}

	public void setSxrq(String sxrq) {
		this.sxrq = sxrq;
	}

}