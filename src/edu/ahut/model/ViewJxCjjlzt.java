package edu.ahut.model;



public class ViewJxCjjlzt implements java.io.Serializable {


	private static final long serialVersionUID = 4325341146329432477L;
	private Long id;
	private String kch;
	private String kkkh;
	private Double kcxf;
	private String xn;
	private String xq;
	private String kcmc;
	private String zjjs;
	private String zjjsh;
	private String sjzt;
	private String kkdwh;

	public ViewJxCjjlzt() {
	}

	public ViewJxCjjlzt(Long id, String kch, String kkkh, String xn,
			String xq) {
		this.id = id;
		this.kch = kch;
		this.kkkh = kkkh;
		this.xn = xn;
		this.xq = xq;
	}

	/** full constructor */
	public ViewJxCjjlzt(Long id, String kch, String kkkh, Double kcxf,
			String xn, String xq, String kcmc, String zjjs, String zjjsh,
			String sjzt,String kkdwh) {
		this.id = id;
		this.kch = kch;
		this.kkkh = kkkh;
		this.kcxf = kcxf;
		this.xn = xn;
		this.xq = xq;
		this.kcmc = kcmc;
		this.zjjs = zjjs;
		this.zjjsh = zjjsh;
		this.sjzt = sjzt;
		this.kkdwh = kkdwh;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getKkdwh() {
		return kkdwh;
	}

	public void setKkdwh(String kkdwh) {
		this.kkdwh = kkdwh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public Double getKcxf() {
		return this.kcxf;
	}

	public void setKcxf(Double kcxf) {
		this.kcxf = kcxf;
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

	public String getKcmc() {
		return this.kcmc;
	}

	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}

	public String getZjjs() {
		return this.zjjs;
	}

	public void setZjjs(String zjjs) {
		this.zjjs = zjjs;
	}

	public String getZjjsh() {
		return this.zjjsh;
	}

	public void setZjjsh(String zjjsh) {
		this.zjjsh = zjjsh;
	}

	public String getSjzt() {
		return this.sjzt;
	}

	public void setSjzt(String sjzt) {
		this.sjzt = sjzt;
	}

}