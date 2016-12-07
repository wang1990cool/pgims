package edu.ahut.model;

import java.util.Date;

/**
 * XwKyzlb entity. @author MyEclipse Persistence Tools
 */

public class XwKyzlb implements java.io.Serializable {

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
	private String kyuuid;
	
	private String fmlxm;
	private String fmlx;
	private String zlmc;
	private String fmr;
	private Long brpm;
	private String sqr;
	private String sqh;
	private String sqggr;
	private String zlfbztm;
	private String zlfbzt;
	
	private String lrrgh;
	private String lrr;
	private String lrip;
	private Date lrsj;
	private String ztm;
	private String zt;
	private String bz;
	private String shrgh;
	private String shr;
	private Date shsj;
	private String shyj;
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
	public XwKyzlb() {
	}

	/** minimal constructor */
	public XwKyzlb(String xn, String xq, String xh, String cglxm, String cglx,
			String kyuuid, String zlmc, String fmr, Long brpm, String sqr,
			String sqh, String zlfbztm, String zlfbzt, String ztm, String zt) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.cglxm = cglxm;
		this.cglx = cglx;
		this.kyuuid = kyuuid;
		this.zlmc = zlmc;
		this.fmr = fmr;
		this.brpm = brpm;
		this.sqr = sqr;
		this.sqh = sqh;
		this.zlfbztm = zlfbztm;
		this.zlfbzt = zlfbzt;
		this.ztm = ztm;
		this.zt = zt;
	}

	/** full constructor */
	public XwKyzlb(String xn, String xq, String xh, String cglxm, String cglx,
			String kyuuid, String fmlxm, String fmlx, String zlmc, String fmr,
			Long brpm, String sqr, String sqh, String sqggr, String zlfbztm,
			String zlfbzt, String lrrgh, String lrr, String lrip,
			Date lrsj, String ztm, String zt, String bz, String shrgh,
			String shr, Date shsj, String shyj, String ship, String zsrgh,
			String zsr, Date zssj, String zsyj, String zsip, String shjgm,
			String shjg) {
		this.xn = xn;
		this.xq = xq;
		this.xh = xh;
		this.cglxm = cglxm;
		this.cglx = cglx;
		this.kyuuid = kyuuid;
		this.fmlxm = fmlxm;
		this.fmlx = fmlx;
		this.zlmc = zlmc;
		this.fmr = fmr;
		this.brpm = brpm;
		this.sqr = sqr;
		this.sqh = sqh;
		this.sqggr = sqggr;
		this.zlfbztm = zlfbztm;
		this.zlfbzt = zlfbzt;
		this.lrrgh = lrrgh;
		this.lrr = lrr;
		this.lrip = lrip;
		this.lrsj = lrsj;
		this.ztm = ztm;
		this.zt = zt;
		this.bz = bz;
		this.shrgh = shrgh;
		this.shr = shr;
		this.shsj = shsj;
		this.shyj = shyj;
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

	public String getKyuuid() {
		return this.kyuuid;
	}

	public void setKyuuid(String kyuuid) {
		this.kyuuid = kyuuid;
	}

	public String getFmlxm() {
		return this.fmlxm;
	}

	public void setFmlxm(String fmlxm) {
		this.fmlxm = fmlxm;
	}

	public String getFmlx() {
		return this.fmlx;
	}

	public void setFmlx(String fmlx) {
		this.fmlx = fmlx;
	}

	public String getZlmc() {
		return this.zlmc;
	}

	public void setZlmc(String zlmc) {
		this.zlmc = zlmc;
	}

	public String getFmr() {
		return this.fmr;
	}

	public void setFmr(String fmr) {
		this.fmr = fmr;
	}

	public Long getBrpm() {
		return this.brpm;
	}

	public void setBrpm(Long brpm) {
		this.brpm = brpm;
	}

	public String getSqr() {
		return this.sqr;
	}

	public void setSqr(String sqr) {
		this.sqr = sqr;
	}

	public String getSqh() {
		return this.sqh;
	}

	public void setSqh(String sqh) {
		this.sqh = sqh;
	}

	public String getSqggr() {
		return this.sqggr;
	}

	public void setSqggr(String sqggr) {
		this.sqggr = sqggr;
	}

	public String getZlfbztm() {
		return this.zlfbztm;
	}

	public void setZlfbztm(String zlfbztm) {
		this.zlfbztm = zlfbztm;
	}

	public String getZlfbzt() {
		return this.zlfbzt;
	}

	public void setZlfbzt(String zlfbzt) {
		this.zlfbzt = zlfbzt;
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