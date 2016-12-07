package edu.ahut.model;

/**
 * ZdXwm entity. @author MyEclipse Persistence Tools
 */

public class ZdXwm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 4564240987826080603L;
	private double id;
	private String xwm;
	private String xw;
	private double pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdXwm() {
	}

	/** full constructor */
	public ZdXwm(String xwm, String xw, double pxh, String sfyx, String bz) {
		this.xwm = xwm;
		this.xw = xw;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}

	// Property accessors

	public double getId() {
		return this.id;
	}

	public void setId(double id) {
		this.id = id;
	}

	public String getXwm() {
		return this.xwm;
	}

	public void setXwm(String xwm) {
		this.xwm = xwm;
	}

	public String getXw() {
		return this.xw;
	}

	public void setXw(String xw) {
		this.xw = xw;
	}

	public double getPxh() {
		return this.pxh;
	}

	public void setPxh(double pxh) {
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