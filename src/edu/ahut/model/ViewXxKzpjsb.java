package edu.ahut.model;


/**
 * ViewXxKzpjsb entity. @author MyEclipse Persistence Tools
 */

public class ViewXxKzpjsb implements java.io.Serializable {
	private static final long serialVersionUID = -8891861595362638420L;
	private Long id;
	private String xn;
	private String xq;
	private String jsbh;
	private String jsmc;
	private String sydwbh;
	private String sydwmc;
	private Long pxh;
	private String bz;
	private String sfyx;

	// Constructors

	/** default constructor */
	public ViewXxKzpjsb() {
	}

	/** minimal constructor */
	public ViewXxKzpjsb(Long id, String xn, String xq, String jsbh,
			String jsmc, String sfyx) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
		this.sfyx = sfyx;
	}

	/** full constructor */
	public ViewXxKzpjsb(Long id, String xn, String xq, String jsbh,
			String jsmc, String sydwbh, String sydwmc, Long pxh, String bz,
			String sfyx) {
		this.id = id;
		this.xn = xn;
		this.xq = xq;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
		this.sydwbh = sydwbh;
		this.sydwmc = sydwmc;
		this.pxh = pxh;
		this.bz = bz;
		this.sfyx = sfyx;
	}

	// Property accessors

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

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}