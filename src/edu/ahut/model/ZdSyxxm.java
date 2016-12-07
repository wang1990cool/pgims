package edu.ahut.model;

/**
 * ZdSyxxm entity. @author MyEclipse Persistence Tools
 */

public class ZdSyxxm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -2431563316398766727L;
	private long id;
	private String syxxm;
	private String syxx;
	private long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdSyxxm() {
	}

	/** full constructor */
	public ZdSyxxm(String syxxm, String syxx, long pxh, String sfyx, String bz) {
		this.syxxm = syxxm;
		this.syxx = syxx;
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

	public String getSyxxm() {
		return this.syxxm;
	}

	public void setSyxxm(String syxxm) {
		this.syxxm = syxxm;
	}

	public String getSyxx() {
		return this.syxx;
	}

	public void setSyxx(String syxx) {
		this.syxx = syxx;
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