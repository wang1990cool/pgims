package edu.ahut.model;


public class ZdJzwytm implements java.io.Serializable {


	private static final long serialVersionUID = -1834679739845889656L;
	private long id;
	private String jzwytm;
	private String jzwyt;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdJzwytm() {
	}

	public ZdJzwytm(String jzwytm) {
		this.jzwytm = jzwytm;
	}

	public ZdJzwytm(String jzwytm, String jzwyt, long pxh, String sfyx,
			String bz) {
		this.jzwytm = jzwytm;
		this.jzwyt = jzwyt;
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

	public String getJzwytm() {
		return this.jzwytm;
	}

	public void setJzwytm(String jzwytm) {
		this.jzwytm = jzwytm;
	}

	public String getJzwyt() {
		return this.jzwyt;
	}

	public void setJzwyt(String jzwyt) {
		this.jzwyt = jzwyt;
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