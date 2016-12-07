package edu.ahut.model;


public class ZdSfzjlxm implements java.io.Serializable {


	private static final long serialVersionUID = 4637118826247228817L;
	private long id;
	private String sfzjlxm;
	private String sfzjlx;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdSfzjlxm() {
	}

	public ZdSfzjlxm(String sfzjlxm) {
		this.sfzjlxm = sfzjlxm;
	}

	public ZdSfzjlxm(String sfzjlxm, String sfzjlx, long pxh, String sfyx,
			String bz) {
		this.sfzjlxm = sfzjlxm;
		this.sfzjlx = sfzjlx;
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

	public String getSfzjlxm() {
		return this.sfzjlxm;
	}

	public void setSfzjlxm(String sfzjlxm) {
		this.sfzjlxm = sfzjlxm;
	}

	public String getSfzjlx() {
		return this.sfzjlx;
	}

	public void setSfzjlx(String sfzjlx) {
		this.sfzjlx = sfzjlx;
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