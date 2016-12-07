package edu.ahut.model;

/**
 * ZdZllxm entity. @author MyEclipse Persistence Tools
 */

public class ZdZllxm implements java.io.Serializable {

	private static final long serialVersionUID = -4889368255109414660L;
	private long id;
	private String zllxm;
	private String zllx;
	private String zllxfjd;
	private String zlwjml;
	private long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdZllxm() {
	}

	/** full constructor */
	public ZdZllxm(String zllxm, String zllx, String zllxfjd, String zlwjml,
			long pxh, String sfyx, String bz) {
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.zllxfjd = zllxfjd;
		this.zlwjml = zlwjml;
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

	public String getZllxm() {
		return this.zllxm;
	}

	public void setZllxm(String zllxm) {
		this.zllxm = zllxm;
	}

	public String getZllx() {
		return this.zllx;
	}

	public void setZllx(String zllx) {
		this.zllx = zllx;
	}

	public String getZllxfjd() {
		return this.zllxfjd;
	}

	public void setZllxfjd(String zllxfjd) {
		this.zllxfjd = zllxfjd;
	}

	public String getZlwjml() {
		return this.zlwjml;
	}

	public void setZlwjml(String zlwjml) {
		this.zlwjml = zlwjml;
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