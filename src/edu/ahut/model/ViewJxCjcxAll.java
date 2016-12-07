package edu.ahut.model;

import java.math.BigDecimal;

/**
 * ViewJxCjcxAll entity. @author MyEclipse Persistence Tools
 */

public class ViewJxCjcxAll implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 3263243100599497650L;
	private BigDecimal id;
	private String kkkh;
	private String xh;
	private String xm;
	private String ksxzm;
	private String ksxz;
	private Double pscj;
	private Double fslkscj;
	private String kcdjcjm;
	private String djlkscj;
	private Double kccj;
	private String bz;
	private String xn;
	private String xq;
	private String kch;
	private String kcmc;
	private String zjjsh;
	private String zjjs;
	private String ksxsm;
	private String ksxs;
	private String ksfsm;
	private String ksfs;
	private Double kcxf;
	private String cjlxm;
	private String cjlx;
	private String sjzt;
	private Integer pscjbl;
	private Boolean ywpscj;
	private String xslxm;
	private String xslx;
	private String sznj;
	private String fyh;
	private String fymc;
	private String zydm;
	private String zymc;
	private String szdw;
	private String szdwh;
	private String kclbm;
	private String kclb;
	private String kcxzm;
	private String kcxz;
	private String kcsxm;
	private String kcsx;

	// Constructors

	/** default constructor */
	public ViewJxCjcxAll() {
	}

	/** minimal constructor */
	public ViewJxCjcxAll(BigDecimal id, String kkkh, String xh, String xm,
			String xn, String xq, String kch) {
		this.id = id;
		this.kkkh = kkkh;
		this.xh = xh;
		this.xm = xm;
		this.xn = xn;
		this.xq = xq;
		this.kch = kch;
	}

	/** full constructor */
	public ViewJxCjcxAll(BigDecimal id, String kkkh, String xh, String xm,
			String ksxzm, String ksxz, Double pscj, Double fslkscj,
			String kcdjcjm, String djlkscj, Double kccj, String bz, String xn,
			String xq, String kch, String kcmc, String zjjsh, String zjjs,
			String ksxsm, String ksxs, String ksfsm, String ksfs, Double kcxf,
			String cjlxm, String cjlx, String sjzt, Integer pscjbl,
			Boolean ywpscj, String xslxm, String xslx, String sznj, String fyh,
			String fymc, String zydm, String zymc, String szdw, String szdwh,
			String kclbm, String kclb, String kcxzm, String kcxz, String kcsxm,
			String kcsx) {
		this.id = id;
		this.kkkh = kkkh;
		this.xh = xh;
		this.xm = xm;
		this.ksxzm = ksxzm;
		this.ksxz = ksxz;
		this.pscj = pscj;
		this.fslkscj = fslkscj;
		this.kcdjcjm = kcdjcjm;
		this.djlkscj = djlkscj;
		this.kccj = kccj;
		this.bz = bz;
		this.xn = xn;
		this.xq = xq;
		this.kch = kch;
		this.kcmc = kcmc;
		this.zjjsh = zjjsh;
		this.zjjs = zjjs;
		this.ksxsm = ksxsm;
		this.ksxs = ksxs;
		this.ksfsm = ksfsm;
		this.ksfs = ksfs;
		this.kcxf = kcxf;
		this.cjlxm = cjlxm;
		this.cjlx = cjlx;
		this.sjzt = sjzt;
		this.pscjbl = pscjbl;
		this.ywpscj = ywpscj;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.sznj = sznj;
		this.fyh = fyh;
		this.fymc = fymc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.szdw = szdw;
		this.szdwh = szdwh;
		this.kclbm = kclbm;
		this.kclb = kclb;
		this.kcxzm = kcxzm;
		this.kcxz = kcxz;
		this.kcsxm = kcsxm;
		this.kcsx = kcsx;
	}

	// Property accessors

	public BigDecimal getId() {
		return this.id;
	}

	public void setId(BigDecimal id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
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

	public String getKsxzm() {
		return this.ksxzm;
	}

	public void setKsxzm(String ksxzm) {
		this.ksxzm = ksxzm;
	}

	public String getKsxz() {
		return this.ksxz;
	}

	public void setKsxz(String ksxz) {
		this.ksxz = ksxz;
	}

	public Double getPscj() {
		return this.pscj;
	}

	public void setPscj(Double pscj) {
		this.pscj = pscj;
	}

	public Double getFslkscj() {
		return this.fslkscj;
	}

	public void setFslkscj(Double fslkscj) {
		this.fslkscj = fslkscj;
	}

	public String getKcdjcjm() {
		return this.kcdjcjm;
	}

	public void setKcdjcjm(String kcdjcjm) {
		this.kcdjcjm = kcdjcjm;
	}

	public String getDjlkscj() {
		return this.djlkscj;
	}

	public void setDjlkscj(String djlkscj) {
		this.djlkscj = djlkscj;
	}

	public Double getKccj() {
		return this.kccj;
	}

	public void setKccj(Double kccj) {
		this.kccj = kccj;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
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

	public String getKsxsm() {
		return this.ksxsm;
	}

	public void setKsxsm(String ksxsm) {
		this.ksxsm = ksxsm;
	}

	public String getKsxs() {
		return this.ksxs;
	}

	public void setKsxs(String ksxs) {
		this.ksxs = ksxs;
	}

	public String getKsfsm() {
		return this.ksfsm;
	}

	public void setKsfsm(String ksfsm) {
		this.ksfsm = ksfsm;
	}

	public String getKsfs() {
		return this.ksfs;
	}

	public void setKsfs(String ksfs) {
		this.ksfs = ksfs;
	}

	public Double getKcxf() {
		return this.kcxf;
	}

	public void setKcxf(Double kcxf) {
		this.kcxf = kcxf;
	}

	public String getCjlxm() {
		return this.cjlxm;
	}

	public void setCjlxm(String cjlxm) {
		this.cjlxm = cjlxm;
	}

	public String getCjlx() {
		return this.cjlx;
	}

	public void setCjlx(String cjlx) {
		this.cjlx = cjlx;
	}

	public String getSjzt() {
		return this.sjzt;
	}

	public void setSjzt(String sjzt) {
		this.sjzt = sjzt;
	}

	public Integer getPscjbl() {
		return this.pscjbl;
	}

	public void setPscjbl(Integer pscjbl) {
		this.pscjbl = pscjbl;
	}

	public Boolean getYwpscj() {
		return this.ywpscj;
	}

	public void setYwpscj(Boolean ywpscj) {
		this.ywpscj = ywpscj;
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

	public String getSznj() {
		return this.sznj;
	}

	public void setSznj(String sznj) {
		this.sznj = sznj;
	}

	public String getFyh() {
		return this.fyh;
	}

	public void setFyh(String fyh) {
		this.fyh = fyh;
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

	public String getSzdw() {
		return this.szdw;
	}

	public void setSzdw(String szdw) {
		this.szdw = szdw;
	}

	public String getSzdwh() {
		return this.szdwh;
	}

	public void setSzdwh(String szdwh) {
		this.szdwh = szdwh;
	}

	public String getKclbm() {
		return this.kclbm;
	}

	public void setKclbm(String kclbm) {
		this.kclbm = kclbm;
	}

	public String getKclb() {
		return this.kclb;
	}

	public void setKclb(String kclb) {
		this.kclb = kclb;
	}

	public String getKcxzm() {
		return this.kcxzm;
	}

	public void setKcxzm(String kcxzm) {
		this.kcxzm = kcxzm;
	}

	public String getKcxz() {
		return this.kcxz;
	}

	public void setKcxz(String kcxz) {
		this.kcxz = kcxz;
	}

	public String getKcsxm() {
		return this.kcsxm;
	}

	public void setKcsxm(String kcsxm) {
		this.kcsxm = kcsxm;
	}

	public String getKcsx() {
		return this.kcsx;
	}

	public void setKcsx(String kcsx) {
		this.kcsx = kcsx;
	}

}