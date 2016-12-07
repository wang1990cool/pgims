package edu.ahut.model;


public class XxKzpjsb implements java.io.Serializable {

	private static final long serialVersionUID = 3728082615703726601L;
	private long id;
	private String xn;
	private String xq;
	private String jsbh;
	private String jsmc;
	private String sydwbh;
	private String sydwmc;
	private Long pxh;
	private String bz;

	// Constructors

	/** default constructor */
	public XxKzpjsb() {
	}

	/** minimal constructor */
	public XxKzpjsb(long id, String xn, String xq, String jsbh,
			String jsmc) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
	}

	/** full constructor */
	public XxKzpjsb(long id, String xn, String xq, String jsbh,
			String jsmc, String sydwbh, String sydwmc, Long pxh, String bz) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
		this.sydwbh = sydwbh;
		this.sydwmc = sydwmc;
		this.pxh = pxh;
		this.bz = bz;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
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

	public String getJsbh() {
		return this.jsbh;
	}

	public void setJsbh(String jsbh) {
		this.jsbh = jsbh;
	}

	public String getJsmc() {
		return this.jsmc;
	}

	public void setJsmc(String jsmc) {
		this.jsmc = jsmc;
	}

	public String getSydwbh() {
		return this.sydwbh;
	}

	public void setSydwbh(String sydwbh) {
		this.sydwbh = sydwbh;
	}

	public String getSydwmc() {
		return this.sydwmc;
	}

	public void setSydwmc(String sydwmc) {
		this.sydwmc = sydwmc;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
		this.pxh = pxh;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}