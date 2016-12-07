package edu.ahut.model;


/**
 * PyKckzb entity. @author MyEclipse Persistence Tools
 */

public class PyKckzb implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -250063707755786601L;
	// Fields

	private long id;
	private String kch;
	private String kcmc;
	private String kcywmc;
	private String kcjj;
	private Double kcxf;
	private String xslxm;
	private String xslx;
	private Double zxs;
	private Double llxs;
	private Double syxs;
	private String ggkbzm;
	private String pyccm;
	private String pycc;
	private String kkdwh;
	private String kkdw;
	private String sfyx;
	private String bz;
	private String ggkbz;
	private Short mzxs;
	private String zyxwbz;
	private String xsxwbz;

	// Constructors

	/** default constructor */
	public PyKckzb() {
	}

	/** minimal constructor */
	public PyKckzb(String kch, String xslxm) {
		this.kch = kch;
		this.xslxm = xslxm;
	}

	/** full constructor */
	public PyKckzb(String kch, String kcmc, String kcywmc, String kcjj,
			Double kcxf, String xslxm, String xslx, Double zxs, Double llxs,
			Double syxs, String ggkbzm, String pyccm, String pycc,
			String kkdwh, String kkdw, String sfyx, String bz, String ggkbz,
			Short mzxs, String zyxwbz, String xsxwbz) {
		this.kch = kch;
		this.kcmc = kcmc;
		this.kcywmc = kcywmc;
		this.kcjj = kcjj;
		this.kcxf = kcxf;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.zxs = zxs;
		this.llxs = llxs;
		this.syxs = syxs;
		this.ggkbzm = ggkbzm;
		this.pyccm = pyccm;
		this.pycc = pycc;
		this.kkdwh = kkdwh;
		this.kkdw = kkdw;
		this.sfyx = sfyx;
		this.bz = bz;
		this.ggkbz = ggkbz;
		this.mzxs = mzxs;
		this.zyxwbz = zyxwbz;
		this.xsxwbz = xsxwbz;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
	}

	public String getKcmc() {
		return this.kcmc;
	}

	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}

	public String getKcywmc() {
		return this.kcywmc;
	}

	public void setKcywmc(String kcywmc) {
		this.kcywmc = kcywmc;
	}

	public String getKcjj() {
		return this.kcjj;
	}

	public void setKcjj(String kcjj) {
		this.kcjj = kcjj;
	}

	public Double getKcxf() {
		return this.kcxf;
	}

	public void setKcxf(Double kcxf) {
		this.kcxf = kcxf;
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

	public Double getZxs() {
		return this.zxs;
	}

	public void setZxs(Double zxs) {
		this.zxs = zxs;
	}

	public Double getLlxs() {
		return this.llxs;
	}

	public void setLlxs(Double llxs) {
		this.llxs = llxs;
	}

	public Double getSyxs() {
		return this.syxs;
	}

	public void setSyxs(Double syxs) {
		this.syxs = syxs;
	}

	public String getGgkbzm() {
		return this.ggkbzm;
	}

	public void setGgkbzm(String ggkbzm) {
		this.ggkbzm = ggkbzm;
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

	public String getKkdwh() {
		return this.kkdwh;
	}

	public void setKkdwh(String kkdwh) {
		this.kkdwh = kkdwh;
	}

	public String getKkdw() {
		return this.kkdw;
	}

	public void setKkdw(String kkdw) {
		this.kkdw = kkdw;
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

	public String getGgkbz() {
		return this.ggkbz;
	}

	public void setGgkbz(String ggkbz) {
		this.ggkbz = ggkbz;
	}

	public Short getMzxs() {
		return this.mzxs;
	}

	public void setMzxs(Short mzxs) {
		this.mzxs = mzxs;
	}

	public String getZyxwbz() {
		return this.zyxwbz;
	}

	public void setZyxwbz(String zyxwbz) {
		this.zyxwbz = zyxwbz;
	}

	public String getXsxwbz() {
		return this.xsxwbz;
	}

	public void setXsxwbz(String xsxwbz) {
		this.xsxwbz = xsxwbz;
	}

}