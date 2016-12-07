package edu.ahut.model;

import java.util.Date;



/**
 * ViewXwKyjlb entity. @author MyEclipse Persistence Tools
 */

public class ViewXwKyjlb  implements java.io.Serializable {


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
     private String hjcgmc;
     private String hjrq;
     private String kjjlbm;
     private String kjjlb;
     private String jldjm;
     
     private String jldj;
     private String jlpzh;
     private String bjdw;
     private String hjmd;
     private Long brpm;
     private String xmlym;
     
     private String xmly;
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
     private String pyccm;
     private String pycc;
     private String xwlbm;
     private String xwlb;
     private String dsh;
     private String dsxm;


    // Constructors

    /** default constructor */
    public ViewXwKyjlb() {
    }

	/** minimal constructor */
    public ViewXwKyjlb(Long id, String xn, String xq, String xh, String cglxm, String cglx, String kyuuid, String hjcgmc, String hjrq, String kjjlbm, String kjjlb, String jldjm, String jldj, String bjdw, String hjmd, Long brpm, String xmlym, String xmly, String ztm, String zt, String zllxm, String zllx) {
        this.id = id;
        this.xn = xn;
        this.xq = xq;
        this.xh = xh;
        this.cglxm = cglxm;
        this.cglx = cglx;
        this.kyuuid = kyuuid;
        this.hjcgmc = hjcgmc;
        this.hjrq = hjrq;
        this.kjjlbm = kjjlbm;
        this.kjjlb = kjjlb;
        this.jldjm = jldjm;
        this.jldj = jldj;
        this.bjdw = bjdw;
        this.hjmd = hjmd;
        this.brpm = brpm;
        this.xmlym = xmlym;
        this.xmly = xmly;
        this.ztm = ztm;
        this.zt = zt;
        this.zllxm = zllxm;
        this.zllx = zllx;
    }
    
    /** full constructor */
    public ViewXwKyjlb(Long id, String xn, String xq, String xh, String cglxm, String cglx, String kyuuid, String hjcgmc, String hjrq, String kjjlbm, String kjjlb, String jldjm, String jldj, String jlpzh, String bjdw, String hjmd, Long brpm, String xmlym, String xmly, String lrrgh, String lrr, String lrip, Date lrsj, String ztm, String zt, String bz, String shrgh, String shr, Date shsj, String shyj, String ship, String zsrgh, String zsr, Date zssj, String zsyj, String zsip, String shjgm, String shjg, String zllxm, String zllx, String zlwj, String zlwjmc, String zlwjdz, Date zlscsj, String zlscr, String zlscip, String zttm, String ztt, String xm, String xslxm, String xslx, String sznj, String fyh, String fymc, String zydm, String zymc, String pyccm, String pycc, String xwlbm, String xwlb, String dsh, String dsxm) {
        this.id = id;
        this.xn = xn;
        this.xq = xq;
        this.xh = xh;
        this.cglxm = cglxm;
        this.cglx = cglx;
        this.kyuuid = kyuuid;
        this.hjcgmc = hjcgmc;
        this.hjrq = hjrq;
        this.kjjlbm = kjjlbm;
        this.kjjlb = kjjlb;
        this.jldjm = jldjm;
        this.jldj = jldj;
        this.jlpzh = jlpzh;
        this.bjdw = bjdw;
        this.hjmd = hjmd;
        this.brpm = brpm;
        this.xmlym = xmlym;
        this.xmly = xmly;
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
        this.pyccm = pyccm;
        this.pycc = pycc;
        this.xwlbm = xwlbm;
        this.xwlb = xwlb;
        this.dsh = dsh;
        this.dsxm = dsxm;
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

    public String getHjcgmc() {
        return this.hjcgmc;
    }
    
    public void setHjcgmc(String hjcgmc) {
        this.hjcgmc = hjcgmc;
    }

    public String getHjrq() {
        return this.hjrq;
    }
    
    public void setHjrq(String hjrq) {
        this.hjrq = hjrq;
    }

    public String getKjjlbm() {
        return this.kjjlbm;
    }
    
    public void setKjjlbm(String kjjlbm) {
        this.kjjlbm = kjjlbm;
    }

    public String getKjjlb() {
        return this.kjjlb;
    }
    
    public void setKjjlb(String kjjlb) {
        this.kjjlb = kjjlb;
    }

    public String getJldjm() {
        return this.jldjm;
    }
    
    public void setJldjm(String jldjm) {
        this.jldjm = jldjm;
    }

    public String getJldj() {
        return this.jldj;
    }
    
    public void setJldj(String jldj) {
        this.jldj = jldj;
    }

    public String getJlpzh() {
        return this.jlpzh;
    }
    
    public void setJlpzh(String jlpzh) {
        this.jlpzh = jlpzh;
    }

    public String getBjdw() {
        return this.bjdw;
    }
    
    public void setBjdw(String bjdw) {
        this.bjdw = bjdw;
    }

    public String getHjmd() {
        return this.hjmd;
    }
    
    public void setHjmd(String hjmd) {
        this.hjmd = hjmd;
    }

    public Long getBrpm() {
        return this.brpm;
    }
    
    public void setBrpm(Long brpm) {
        this.brpm = brpm;
    }

    public String getXmlym() {
        return this.xmlym;
    }
    
    public void setXmlym(String xmlym) {
        this.xmlym = xmlym;
    }

    public String getXmly() {
        return this.xmly;
    }
    
    public void setXmly(String xmly) {
        this.xmly = xmly;
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
   








}