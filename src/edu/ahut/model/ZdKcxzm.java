package edu.ahut.model;

/**
 * ZdKcxzm entity. @author MyEclipse Persistence Tools
 */

public class ZdKcxzm implements java.io.Serializable {

	private static final long serialVersionUID = 1736718565571541812L;
	private Long id;
	private String kcxzm;
	private String kcxz;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKcxzm() {
	}

	/** minimal constructor */
	public ZdKcxzm(String kcxzm) {
		this.kcxzm = kcxzm;
	}

	/** full constructor */
	public ZdKcxzm(String kcxzm, String kcxz, Long pxh, String sfyx, String bz) {
		this.kcxzm = kcxzm;
		this.kcxz = kcxz;
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

	public String getKcxzm() {
		return this.kcxzm;
	}

	public void setKcxzm(String kcxzm) {
		this.kcxzm = kcxzm;
	}

	public String getKcxz() {
		return this.kcxz;
	}

	public void setKcxz(String kcxz) {
		this.kcxz = kcxz;
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