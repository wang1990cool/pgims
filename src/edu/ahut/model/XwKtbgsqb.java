package edu.ahut.model;

import java.util.Date;

/**
 * XsJcxxb entity. @author MyEclipse Persistence Tools
 */

public class XwKtbgsqb implements java.io.Serializable {

	
	private static final long serialVersionUID = 1796747696226589136L;
	private Long id;
	private String xh;
	private String xm;
	private String lwtm;
	private String lwjj;
	private String jhktrq;
	private String jhktsj;
	private String jhktdd;
//	private String dsgh;
//	private String dsxm;
	private String shzt;
	private String shztm;
	private String shyj;
	private Date shsj;
	private String shr;
	private String shrgh;
	
	
	public XwKtbgsqb() {
	}
	public XwKtbgsqb(Long id, String xh, String xm, String lwtm, String lwjj,
			String jhktrq, String jhktsj, String jhktdd,String shzt,String shztm,
			String shyj, Date shsj, String shr,String shrgh) {
		super();
		this.id = id;
		this.xh = xh;
		this.xm = xm;
		this.lwtm = lwtm;
		this.lwjj = lwjj;
		this.jhktrq = jhktrq;
		this.jhktsj = jhktsj;
		this.jhktdd = jhktdd;
		this.shzt = shzt;
		this.shztm = shztm;
		this.shyj = shyj;
		this.shsj = shsj;
		this.shr = shr;
		this.shr = shrgh;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getXh() {
		return xh;
	}
	public void setXh(String xh) {
		this.xh = xh;
	}
	public String getXm() {
		return xm;
	}
	public void setXm(String xm) {
		this.xm = xm;
	}
	public String getLwtm() {
		return lwtm;
	}
	public void setLwtm(String lwtm) {
		this.lwtm = lwtm;
	}
	public String getLwjj() {
		return lwjj;
	}
	public void setLwjj(String lwjj) {
		this.lwjj = lwjj;
	}
	public String getJhktrq() {
		return jhktrq;
	}
	public void setJhktrq(String jhktrq) {
		this.jhktrq = jhktrq;
	}
	public String getJhktsj() {
		return jhktsj;
	}
	public void setJhktsj(String jhktsj) {
		this.jhktsj = jhktsj;
	}
	public String getJhktdd() {
		return jhktdd;
	}
	public void setJhktdd(String jhktdd) {
		this.jhktdd = jhktdd;
	}
	public String getShzt() {
		return shzt;
	}
	public void setShzt(String shzt) {
		this.shzt = shzt;
	}
	public String getShztm() {
		return shztm;
	}
	public void setShztm(String shztm) {
		this.shztm = shztm;
	}
	public String getShyj() {
		return shyj;
	}
	public void setShyj(String shyj) {
		this.shyj = shyj;
	}
	public Date getShsj() {
		return shsj;
	}
	public void setShsj(Date shsj) {
		this.shsj = shsj;
	}
	public String getShr() {
		return shr;
	}
	public void setShr(String shr) {
		this.shr = shr;
	}
	public String getShrgh() {
		return shrgh;
	}
	public void setShrgh(String shrgh) {
		this.shrgh = shrgh;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}