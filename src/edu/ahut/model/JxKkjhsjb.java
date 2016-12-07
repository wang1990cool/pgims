package edu.ahut.model;


/**
 * JxKkjhsjb entity. @author MyEclipse Persistence Tools
 */

public class JxKkjhsjb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 8981401592182225726L;
	private Long id;
	private String xn;
	private String xq;
	private String bz;
	private String sfyx;

	// Constructors

	/** default constructor */
	public JxKkjhsjb() {
	}

	/** full constructor */
	public JxKkjhsjb(String xn, String xq, String bz, String sfyx) {
		this.xn = xn;
		this.xq = xq;
		this.bz = bz;
		this.sfyx = sfyx;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getXn() {
		return this.xn;
	}

	public void setXn(String xn) {
		this.xn = xn;
	}

	public String getXq() {
		return this.xq;
	}

	public void setXq(String xq) {
		this.xq = xq;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}