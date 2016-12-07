package edu.ahut.model;

/**
 * ZdShztm entity. @author MyEclipse Persistence Tools
 */

public class ZdShztm implements java.io.Serializable {

	private static final long serialVersionUID = -517253704194942616L;
	private Long id;
	private String shztm;
	private String shzt;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdShztm() {
	}

	/** minimal constructor */
	public ZdShztm(String shztm) {
		this.shztm = shztm;
	}

	/** full constructor */
	public ZdShztm(String shztm, String shzt, Long pxh, String sfyx, String bz) {
		this.shztm = shztm;
		this.shzt = shzt;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShztm() {
		return this.shztm;
	}

	public void setShztm(String shztm) {
		this.shztm = shztm;
	}

	public String getShzt() {
		return this.shzt;
	}

	public void setShzt(String shzt) {
		this.shzt = shzt;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
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