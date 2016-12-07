package edu.ahut.model;


/**
 * ViewJxCjmx entity. @author MyEclipse Persistence Tools
 */

public class ViewJxCjmx implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 568797867679391959L;
	private long id;
	private String xh;
	private String kkkh;
	private String xn;
	private String xq;
	private String xm;

	// Constructors

	/** default constructor */
	public ViewJxCjmx() {
	}

	/** minimal constructor */
	public ViewJxCjmx(long id, String xh, String kkkh) {
		this.id = id;
		this.xh = xh;
		this.kkkh = kkkh;
	}

	/** full constructor */
	public ViewJxCjmx(long id, String xh, String kkkh, String xn,
			String xq, String xm) {
		this.id = id;
		this.xh = xh;
		this.kkkh = kkkh;
		this.xn = xn;
		this.xq = xq;
		this.xm = xm;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
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

	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

}