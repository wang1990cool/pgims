package edu.ahut.model;


/**
 * ViewXsJcxx entity. @author MyEclipse Persistence Tools
 */

public class ViewXsJcxx implements java.io.Serializable {

	private static final long serialVersionUID = -1158791600208974645L;
	private long id;
	private String xh;
	private String xm;
	private String nj;
	private String yxsh;
	private String fymc;
	private String zydm;
	private String zymc;
	private String pyccm;
	private String jylbm;
	private String xwlb;
	private String jylb;
	private String xwlbm;
	private String pycc;
	private String xslx;
	private String xslxm;
	private String dsh;
	private String dsxm;

	// Constructors

	/** default constructor */
	public ViewXsJcxx() {
	}

	/** minimal constructor */
	public ViewXsJcxx(long id, String xh) {
		this.id = id;
		this.xh = xh;
	}

	/** full constructor */
	public ViewXsJcxx(long id, String xh, String xm, String nj,
			String yxsh, String fymc, String zydm, String zymc, String pyccm,
			String jylbm, String xwlb, String jylb, String xwlbm, String pycc,
			String xslx, String xslxm, String dsh, String dsxm) {
		this.id = id;
		this.xh = xh;
		this.xm = xm;
		this.nj = nj;
		this.yxsh = yxsh;
		this.fymc = fymc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.pyccm = pyccm;
		this.jylbm = jylbm;
		this.xwlb = xwlb;
		this.jylb = jylb;
		this.xwlbm = xwlbm;
		this.pycc = pycc;
		this.xslx = xslx;
		this.xslxm = xslxm;
		this.dsh = dsh;
		this.dsxm = dsxm;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
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

	public String getJylbm() {
		return this.jylbm;
	}

	public void setJylbm(String jylbm) {
		this.jylbm = jylbm;
	}

	public String getXwlb() {
		return this.xwlb;
	}

	public void setXwlb(String xwlb) {
		this.xwlb = xwlb;
	}

	public String getJylb() {
		return this.jylb;
	}

	public void setJylb(String jylb) {
		this.jylb = jylb;
	}

	public String getXwlbm() {
		return this.xwlbm;
	}

	public void setXwlbm(String xwlbm) {
		this.xwlbm = xwlbm;
	}

	public String getPycc() {
		return this.pycc;
	}

	public void setPycc(String pycc) {
		this.pycc = pycc;
	}

	public String getXslx() {
		return this.xslx;
	}

	public void setXslx(String xslx) {
		this.xslx = xslx;
	}

	public String getXslxm() {
		return this.xslxm;
	}

	public void setXslxm(String xslxm) {
		this.xslxm = xslxm;
	}

	public String getDsh() {
		return dsh;
	}

	public void setDsh(String dsh) {
		this.dsh = dsh;
	}

	public String getDsxm() {
		return dsxm;
	}

	public void setDsxm(String dsxm) {
		this.dsxm = dsxm;
	}

}