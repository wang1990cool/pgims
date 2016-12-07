package edu.ahut.model;

/**
 * ZdDsztm entity. @author MyEclipse Persistence Tools
 */

public class ZdDsztm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 7233544370282304986L;
	private long id;
	private String dsztm;
	private String dszt;
	private long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdDsztm() {
	}

	/** minimal constructor */
	public ZdDsztm(String dsztm) {
		this.dsztm = dsztm;
	}

	/** full constructor */
	public ZdDsztm(String dsztm, String dszt, long pxh, String sfyx, String bz) {
		this.dsztm = dsztm;
		this.dszt = dszt;
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

	public String getDsztm() {
		return this.dsztm;
	}

	public void setDsztm(String dsztm) {
		this.dsztm = dsztm;
	}

	public String getDszt() {
		return this.dszt;
	}

	public void setDszt(String dszt) {
		this.dszt = dszt;
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