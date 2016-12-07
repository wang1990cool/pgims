package edu.ahut.model;

/**
 * ViewYxCw entity. @author MyEclipse Persistence Tools
 */

public class ViewYxCw implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -1336649169320325168L;
//	private String id;
	private String xh;
	private String xm;
	private Double dyxnxf;
	private Double jcf;
	private Double zsf;
	private Double tjf;
	private Double yktf;
	private Double ylbxf;
	private Double hj;
	private Double npaid;
	private Double nowe;

	// Constructors

	/** default constructor */
	public ViewYxCw() {
	}

	/** minimal constructor */
	public ViewYxCw(String xh, Double npaid, Double nowe) {
		this.xh = xh;
		this.npaid = npaid;
		this.nowe = nowe;
	}

	/** full constructor */
	public ViewYxCw(String xh, String xm,Double dyxnxf, Double jcf, Double zsf,
			Double tjf, Double yktf, Double ylbxf, Double hj, Double npaid,
			Double nowe) {
		this.xh = xh;
		this.xm = xm;
		this.dyxnxf = dyxnxf;
		this.jcf = jcf;
		this.zsf = zsf;
		this.tjf = tjf;
		this.yktf = yktf;
		this.ylbxf = ylbxf;
		this.hj = hj;
		this.npaid = npaid;
		this.nowe = nowe;
	}

	// Property accessors

//	public String getId() {
//		return this.id;
//	}
//
//	public void setId(String id) {
//		this.id = id;
//	}

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}
	
	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

	public Double getDyxnxf() {
		return this.dyxnxf;
	}

	public void setDyxnxf(Double dyxnxf) {
		this.dyxnxf = dyxnxf;
	}

	public Double getJcf() {
		return this.jcf;
	}

	public void setJcf(Double jcf) {
		this.jcf = jcf;
	}

	public Double getZsf() {
		return this.zsf;
	}

	public void setZsf(Double zsf) {
		this.zsf = zsf;
	}

	public Double getTjf() {
		return this.tjf;
	}

	public void setTjf(Double tjf) {
		this.tjf = tjf;
	}

	public Double getYktf() {
		return this.yktf;
	}

	public void setYktf(Double yktf) {
		this.yktf = yktf;
	}

	public Double getYlbxf() {
		return this.ylbxf;
	}

	public void setYlbxf(Double ylbxf) {
		this.ylbxf = ylbxf;
	}

	public Double getHj() {
		return this.hj;
	}

	public void setHj(Double hj) {
		this.hj = hj;
	}

	public Double getNpaid() {
		return this.npaid;
	}

	public void setNpaid(Double npaid) {
		this.npaid = npaid;
	}

	public Double getNowe() {
		return this.nowe;
	}

	public void setNowe(Double nowe) {
		this.nowe = nowe;
	}

}