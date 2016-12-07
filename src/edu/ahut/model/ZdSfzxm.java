package edu.ahut.model;

/**
 * ZdSfzxm entity. @author MyEclipse Persistence Tools
 */

public class ZdSfzxm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -3570813369112553185L;
	private long id;
	private String sfzxm;
	private String sfzx;
	private long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdSfzxm() {
	}

	/** minimal constructor */
	public ZdSfzxm(String sfzxm) {
		this.sfzxm = sfzxm;
	}

	/** full constructor */
	public ZdSfzxm(String sfzxm, String sfzx, long pxh, String sfyx, String bz) {
		this.sfzxm = sfzxm;
		this.sfzx = sfzx;
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

	public String getSfzxm() {
		return this.sfzxm;
	}

	public void setSfzxm(String sfzxm) {
		this.sfzxm = sfzxm;
	}

	public String getSfzx() {
		return this.sfzx;
	}

	public void setSfzx(String sfzx) {
		this.sfzx = sfzx;
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