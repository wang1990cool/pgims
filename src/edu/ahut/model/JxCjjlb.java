package edu.ahut.model;

import java.util.Date;


public class JxCjjlb implements java.io.Serializable {


	private static final long serialVersionUID = -8733126510685686233L;
	private Long id;
	private String kkkh;
	private String xn;
	private String xq;
	private String kch;
	private String kcmc;
	private String zjjsh;
	private String zjjs;
	private String ksxsm;
	private String ksxs;
	private String ksrq;
	private String ksfsm;
	private String ksfs;
	private Double kcxf;
	private String cjlxm;
	private String cjlx;
	private String cjlrrgh;
	private Date cjlrsj;
	private String sjzt;
	private String bz;
	private String ksdd;
	private Integer pscjbl;
	private Integer ywpscj;


	public JxCjjlb() {
	}

	/** minimal constructor */
	public JxCjjlb(String kkkh, String xn, String xq, String kch, String kcmc) {
		this.kkkh = kkkh;
		this.xn = xn;
		this.xq = xq;
		this.kch = kch;
		this.kcmc = kcmc;
	}

	/** full constructor */
	public JxCjjlb(String kkkh, String xn, String xq, String kch, String kcmc,
			String zjjsh, String zjjs, String ksxsm, String ksxs, String ksrq,
			String ksfsm, String ksfs, Double kcxf, String cjlxm, String cjlx,
			String cjlrrgh, Date cjlrsj, String sjzt, String bz,
			String ksdd, Integer pscjbl, Integer ywpscj) {
		this.kkkh = kkkh;
		this.xn = xn;
		this.xq = xq;
		this.kch = kch;
		this.kcmc = kcmc;
		this.zjjsh = zjjsh;
		this.zjjs = zjjs;
		this.ksxsm = ksxsm;
		this.ksxs = ksxs;
		this.ksrq = ksrq;
		this.ksfsm = ksfsm;
		this.ksfs = ksfs;
		this.kcxf = kcxf;
		this.cjlxm = cjlxm;
		this.cjlx = cjlx;
		this.cjlrrgh = cjlrrgh;
		this.cjlrsj = cjlrsj;
		this.sjzt = sjzt;
		this.bz = bz;
		this.ksdd = ksdd;
		this.pscjbl = pscjbl;
		this.ywpscj = ywpscj;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
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

	public String getKsrq() {
		return this.ksrq;
	}

	public void setKsrq(String ksrq) {
		this.ksrq = ksrq;
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

	public String getCjlrrgh() {
		return this.cjlrrgh;
	}

	public void setCjlrrgh(String cjlrrgh) {
		this.cjlrrgh = cjlrrgh;
	}

	public Date getCjlrsj() {
		return this.cjlrsj;
	}

	public void setCjlrsj(Date cjlrsj) {
		this.cjlrsj = cjlrsj;
	}

	public String getSjzt() {
		return this.sjzt;
	}

	public void setSjzt(String sjzt) {
		this.sjzt = sjzt;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getKsdd() {
		return this.ksdd;
	}

	public void setKsdd(String ksdd) {
		this.ksdd = ksdd;
	}

	public Integer getPscjbl() {
		return this.pscjbl;
	}

	public void setPscjbl(Integer pscjbl) {
		this.pscjbl = pscjbl;
	}

	public Integer getYwpscj() {
		return this.ywpscj;
	}

	public void setYwpscj(Integer ywpscj) {
		this.ywpscj = ywpscj;
	}

}