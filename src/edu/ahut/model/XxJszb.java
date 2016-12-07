package edu.ahut.model;


/**
 * XxJszb entity. @author MyEclipse Persistence Tools
 */

public class XxJszb implements java.io.Serializable {

	
	private static final long serialVersionUID = 3961396483391222955L;
	private long id;
	private String jsbh;
	private String jsmc;
	private Short lch;
	private String xqh;
	private String jzwh;
	private String jslxm;
	private Short zws;
	private Short yszws;
	private Short kszws;
	private String syxsm;
	private String sydwbh;
	private byte[] jsbjt;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public XxJszb() {
	}

	/** minimal constructor */
	public XxJszb(long id, String jsbh, String jsmc) {
		this.id = id;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
	}

	/** full constructor */
	public XxJszb(long id, String jsbh, String jsmc, Short lch,
			String xqh, String jzwh, String jslxm, Short zws, Short yszws,
			Short kszws, String syxsm, String sydwbh, byte[] jsbjt, Long pxh,
			String sfyx, String bz) {
		this.id = id;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
		this.lch = lch;
		this.xqh = xqh;
		this.jzwh = jzwh;
		this.jslxm = jslxm;
		this.zws = zws;
		this.yszws = yszws;
		this.kszws = kszws;
		this.syxsm = syxsm;
		this.sydwbh = sydwbh;
		this.jsbjt = jsbjt;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
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

	public Short getLch() {
		return this.lch;
	}

	public void setLch(Short lch) {
		this.lch = lch;
	}

	public String getXqh() {
		return this.xqh;
	}

	public void setXqh(String xqh) {
		this.xqh = xqh;
	}

	public String getJzwh() {
		return this.jzwh;
	}

	public void setJzwh(String jzwh) {
		this.jzwh = jzwh;
	}

	public String getJslxm() {
		return this.jslxm;
	}

	public void setJslxm(String jslxm) {
		this.jslxm = jslxm;
	}

	public Short getZws() {
		return this.zws;
	}

	public void setZws(Short zws) {
		this.zws = zws;
	}

	public Short getYszws() {
		return this.yszws;
	}

	public void setYszws(Short yszws) {
		this.yszws = yszws;
	}

	public Short getKszws() {
		return this.kszws;
	}

	public void setKszws(Short kszws) {
		this.kszws = kszws;
	}

	public String getSyxsm() {
		return this.syxsm;
	}

	public void setSyxsm(String syxsm) {
		this.syxsm = syxsm;
	}

	public String getSydwbh() {
		return this.sydwbh;
	}

	public void setSydwbh(String sydwbh) {
		this.sydwbh = sydwbh;
	}

	public byte[] getJsbjt() {
		return this.jsbjt;
	}

	public void setJsbjt(byte[] jsbjt) {
		this.jsbjt = jsbjt;
	}

	public Long getPxh() {
		return this.pxh;
	}

	public void setPxh(Long pxh) {
		this.pxh = pxh;
	}

	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}