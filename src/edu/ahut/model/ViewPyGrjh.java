package edu.ahut.model;

/**
 * ViewPyGrjh entity. @author MyEclipse Persistence Tools
 */

public class ViewPyGrjh implements java.io.Serializable {

	private static final long serialVersionUID = 2704839201301957275L;
	private Long id;
	private String xh;
	private String xm;
	private String nj;
	private String yxsh;
	private String fymc;
	private String zydm;
	private String zymc;
	private String pyccm;
	private String pycc;
	private String xwlb;
	private String dsh;
	private String dsxm;
	private String jylb;
	private String xslx;
	private String pyfah;
	private String ztm;
	private String zt;

	// Constructors

	/** default constructor */
	public ViewPyGrjh() {
	}

	/** minimal constructor */
	public ViewPyGrjh(Long id, String xh, String nj, String yxsh) {
		this.id = id;
		this.xh = xh;
		this.nj = nj;
		this.yxsh = yxsh;
	}

	/** full constructor */
	public ViewPyGrjh(Long id, String xh, String xm, String nj, String yxsh,
			String fymc, String zydm, String zymc, String pyccm, String pycc,
			String xwlb, String dsh, String dsxm, String jylb, String xslx,
			String pyfah, String ztm, String zt) {
		this.id = id;
		this.xh = xh;
		this.xm = xm;
		this.nj = nj;
		this.yxsh = yxsh;
		this.fymc = fymc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.pyccm = pyccm;
		this.pycc = pycc;
		this.xwlb = xwlb;
		this.dsh = dsh;
		this.dsxm = dsxm;
		this.jylb = jylb;
		this.xslx = xslx;
		this.pyfah = pyfah;
		this.ztm = ztm;
		this.zt = zt;
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

	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
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

	public String getPyccm() {
		return this.pyccm;
	}

	public void setPyccm(String pyccm) {
		this.pyccm = pyccm;
	}

	public String getPycc() {
		return this.pycc;
	}

	public void setPycc(String pycc) {
		this.pycc = pycc;
	}

	public String getXwlb() {
		return this.xwlb;
	}

	public void setXwlb(String xwlb) {
		this.xwlb = xwlb;
	}

	public String getDsh() {
		return this.dsh;
	}

	public void setDsh(String dsh) {
		this.dsh = dsh;
	}

	public String getDsxm() {
		return this.dsxm;
	}

	public void setDsxm(String dsxm) {
		this.dsxm = dsxm;
	}

	public String getJylb() {
		return this.jylb;
	}

	public void setJylb(String jylb) {
		this.jylb = jylb;
	}

	public String getXslx() {
		return this.xslx;
	}

	public void setXslx(String xslx) {
		this.xslx = xslx;
	}

	public String getPyfah() {
		return this.pyfah;
	}

	public void setPyfah(String pyfah) {
		this.pyfah = pyfah;
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

}