package edu.ahut.model;

/**
 * JxSkjhb entity. @author MyEclipse Persistence Tools
 */

public class JxSkjhb implements java.io.Serializable {

	private static final long serialVersionUID = -9222288512750360009L;
	private Long id;
	private String kkkh;
	private String kkjhh;
	private String kch;
	private String xn;
	private String xq;

	// Constructors

	/** default constructor */
	public JxSkjhb() {
	}

	/** full constructor */
	public JxSkjhb(String kkkh, String kkjhh, String kch, String xn, String xq) {
		this.kkkh = kkkh;
		this.kkjhh = kkjhh;
		this.kch = kch;
		this.xn = xn;
		this.xq = xq;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public String getKkjhh() {
		return this.kkjhh;
	}

	public void setKkjhh(String kkjhh) {
		this.kkjhh = kkjhh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
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

}