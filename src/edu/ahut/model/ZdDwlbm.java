package edu.ahut.model;

public class ZdDwlbm implements java.io.Serializable {

	private static final long serialVersionUID = 59870401517558309L;
	private long id;
	private String dwlbm;
	private String dwlb;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdDwlbm() {
	}

	public ZdDwlbm(String dwlbm) {
		this.dwlbm = dwlbm;
	}

	public ZdDwlbm(String dwlbm, String dwlb, long pxh, String sfyx, String bz) {
		this.dwlbm = dwlbm;
		this.dwlb = dwlb;
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

	public String getDwlbm() {
		return this.dwlbm;
	}

	public void setDwlbm(String dwlbm) {
		this.dwlbm = dwlbm;
	}

	public String getDwlb() {
		return this.dwlb;
	}

	public void setDwlb(String dwlb) {
		this.dwlb = dwlb;
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