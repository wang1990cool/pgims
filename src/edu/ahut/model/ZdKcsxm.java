package edu.ahut.model;

/**
 * ZdKcsxm entity. @author MyEclipse Persistence Tools
 */

public class ZdKcsxm implements java.io.Serializable {

	private static final long serialVersionUID = -104945282407764289L;
	private Long id;
	private String kcsxm;
	private String kcsx;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKcsxm() {
	}

	/** full constructor */
	public ZdKcsxm(String kcsxm, String kcsx, Long pxh, String sfyx, String bz) {
		this.kcsxm = kcsxm;
		this.kcsx = kcsx;
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

	public String getKcsxm() {
		return this.kcsxm;
	}

	public void setKcsxm(String kcsxm) {
		this.kcsxm = kcsxm;
	}

	public String getKcsx() {
		return this.kcsx;
	}

	public void setKcsx(String kcsx) {
		this.kcsx = kcsx;
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