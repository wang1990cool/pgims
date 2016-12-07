package edu.ahut.model;

public class JxPkkzb implements java.io.Serializable {
	private static final long serialVersionUID = -968704582746726570L;

	private Long id;
	private String xn;
	private String xq;
	private Integer xqzs;
	private String bz;

	public JxPkkzb() {
	}

	public JxPkkzb(String xn, String xq, Integer xqzs, String bz) {
		this.xn = xn;
		this.xq = xq;
		this.xqzs = xqzs;
		this.bz = bz;
	}

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

	public Integer getXqzs() {
		return this.xqzs;
	}

	public void setXqzs(Integer xqzs) {
		this.xqzs = xqzs;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}
}