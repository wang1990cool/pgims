package edu.ahut.model;


/**
 * JxCjmxb entity. @author MyEclipse Persistence Tools
 */

public class JxCjmxb implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6600532763760901434L;
	// Fields

	private long id;
	private String kkkh;
	private String xh;
	private String xm;
	private String ksxzm;
	private String ksxz;
	private Double pscj;
	private Double fslkscj;
	private String kcdjcjm;
	private String djlkscj;
	private Double kccj;
	private String bz;

	// Constructors

	/** default constructor */
	public JxCjmxb() {
	}

	/** minimal constructor */
	public JxCjmxb(String kkkh, String xh, String xm) {
		this.kkkh = kkkh;
		this.xh = xh;
		this.xm = xm;
	}

	/** full constructor */
	public JxCjmxb(String kkkh, String xh, String xm, String ksxzm,
			String ksxz, Double pscj, Double fdlkscj, String kcdjcjm,
			String djlkscj, Double kccj, String bz) {
		this.kkkh = kkkh;
		this.xh = xh;
		this.xm = xm;
		this.ksxzm = ksxzm;
		this.ksxz = ksxz;
		this.pscj = pscj;
		this.fslkscj = fslkscj;
		this.kcdjcjm = kcdjcjm;
		this.djlkscj = djlkscj;
		this.kccj = kccj;
		this.bz = bz;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

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

	public String getKsxzm() {
		return this.ksxzm;
	}

	public void setKsxzm(String ksxzm) {
		this.ksxzm = ksxzm;
	}

	public String getKsxz() {
		return this.ksxz;
	}

	public void setKsxz(String ksxz) {
		this.ksxz = ksxz;
	}

	public Double getPscj() {
		return this.pscj;
	}

	public void setPscj(Double pscj) {
		this.pscj = pscj;
	}

	public Double getFslkscj() {
		return this.fslkscj;
	}

	public void setFslkscj(Double fslkscj) {
		this.fslkscj = fslkscj;
	}

	public String getKcdjcjm() {
		return this.kcdjcjm;
	}

	public void setKcdjcjm(String kcdjcjm) {
		this.kcdjcjm = kcdjcjm;
	}

	public String getDjlkscj() {
		return this.djlkscj;
	}

	public void setDjlkscj(String djlkscj) {
		this.djlkscj = djlkscj;
	}

	public Double getKccj() {
		return this.kccj;
	}

	public void setKccj(Double kccj) {
		this.kccj = kccj;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}