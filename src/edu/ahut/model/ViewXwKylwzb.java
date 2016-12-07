package edu.ahut.model;

import java.util.Date;

/**
 * ViewXwKylwzb entity. @author MyEclipse Persistence Tools
 */

public class ViewXwKylwzb implements java.io.Serializable {

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
	private String zllxm;
	private String zllx;
	private String zlwj;
	private String zlwjmc;
	
	private String zlwjdz;
	private Date zlscsj;
	private String zlscr;
	private String zlscip;
	private String zttm;
	
	private String ztt;
	private String xm;
	private String xslxm;
	private String xslx;
	private String sznj;
	
	private String fyh;
	private String fymc;
	private String zydm;
	private String zymc;
	private String xwlbm;
	
	private String xwlb;
	private String dsh;
	private String dsxm;
	private String pyccm;
	private String pycc;
	
	private String shjgm;
	private String shjg;

	// Constructors

	/** default constructor */
	public ViewXwKylwzb() {
	}

	/** minimal constructor */
	public ViewXwKylwzb(String xn, String xq, String xh, String cglxm,
			String cglx, String kwjbm, String kwjb, String lwtm, String kwmc,
			String kwcbh, String lwzz, Long brpm, String fbztm, String fbzt,
			String kyuuid, String ztm, String zt, String zllxm, String zllx,
			String zlwj, String shjgm, String shjg) {
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
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.zlwj = zlwj;
		this.shjgm = shjgm;
		this.shjg = shjg;
	}

	/** full constructor */
	public ViewXwKylwzb(String xn, String xq, String xh, String cglxm,
			String cglx, String kwjbm, String kwjb, String lwtm, String kwmc,
			String kwcbh, String fbrq, String nh, String jh, String qh,
			String qsyh, String lwzz, Long brpm, String fbztm, String fbzt,
			String scibz, String sciqy, String sci, String eibz, String ei,
			String cpcibz, String cpci, String kyuuid, String lrrgh,
			String lrr, String lrip, Date lrsj, String shrgh, String shr,
			Date shsj, String shyj, String ztm, String zt, String bz,
			String ship, String zsrgh, String zsr, Date zssj, String zsyj,
			String zsip, String zllxm, String zllx, String zlwj, String zlwjmc,
			String zlwjdz, Date zlscsj, String zlscr, String zlscip,
			String zttm, String ztt, String xm, String xslxm, String xslx,
			String sznj, String fyh, String fymc, String zydm, String zymc,
			String xwlbm, String xwlb, String dsh, String dsxm, String pyccm,
			String pycc, String shjgm, String shjg) {
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
		this.zllxm = zllxm;
		this.zllx = zllx;
		this.zlwj = zlwj;
		this.zlwjmc = zlwjmc;
		this.zlwjdz = zlwjdz;
		this.zlscsj = zlscsj;
		this.zlscr = zlscr;
		this.zlscip = zlscip;
		this.zttm = zttm;
		this.ztt = ztt;
		this.xm = xm;
		this.xslxm = xslxm;
		this.xslx = xslx;
		this.sznj = sznj;
		this.fyh = fyh;
		this.fymc = fymc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.xwlbm = xwlbm;
		this.xwlb = xwlb;
		this.dsh = dsh;
		this.dsxm = dsxm;
		this.pyccm = pyccm;
		this.pycc = pycc;
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

	public String getZllxm() {
		return this.zllxm;
	}

	public void setZllxm(String zllxm) {
		this.zllxm = zllxm;
	}

	public String getZllx() {
		return this.zllx;
	}

	public void setZllx(String zllx) {
		this.zllx = zllx;
	}

	public String getZlwj() {
		return this.zlwj;
	}

	public void setZlwj(String zlwj) {
		this.zlwj = zlwj;
	}

	public String getZlwjmc() {
		return this.zlwjmc;
	}

	public void setZlwjmc(String zlwjmc) {
		this.zlwjmc = zlwjmc;
	}

	public String getZlwjdz() {
		return this.zlwjdz;
	}

	public void setZlwjdz(String zlwjdz) {
		this.zlwjdz = zlwjdz;
	}

	public Date getZlscsj() {
		return this.zlscsj;
	}

	public void setZlscsj(Date zlscsj) {
		this.zlscsj = zlscsj;
	}

	public String getZlscr() {
		return this.zlscr;
	}

	public void setZlscr(String zlscr) {
		this.zlscr = zlscr;
	}

	public String getZlscip() {
		return this.zlscip;
	}

	public void setZlscip(String zlscip) {
		this.zlscip = zlscip;
	}

	public String getZttm() {
		return this.zttm;
	}

	public void setZttm(String zttm) {
		this.zttm = zttm;
	}

	public String getZtt() {
		return this.ztt;
	}

	public void setZtt(String ztt) {
		this.ztt = ztt;
	}

	public String getXm() {
		return this.xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

	public String getXslxm() {
		return this.xslxm;
	}

	public void setXslxm(String xslxm) {
		this.xslxm = xslxm;
	}

	public String getXslx() {
		return this.xslx;
	}

	public void setXslx(String xslx) {
		this.xslx = xslx;
	}

	public String getSznj() {
		return this.sznj;
	}

	public void setSznj(String sznj) {
		this.sznj = sznj;
	}

	public String getFyh() {
		return this.fyh;
	}

	public void setFyh(String fyh) {
		this.fyh = fyh;
	}

	public String getFymc() {
		return this.fymc;
	}

	public void setFymc(String fymc) {
		this.fymc = fymc;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getZymc() {
		return this.zymc;
	}

	public void setZymc(String zymc) {
		this.zymc = zymc;
	}

	public String getXwlbm() {
		return this.xwlbm;
	}

	public void setXwlbm(String xwlbm) {
		this.xwlbm = xwlbm;
	}

	public String getXwlb() {
		return this.xwlb;
	}

	public void setXwlb(String xwlb) {
		this.xwlb = xwlb;
	}

	public String getDsh() {
		return this.dsh;
	}

	public void setDsh(String dsh) {
		this.dsh = dsh;
	}

	public String getDsxm() {
		return this.dsxm;
	}

	public void setDsxm(String dsxm) {
		this.dsxm = dsxm;
	}

	public String getPyccm() {
		return this.pyccm;
	}

	public void setPyccm(String pyccm) {
		this.pyccm = pyccm;
	}

	public String getPycc() {
		return this.pycc;
	}

	public void setPycc(String pycc) {
		this.pycc = pycc;
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