package edu.ahut.model;

import java.math.BigDecimal;

/**
 * ViewJxCjlr entity. @author MyEclipse Persistence Tools
 */

public class ViewJxCjlr implements java.io.Serializable {

	// Fields

	private BigDecimal id;
	private String kch;
	private String kkkh;
	private Double kcxf;
	private String xn;
	private String xq;
	private String kcmc;
	private String zjjs;
	private String zjjsh;
	private String kkdwh;

	// Constructors

	/** default constructor */
	public ViewJxCjlr() {
	}

	/** minimal constructor */
	public ViewJxCjlr(String kch, String kkkh, String xn, String xq) {
		this.kch = kch;
		this.kkkh = kkkh;
		this.xn = xn;
		this.xq = xq;
	}

	/** full constructor */
	public ViewJxCjlr(String kch, String kkkh, Double kcxf, String xn,
			String xq, String kcmc, String zjjs, String zjjsh,String kkdwh) {
		this.kch = kch;
		this.kkkh = kkkh;
		this.kcxf = kcxf;
		this.xn = xn;
		this.xq = xq;
		this.kcmc = kcmc;
		this.zjjs = zjjs;
		this.zjjsh = zjjsh;
		this.kkdwh = kkdwh;
	}

	// Property accessors

	public BigDecimal getId() {
		return this.id;
	}

	public void setId(BigDecimal id) {
		this.id = id;
	}
	
	public String getKkdwh() {
		return kkdwh;
	}

	public void setKkdwh(String kkdwh) {
		this.kkdwh = kkdwh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public Double getKcxf() {
		return this.kcxf;
	}

	public void setKcxf(Double kcxf) {
		this.kcxf = kcxf;
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

	public String getKcmc() {
		return this.kcmc;
	}

	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}

	public String getZjjs() {
		return this.zjjs;
	}

	public void setZjjs(String zjjs) {
		this.zjjs = zjjs;
	}

	public String getZjjsh() {
		return this.zjjsh;
	}

	public void setZjjsh(String zjjsh) {
		this.zjjsh = zjjsh;
	}

}