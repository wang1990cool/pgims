package edu.ahut.model;

/**
 * PyFazb entity. @author MyEclipse Persistence Tools
 */

public class PyFazb implements java.io.Serializable {


	private static final long serialVersionUID = 3404657865056066529L;
	private Long id;
	private String bbh;
	private String pyfah;
	private String pyfamc;
	private String zydm;
	private String zymc;
	private Double xz;
	private String xxnx;
	private String xslxm;
	private String xslx;
	private String dwh;
	private String dwmc;
	private Double xwkxf;
	private Double zxf;
	private String fjdz;
	private String ztm;
	private String zt;
	private String sfyx;
	private String bz;
	private String pyfsm;
	private String pyfs;
	private String bzrgh;
	private String bzr;

	// Constructors

	/** default constructor */
	public PyFazb() {
	}

	/** minimal constructor */
	public PyFazb(String bbh, String pyfah) {
		this.bbh = bbh;
		this.pyfah = pyfah;
	}

	/** full constructor */
	public PyFazb(String bbh, String pyfah, String pyfamc, String zydm,
			String zymc, Double xz, String xxnx, String xslxm, String xslx,
			String dwh, String dwmc, Double xwkxf, Double zxf, String fjdz,
			String ztm, String zt, String sfyx, String bz, String pyfsm,
			String pyfs, String bzrgh, String bzr) {
		this.bbh = bbh;
		this.pyfah = pyfah;
		this.pyfamc = pyfamc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.xz = xz;
		this.xxnx = xxnx;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.xwkxf = xwkxf;
		this.zxf = zxf;
		this.fjdz = fjdz;
		this.ztm = ztm;
		this.zt = zt;
		this.sfyx = sfyx;
		this.bz = bz;
		this.pyfsm = pyfsm;
		this.pyfs = pyfs;
		this.bzrgh = bzrgh;
		this.bzr = bzr;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBbh() {
		return this.bbh;
	}

	public void setBbh(String bbh) {
		this.bbh = bbh;
	}

	public String getPyfah() {
		return this.pyfah;
	}

	public void setPyfah(String pyfah) {
		this.pyfah = pyfah;
	}

	public String getPyfamc() {
		return this.pyfamc;
	}

	public void setPyfamc(String pyfamc) {
		this.pyfamc = pyfamc;
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

	public Double getXz() {
		return this.xz;
	}

	public void setXz(Double xz) {
		this.xz = xz;
	}

	public String getXxnx() {
		return this.xxnx;
	}

	public void setXxnx(String xxnx) {
		this.xxnx = xxnx;
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

	public Double getXwkxf() {
		return this.xwkxf;
	}

	public void setXwkxf(Double xwkxf) {
		this.xwkxf = xwkxf;
	}

	public Double getZxf() {
		return this.zxf;
	}

	public void setZxf(Double zxf) {
		this.zxf = zxf;
	}

	public String getFjdz() {
		return this.fjdz;
	}

	public void setFjdz(String fjdz) {
		this.fjdz = fjdz;
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

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getPyfsm() {
		return this.pyfsm;
	}

	public void setPyfsm(String pyfsm) {
		this.pyfsm = pyfsm;
	}

	public String getPyfs() {
		return this.pyfs;
	}

	public void setPyfs(String pyfs) {
		this.pyfs = pyfs;
	}

	public String getBzrgh() {
		return this.bzrgh;
	}

	public void setBzrgh(String bzrgh) {
		this.bzrgh = bzrgh;
	}

	public String getBzr() {
		return this.bzr;
	}

	public void setBzr(String bzr) {
		this.bzr = bzr;
	}

}