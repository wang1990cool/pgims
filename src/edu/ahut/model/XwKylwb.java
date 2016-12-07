package edu.ahut.model;

import java.util.Date;



/**
 * XwKylwb entity. @author MyEclipse Persistence Tools
 */

public class XwKylwb implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String xn;
	private String xq;
	private String xh;
	private String cglxm;
	private String cglx;
	private String kwjbm;
	private String kwjb;
	private String lwtm;
	private String kwmc;
	private String kwcbh;
	private String fbrq;
	private String nh;
	private String jh;
	private String qh;
	private String qsyh;
	private String lwzz;
	private Long brpm;
	private String fbztm;
	private String fbzt;
	
	private String scibz;
	private String sciqy;
	private String sci;
	private String eibz;
	private String ei;
	private String cpcibz;
	private String cpci;
	private String kyuuid;
	private String lrrgh;
	private String lrr;
	private String lrip;
	private Date lrsj;
	private String shrgh;
	private String shr;
	private Date shsj;
	private String shyj;
	private String ztm;
	private String zt;
	private String bz;
	private String ship;
	
	private String zsrgh;
	private String zsr;
	private Date zssj;
	private String zsyj;
	private String zsip;
	private String shjgm;
	private String shjg;

	// Constructors

	/** default constructor */
	public XwKylwb() {
	}

	/** minimal constructor */
	public XwKylwb(String xn, String xq, String xh, String cglxm, String cglx,
			String kwjbm, String kwjb, String lwtm, String kwmc, String kwcbh,
			String lwzz, Long brpm, String fbztm, String fbzt,
			String kyuuid, String ztm, String zt, String shjgm, String shjg) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.cglxm = cglxm;
		this.cglx = cglx;
		this.kwjbm = kwjbm;
		this.kwjb = kwjb;
		this.lwtm = lwtm;
		this.kwmc = kwmc;
		this.kwcbh = kwcbh;
		this.lwzz = lwzz;
		this.brpm = brpm;
		this.fbztm = fbztm;
		this.fbzt = fbzt;
		this.kyuuid = kyuuid;
		this.ztm = ztm;
		this.zt = zt;
		this.shjgm = shjgm;
		this.shjg = shjg;
	}

	/** full constructor */
	public XwKylwb(String xn, String xq, String xh, String cglxm, String cglx,
			String kwjbm, String kwjb, String lwtm, String kwmc, String kwcbh,
			String fbrq, String nh, String jh, String qh, String qsyh,
			String lwzz, Long brpm, String fbztm, String fbzt, String scibz,
			String sciqy, String sci, String eibz, String ei, String cpcibz,
			String cpci, String kyuuid, String lrrgh, String lrr, String lrip,
			Date lrsj, String shrgh, String shr, Date shsj,
			String shyj, String ztm, String zt, String bz, String ship,
			String zsrgh, String zsr, Date zssj, String zsyj, String zsip,
			String shjgm, String shjg) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.cglxm = cglxm;
		this.cglx = cglx;
		this.kwjbm = kwjbm;
		this.kwjb = kwjb;
		this.lwtm = lwtm;
		this.kwmc = kwmc;
		this.kwcbh = kwcbh;
		this.fbrq = fbrq;
		this.nh = nh;
		this.jh = jh;
		this.qh = qh;
		this.qsyh = qsyh;
		this.lwzz = lwzz;
		this.brpm = brpm;
		this.fbztm = fbztm;
		this.fbzt = fbzt;
		this.scibz = scibz;
		this.sciqy = sciqy;
		this.sci = sci;
		this.eibz = eibz;
		this.ei = ei;
		this.cpcibz = cpcibz;
		this.cpci = cpci;
		this.kyuuid = kyuuid;
		this.lrrgh = lrrgh;
		this.lrr = lrr;
		this.lrip = lrip;
		this.lrsj = lrsj;
		this.shrgh = shrgh;
		this.shr = shr;
		this.shsj = shsj;
		this.shyj = shyj;
		this.ztm = ztm;
		this.zt = zt;
		this.bz = bz;
		this.ship = ship;
		this.zsrgh = zsrgh;
		this.zsr = zsr;
		this.zssj = zssj;
		this.zsyj = zsyj;
		this.zsip = zsip;
		this.shjgm = shjgm;
		this.shjg = shjg;
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

	public String getXh() {
		return this.xh;
	}

	public void setXh(String xh) {
		this.xh = xh;
	}

	public String getCglxm() {
		return this.cglxm;
	}

	public void setCglxm(String cglxm) {
		this.cglxm = cglxm;
	}

	public String getCglx() {
		return this.cglx;
	}

	public void setCglx(String cglx) {
		this.cglx = cglx;
	}

	public String getKwjbm() {
		return this.kwjbm;
	}

	public void setKwjbm(String kwjbm) {
		this.kwjbm = kwjbm;
	}

	public String getKwjb() {
		return this.kwjb;
	}

	public void setKwjb(String kwjb) {
		this.kwjb = kwjb;
	}

	public String getLwtm() {
		return this.lwtm;
	}

	public void setLwtm(String lwtm) {
		this.lwtm = lwtm;
	}

	public String getKwmc() {
		return this.kwmc;
	}

	public void setKwmc(String kwmc) {
		this.kwmc = kwmc;
	}

	public String getKwcbh() {
		return this.kwcbh;
	}

	public void setKwcbh(String kwcbh) {
		this.kwcbh = kwcbh;
	}

	public String getFbrq() {
		return this.fbrq;
	}

	public void setFbrq(String fbrq) {
		this.fbrq = fbrq;
	}

	public String getNh() {
		return this.nh;
	}

	public void setNh(String nh) {
		this.nh = nh;
	}

	public String getJh() {
		return this.jh;
	}

	public void setJh(String jh) {
		this.jh = jh;
	}

	public String getQh() {
		return this.qh;
	}

	public void setQh(String qh) {
		this.qh = qh;
	}

	public String getQsyh() {
		return this.qsyh;
	}

	public void setQsyh(String qsyh) {
		this.qsyh = qsyh;
	}

	public String getLwzz() {
		return this.lwzz;
	}

	public void setLwzz(String lwzz) {
		this.lwzz = lwzz;
	}

	public Long getBrpm() {
		return this.brpm;
	}

	public void setBrpm(Long brpm) {
		this.brpm = brpm;
	}

	public String getFbztm() {
		return this.fbztm;
	}

	public void setFbztm(String fbztm) {
		this.fbztm = fbztm;
	}

	public String getFbzt() {
		return this.fbzt;
	}

	public void setFbzt(String fbzt) {
		this.fbzt = fbzt;
	}

	public String getScibz() {
		return this.scibz;
	}

	public void setScibz(String scibz) {
		this.scibz = scibz;
	}

	public String getSciqy() {
		return this.sciqy;
	}

	public void setSciqy(String sciqy) {
		this.sciqy = sciqy;
	}

	public String getSci() {
		return this.sci;
	}

	public void setSci(String sci) {
		this.sci = sci;
	}

	public String getEibz() {
		return this.eibz;
	}

	public void setEibz(String eibz) {
		this.eibz = eibz;
	}

	public String getEi() {
		return this.ei;
	}

	public void setEi(String ei) {
		this.ei = ei;
	}

	public String getCpcibz() {
		return this.cpcibz;
	}

	public void setCpcibz(String cpcibz) {
		this.cpcibz = cpcibz;
	}

	public String getCpci() {
		return this.cpci;
	}

	public void setCpci(String cpci) {
		this.cpci = cpci;
	}

	public String getKyuuid() {
		return this.kyuuid;
	}

	public void setKyuuid(String kyuuid) {
		this.kyuuid = kyuuid;
	}

	public String getLrrgh() {
		return this.lrrgh;
	}

	public void setLrrgh(String lrrgh) {
		this.lrrgh = lrrgh;
	}

	public String getLrr() {
		return this.lrr;
	}

	public void setLrr(String lrr) {
		this.lrr = lrr;
	}

	public String getLrip() {
		return this.lrip;
	}

	public void setLrip(String lrip) {
		this.lrip = lrip;
	}

	public Date getLrsj() {
		return this.lrsj;
	}

	public void setLrsj(Date lrsj) {
		this.lrsj = lrsj;
	}

	public String getShrgh() {
		return this.shrgh;
	}

	public void setShrgh(String shrgh) {
		this.shrgh = shrgh;
	}

	public String getShr() {
		return this.shr;
	}

	public void setShr(String shr) {
		this.shr = shr;
	}

	public Date getShsj() {
		return this.shsj;
	}

	public void setShsj(Date shsj) {
		this.shsj = shsj;
	}

	public String getShyj() {
		return this.shyj;
	}

	public void setShyj(String shyj) {
		this.shyj = shyj;
	}

	public String getZtm() {
		return this.ztm;
	}

	public void setZtm(String ztm) {
		this.ztm = ztm;
	}

	public String getZt() {
		return this.zt;
	}

	public void setZt(String zt) {
		this.zt = zt;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	public String getShip() {
		return this.ship;
	}

	public void setShip(String ship) {
		this.ship = ship;
	}

	public String getZsrgh() {
		return this.zsrgh;
	}

	public void setZsrgh(String zsrgh) {
		this.zsrgh = zsrgh;
	}

	public String getZsr() {
		return this.zsr;
	}

	public void setZsr(String zsr) {
		this.zsr = zsr;
	}

	public Date getZssj() {
		return this.zssj;
	}

	public void setZssj(Date zssj) {
		this.zssj = zssj;
	}

	public String getZsyj() {
		return this.zsyj;
	}

	public void setZsyj(String zsyj) {
		this.zsyj = zsyj;
	}

	public String getZsip() {
		return this.zsip;
	}

	public void setZsip(String zsip) {
		this.zsip = zsip;
	}

	public String getShjgm() {
		return this.shjgm;
	}

	public void setShjgm(String shjgm) {
		this.shjgm = shjgm;
	}

	public String getShjg() {
		return this.shjg;
	}

	public void setShjg(String shjg) {
		this.shjg = shjg;
	}

}