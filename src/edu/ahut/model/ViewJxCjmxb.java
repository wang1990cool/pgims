package edu.ahut.model;



public class ViewJxCjmxb implements java.io.Serializable {


	private static final long serialVersionUID = 7303410802340724044L;
	private Long id;
	private String xh;
	private String xn;
	private String xq;
	private String kkkh;
	private String xm;
	private String ksxzm;
	private String ksxz;
	private Double pscj;
	private Double fslkscj;
	private String kcdjcjm;
	private String djlkscj;
	private Double kccj;

	public ViewJxCjmxb() {
	}

	public ViewJxCjmxb(Long id, String xh, String kkkh) {
		this.id = id;
		this.xh = xh;
		this.kkkh = kkkh;
	}

	public ViewJxCjmxb(Long id, String xh, String xn, String xq,
			String kkkh, String xm, String ksxzm, String ksxz, Double pscj,
			Double fslkscj, String kcdjcjm, String djlkscj, Double kccj) {
		this.id = id;
		this.xh = xh;
		this.xn = xn;
		this.xq = xq;
		this.kkkh = kkkh;
		this.xm = xm;
		this.ksxzm = ksxzm;
		this.ksxz = ksxz;
		this.pscj = pscj;
		this.fslkscj = fslkscj;
		this.kcdjcjm = kcdjcjm;
		this.djlkscj = djlkscj;
		this.kccj = kccj;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
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

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
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

}