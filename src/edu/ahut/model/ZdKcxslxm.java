package edu.ahut.model;

/**
 * ZdKcxslxm entity. @author MyEclipse Persistence Tools
 */

public class ZdKcxslxm implements java.io.Serializable {

	private static final long serialVersionUID = -2033948742513757868L;
	private Long id;
	private String xslxm;
	private String xslx;
	private Integer pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKcxslxm() {
	}

	/** minimal constructor */
	public ZdKcxslxm(Long id, String xslxm) {
		this.id = id;
		this.xslxm = xslxm;
	}

	/** full constructor */
	public ZdKcxslxm(Long id, String xslxm, String xslx, Integer pxh,
			String sfyx, String bz) {
		this.id = id;
		this.xslxm = xslxm;
		this.xslx = xslx;
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

	public String getXslxm() {
		return this.xslxm;
	}

	public void setXslxm(String xslxm) {
		this.xslxm = xslxm;
	}

	public String getXslx() {
		return this.xslx;
	}

	public void setXslx(String xslx) {
		this.xslx = xslx;
	}

	public Integer getPxh() {
		return this.pxh;
	}

	public void setPxh(Integer pxh) {
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