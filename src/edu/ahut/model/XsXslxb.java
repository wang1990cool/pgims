package edu.ahut.model;

/**
 * XsXslxb entity. @author MyEclipse Persistence Tools
 */

public class XsXslxb implements java.io.Serializable {

	
	private static final long serialVersionUID = 3980480973677401109L;
	private long id;
	private String xslxm;
	private String xslx;
	private String pyccm;
	private String pycc;
	private String jylbm;
	private String jylb;
	private String xwlxm;
	private String xwlx;
	private String sfyx;

	// Constructors

	/** default constructor */
	public XsXslxb() {
	}

	/** minimal constructor */
	public XsXslxb(long id, String xslxm) {
		this.id = id;
		this.xslxm = xslxm;
	}

	/** full constructor */
	public XsXslxb(long id, String xslxm, String xslx, String pyccm,
			String pycc, String jylbm, String jylb, String xwlxm, String xwlx,
			String sfyx) {
		this.id = id;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.pyccm = pyccm;
		this.pycc = pycc;
		this.jylbm = jylbm;
		this.jylb = jylb;
		this.xwlxm = xwlxm;
		this.xwlx = xwlx;
		this.sfyx = sfyx;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
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

	public String getPyccm() {
		return this.pyccm;
	}

	public void setPyccm(String pyccm) {
		this.pyccm = pyccm;
	}

	public String getPycc() {
		return this.pycc;
	}

	public void setPycc(String pycc) {
		this.pycc = pycc;
	}

	public String getJylbm() {
		return this.jylbm;
	}

	public void setJylbm(String jylbm) {
		this.jylbm = jylbm;
	}

	public String getJylb() {
		return this.jylb;
	}

	public void setJylb(String jylb) {
		this.jylb = jylb;
	}

	public String getXwlxm() {
		return this.xwlxm;
	}

	public void setXwlxm(String xwlxm) {
		this.xwlxm = xwlxm;
	}

	public String getXwlx() {
		return this.xwlx;
	}

	public void setXwlx(String xwlx) {
		this.xwlx = xwlx;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}