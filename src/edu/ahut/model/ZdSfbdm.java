package edu.ahut.model;


public class ZdSfbdm implements java.io.Serializable {


	private static final long serialVersionUID = -703972726130245944L;
	private long id;
	private String sfbdm;
	private String sfbd;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdSfbdm() {
	}

	public ZdSfbdm(String sfbdm) {
		this.sfbdm = sfbdm;
	}

	public ZdSfbdm(String sfbdm, String sfbd, long pxh, String sfyx, String bz) {
		this.sfbdm = sfbdm;
		this.sfbd = sfbd;
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

	public String getSfbdm() {
		return this.sfbdm;
	}

	public void setSfbdm(String sfbdm) {
		this.sfbdm = sfbdm;
	}

	public String getSfbd() {
		return this.sfbd;
	}

	public void setSfbd(String sfbd) {
		this.sfbd = sfbd;
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