package edu.ahut.model;


public class ZdRxfsm implements java.io.Serializable {


	private static final long serialVersionUID = -8304285556016552892L;
	private long id;
	private String rxfsm;
	private String rxfs;
	private long cs;
	private String scm;
	private String sfyz;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdRxfsm() {
	}

	public ZdRxfsm(String rxfsm) {
		this.rxfsm = rxfsm;
	}

	public ZdRxfsm(String rxfsm, String rxfs, long cs, String scm, String sfyz,
			long pxh, String sfyx, String bz) {
		this.rxfsm = rxfsm;
		this.rxfs = rxfs;
		this.cs = cs;
		this.scm = scm;
		this.sfyz = sfyz;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}


	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRxfsm() {
		return this.rxfsm;
	}

	public void setRxfsm(String rxfsm) {
		this.rxfsm = rxfsm;
	}

	public String getRxfs() {
		return this.rxfs;
	}

	public void setRxfs(String rxfs) {
		this.rxfs = rxfs;
	}

	public long getCs() {
		return this.cs;
	}

	public void setCs(long cs) {
		this.cs = cs;
	}

	public String getScm() {
		return this.scm;
	}

	public void setScm(String scm) {
		this.scm = scm;
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