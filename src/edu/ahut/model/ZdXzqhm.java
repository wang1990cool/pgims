package edu.ahut.model;

/**
 * ZdXzqhm entity. @author MyEclipse Persistence Tools
 */

public class ZdXzqhm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -9062856885744294730L;
	private long id;
	private String xzqhm;
	private String xzqh;
	private String xzqhqc;
	private String scm;
	private long cs;
	private String sfyz;
	private long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdXzqhm() {
	}

	/** minimal constructor */
	public ZdXzqhm(String xzqhm) {
		this.xzqhm = xzqhm;
	}

	/** full constructor */
	public ZdXzqhm(String xzqhm, String xzqh, String xzqhqc, String scm,
			long cs, String sfyz, long pxh, String sfyx, String bz) {
		this.xzqhm = xzqhm;
		this.xzqh = xzqh;
		this.xzqhqc = xzqhqc;
		this.scm = scm;
		this.cs = cs;
		this.sfyz = sfyz;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getXzqhm() {
		return this.xzqhm;
	}

	public void setXzqhm(String xzqhm) {
		this.xzqhm = xzqhm;
	}

	public String getXzqh() {
		return this.xzqh;
	}

	public void setXzqh(String xzqh) {
		this.xzqh = xzqh;
	}

	public String getXzqhqc() {
		return this.xzqhqc;
	}

	public void setXzqhqc(String xzqhqc) {
		this.xzqhqc = xzqhqc;
	}

	public String getScm() {
		return this.scm;
	}

	public void setScm(String scm) {
		this.scm = scm;
	}

	public long getCs() {
		return this.cs;
	}

	public void setCs(long cs) {
		this.cs = cs;
	}

	public String getSfyz() {
		return this.sfyz;
	}

	public void setSfyz(String sfyz) {
		this.sfyz = sfyz;
	}

	public long getPxh() {
		return this.pxh;
	}

	public void setPxh(long pxh) {
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

}