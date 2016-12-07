package edu.ahut.model;


public class ZdJslxm implements java.io.Serializable {


	private static final long serialVersionUID = -2143973943445889951L;
	private double id;
	private String jslxm;
	private String jslx;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdJslxm() {
	}

	public ZdJslxm(String jslxm) {
		this.jslxm = jslxm;
	}

	public ZdJslxm(String jslxm, String jslx, long pxh, String sfyx, String bz) {
		this.jslxm = jslxm;
		this.jslx = jslx;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}


	public double getId() {
		return this.id;
	}

	public void setId(double id) {
		this.id = id;
	}

	public String getJslxm() {
		return this.jslxm;
	}

	public void setJslxm(String jslxm) {
		this.jslxm = jslxm;
	}

	public String getJslx() {
		return this.jslx;
	}

	public void setJslx(String jslx) {
		this.jslx = jslx;
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