package edu.ahut.model;

/**
 * ViewYxBdqk entity. @author MyEclipse Persistence Tools
 */

public class ViewYxJfqkAll implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 295917816455271799L;
	private String lqxy;
	private String nj;
	private Double zfy;
	private Double yjfy;
	private Double qjfy;
	private Double yjfbl;

	// Constructors

	/** default constructor */
	public ViewYxJfqkAll() {
	}

	/** minimal constructor */
	public ViewYxJfqkAll(String lqxy, String nj) {
		this.lqxy = lqxy;
		this.nj = nj;
	}

	/** full constructor */
	public ViewYxJfqkAll(String lqxy, String nj, Double zfy, Double yjfy,
			Double qjfy,Double yjfbl) {
		this.lqxy = lqxy;
		this.nj = nj;
		this.zfy = zfy;
		this.yjfy = yjfy;
		this.qjfy = qjfy;
		this.yjfbl = yjfbl;
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

	public Double getZfy() {
		return this.zfy;
	}

	public void setZfy(Double zfy) {
		this.zfy = zfy;
	}

	public Double getYjfy() {
		return this.yjfy;
	}

	public void setYjfy(Double yjfy) {
		this.yjfy = yjfy;
	}

	public Double getQjfy() {
		return this.qjfy;
	}

	public void setQjfy(Double qjfy) {
		this.qjfy = qjfy;
	}
	
	public Double getYjfbl() {
		return yjfbl;
	}

	public void setYjfbl(Double yjfbl) {
		this.yjfbl = yjfbl;
	}

}