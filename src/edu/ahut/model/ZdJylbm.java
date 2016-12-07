package edu.ahut.model;


public class ZdJylbm implements java.io.Serializable {


	private static final long serialVersionUID = -6650391818469381664L;
	private long id;
	private String jylbm;
	private String jylb;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdJylbm() {
	}

	public ZdJylbm(String jylbm) {
		this.jylbm = jylbm;
	}

	public ZdJylbm(String jylbm, String jylb, long pxh, String sfyx, String bz) {
		this.jylbm = jylbm;
		this.jylb = jylb;
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

	public String getJylbm() {
		return this.jylbm;
	}

	public void setJylbm(String jylbm) {
		this.jylbm = jylbm;
	}

	public String getJylb() {
		return this.jylb;
	}

	public void setJylb(String jylb) {
		this.jylb = jylb;
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