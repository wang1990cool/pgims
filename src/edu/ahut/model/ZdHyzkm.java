package edu.ahut.model;

public class ZdHyzkm implements java.io.Serializable {

	private static final long serialVersionUID = -5692813274677214493L;
	private long id;
	private String hyzkm;
	private String hyzk;
	private double pxh;
	private String sfyx;
	private String bz;

	public ZdHyzkm() {
	}

	public ZdHyzkm(String hyzkm) {
		this.hyzkm = hyzkm;
	}

	public ZdHyzkm(String hyzkm, String hyzk, double pxh, String sfyx, String bz) {
		this.hyzkm = hyzkm;
		this.hyzk = hyzk;
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

	public String getHyzkm() {
		return this.hyzkm;
	}

	public void setHyzkm(String hyzkm) {
		this.hyzkm = hyzkm;
	}

	public String getHyzk() {
		return this.hyzk;
	}

	public void setHyzk(String hyzk) {
		this.hyzk = hyzk;
	}

	public double getPxh() {
		return this.pxh;
	}

	public void setPxh(double pxh) {
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