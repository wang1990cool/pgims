package edu.ahut.model;

/**
 * ViewYxBdqk entity. @author MyEclipse Persistence Tools
 */

public class ViewYxBdqk implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 295917816455271799L;
	private String lqxy;
	private String nj;
	private Double zrs;
	private Double ybdrs;
	private Double wbdrs;
	private Double bdl;

	// Constructors

	/** default constructor */
	public ViewYxBdqk() {
	}

	/** minimal constructor */
	public ViewYxBdqk(String lqxy, String nj) {
		this.lqxy = lqxy;
		this.nj = nj;
	}

	/** full constructor */
	public ViewYxBdqk(String lqxy, String nj, Double zrs, Double ybdrs,
			Double wbdrs,Double bdl) {
		this.lqxy = lqxy;
		this.nj = nj;
		this.zrs = zrs;
		this.ybdrs = ybdrs;
		this.wbdrs = wbdrs;
		this.bdl = bdl;
	}

	// Property accessors


	public String getLqxy() {
		return this.lqxy;
	}

	public void setLqxy(String lqxy) {
		this.lqxy = lqxy;
	}

	public String getNj() {
		return this.nj;
	}

	public void setNj(String nj) {
		this.nj = nj;
	}

	public Double getZrs() {
		return this.zrs;
	}

	public void setZrs(Double zrs) {
		this.zrs = zrs;
	}

	public Double getYbdrs() {
		return this.ybdrs;
	}

	public void setYbdrs(Double ybdrs) {
		this.ybdrs = ybdrs;
	}

	public Double getWbdrs() {
		return this.wbdrs;
	}

	public void setWbdrs(Double wbdrs) {
		this.wbdrs = wbdrs;
	}
	
	public Double getBdl() {
		return bdl;
	}

	public void setBdl(Double bdl) {
		this.bdl = bdl;
	}

}