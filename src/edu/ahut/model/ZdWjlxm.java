package edu.ahut.model;

/**
 * ZdWjlxm entity. @author MyEclipse Persistence Tools
 */

public class ZdWjlxm implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2988796427525747201L;

	private long id;
	private String wjlxm;
	private String wjlx;
	private String wjlxfjd;
	private String wjml;
	private long pxh;
	private String sfyx;
	private String bz;
	private String wjlb;

	// Constructors

	/** default constructor */
	public ZdWjlxm() {
	}

	/** full constructor */
	public ZdWjlxm(String wjlxm, String wjlx, String wjlxfjd, String wjml,
			long pxh, String sfyx, String bz, String wjlb) {
		this.wjlxm = wjlxm;
		this.wjlx = wjlx;
		this.wjlxfjd = wjlxfjd;
		this.wjml = wjml;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.wjlb = wjlb;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getWjlxm() {
		return this.wjlxm;
	}

	public void setWjlxm(String wjlxm) {
		this.wjlxm = wjlxm;
	}

	public String getWjlx() {
		return this.wjlx;
	}

	public void setWjlx(String wjlx) {
		this.wjlx = wjlx;
	}

	public String getWjlxfjd() {
		return this.wjlxfjd;
	}

	public void setWjlxfjd(String wjlxfjd) {
		this.wjlxfjd = wjlxfjd;
	}

	public String getWjml() {
		return this.wjml;
	}

	public void setWjml(String wjml) {
		this.wjml = wjml;
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

	public String getWjlb() {
		return this.wjlb;
	}

	public void setWjlb(String wjlb) {
		this.wjlb = wjlb;
	}

}