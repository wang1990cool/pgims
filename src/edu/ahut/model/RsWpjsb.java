package edu.ahut.model;

import java.sql.Blob;
import java.util.Date;


/**
 * RsWpjsb entity. @author MyEclipse Persistence Tools
 */

public class RsWpjsb  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
     private String gh;
     private String xm;
     private String xbm;
     private String xb;
     private String mzm;
     private String mz;
     private String zzmmm;
     private String zzmm;
     private String csrq;
     private String sfzjlx;
     private String sfzj;
     private String sfzjh;
     private String zgxlm;
     private String zgxl;
     private String xwm;
     private String xw;
     private String byyx;
     private String byzy;
     private String zcm;
     private String zc;
     private String dwmc;
     private Blob zp;
     private String yddh;
     private String bgdh;
     private String dzyx;
     private String txdz;
     private String grzy;
     private String jstxlx;
     private String jstxh;
     private String splx;
     private String prrq;
     private double prnx;
     private String lrrq;
     private String sfyx;
     private Date czsj;
     private String bz;
     private String yzbm;


    // Constructors

    /** default constructor */
    public RsWpjsb() {
    }

	/** minimal constructor */
    public RsWpjsb(String gh, String xm, String xbm, String mzm) {
        this.gh = gh;
        this.xm = xm;
        this.xbm = xbm;
        this.mzm = mzm;
    }
    
    /** full constructor */
    public RsWpjsb(String gh, String xm, String xbm, String xb, String mzm, String mz, String zzmmm, String zzmm, String csrq, String sfzjlx, String sfzj, String sfzjh, String zgxlm, String zgxl, String xwm, String xw, String byyx, String byzy, String zcm, String zc, String dwmc, Blob zp, String yddh, String bgdh, String dzyx, String txdz, String grzy, String jstxlx, String jstxh, String splx, String prrq, double prnx, String lrrq, String sfyx, Date czsj, String bz, String yzbm) {
        this.gh = gh;
        this.xm = xm;
        this.xbm = xbm;
        this.xb = xb;
        this.mzm = mzm;
        this.mz = mz;
        this.zzmmm = zzmmm;
        this.zzmm = zzmm;
        this.csrq = csrq;
        this.sfzjlx = sfzjlx;
        this.sfzj = sfzj;
        this.sfzjh = sfzjh;
        this.zgxlm = zgxlm;
        this.zgxl = zgxl;
        this.xwm = xwm;
        this.xw = xw;
        this.byyx = byyx;
        this.byzy = byzy;
        this.zcm = zcm;
        this.zc = zc;
        this.dwmc = dwmc;
        this.zp = zp;
        this.yddh = yddh;
        this.bgdh = bgdh;
        this.dzyx = dzyx;
        this.txdz = txdz;
        this.grzy = grzy;
        this.jstxlx = jstxlx;
        this.jstxh = jstxh;
        this.splx = splx;
        this.prrq = prrq;
        this.prnx = prnx;
        this.lrrq = lrrq;
        this.sfyx = sfyx;
        this.czsj = czsj;
        this.bz = bz;
        this.yzbm = yzbm;
    }

   
    // Property accessors

    public long getId() {
        return this.id;
    }
    
    public void setId(long id) {
        this.id = id;
    }

    public String getGh() {
        return this.gh;
    }
    
    public void setGh(String gh) {
        this.gh = gh;
    }

    public String getXm() {
        return this.xm;
    }
    
    public void setXm(String xm) {
        this.xm = xm;
    }

    public String getXbm() {
        return this.xbm;
    }
    
    public void setXbm(String xbm) {
        this.xbm = xbm;
    }

    public String getXb() {
        return this.xb;
    }
    
    public void setXb(String xb) {
        this.xb = xb;
    }

    public String getMzm() {
        return this.mzm;
    }
    
    public void setMzm(String mzm) {
        this.mzm = mzm;
    }

    public String getMz() {
        return this.mz;
    }
    
    public void setMz(String mz) {
        this.mz = mz;
    }

    public String getZzmmm() {
        return this.zzmmm;
    }
    
    public void setZzmmm(String zzmmm) {
        this.zzmmm = zzmmm;
    }

    public String getZzmm() {
        return this.zzmm;
    }
    
    public void setZzmm(String zzmm) {
        this.zzmm = zzmm;
    }

    public String getCsrq() {
        return this.csrq;
    }
    
    public void setCsrq(String csrq) {
        this.csrq = csrq;
    }

    public String getSfzjlx() {
        return this.sfzjlx;
    }
    
    public void setSfzjlx(String sfzjlx) {
        this.sfzjlx = sfzjlx;
    }

    public String getSfzj() {
        return this.sfzj;
    }
    
    public void setSfzj(String sfzj) {
        this.sfzj = sfzj;
    }

    public String getSfzjh() {
        return this.sfzjh;
    }
    
    public void setSfzjh(String sfzjh) {
        this.sfzjh = sfzjh;
    }

    public String getZgxlm() {
        return this.zgxlm;
    }
    
    public void setZgxlm(String zgxlm) {
        this.zgxlm = zgxlm;
    }

    public String getZgxl() {
        return this.zgxl;
    }
    
    public void setZgxl(String zgxl) {
        this.zgxl = zgxl;
    }

    public String getXwm() {
        return this.xwm;
    }
    
    public void setXwm(String xwm) {
        this.xwm = xwm;
    }

    public String getXw() {
        return this.xw;
    }
    
    public void setXw(String xw) {
        this.xw = xw;
    }

    public String getByyx() {
        return this.byyx;
    }
    
    public void setByyx(String byyx) {
        this.byyx = byyx;
    }

    public String getByzy() {
        return this.byzy;
    }
    
    public void setByzy(String byzy) {
        this.byzy = byzy;
    }

    public String getZcm() {
        return this.zcm;
    }
    
    public void setZcm(String zcm) {
        this.zcm = zcm;
    }

    public String getZc() {
        return this.zc;
    }
    
    public void setZc(String zc) {
        this.zc = zc;
    }

    public String getDwmc() {
        return this.dwmc;
    }
    
    public void setDwmc(String dwmc) {
        this.dwmc = dwmc;
    }

    public Blob getZp() {
        return this.zp;
    }
    
    public void setZp(Blob zp) {
        this.zp = zp;
    }

    public String getYddh() {
        return this.yddh;
    }
    
    public void setYddh(String yddh) {
        this.yddh = yddh;
    }

    public String getBgdh() {
        return this.bgdh;
    }
    
    public void setBgdh(String bgdh) {
        this.bgdh = bgdh;
    }

    public String getDzyx() {
        return this.dzyx;
    }
    
    public void setDzyx(String dzyx) {
        this.dzyx = dzyx;
    }

    public String getTxdz() {
        return this.txdz;
    }
    
    public void setTxdz(String txdz) {
        this.txdz = txdz;
    }

    public String getGrzy() {
        return this.grzy;
    }
    
    public void setGrzy(String grzy) {
        this.grzy = grzy;
    }

    public String getJstxlx() {
        return this.jstxlx;
    }
    
    public void setJstxlx(String jstxlx) {
        this.jstxlx = jstxlx;
    }

    public String getJstxh() {
        return this.jstxh;
    }
    
    public void setJstxh(String jstxh) {
        this.jstxh = jstxh;
    }

    public String getSplx() {
        return this.splx;
    }
    
    public void setSplx(String splx) {
        this.splx = splx;
    }

    public String getPrrq() {
        return this.prrq;
    }
    
    public void setPrrq(String prrq) {
        this.prrq = prrq;
    }

    public double getPrnx() {
        return this.prnx;
    }
    
    public void setPrnx(double prnx) {
        this.prnx = prnx;
    }

    public String getLrrq() {
        return this.lrrq;
    }
    
    public void setLrrq(String lrrq) {
        this.lrrq = lrrq;
    }

    public String getSfyx() {
        return this.sfyx;
    }
    
    public void setSfyx(String sfyx) {
        this.sfyx = sfyx;
    }

    public Date getCzsj() {
        return this.czsj;
    }
    
    public void setCzsj(Date czsj) {
        this.czsj = czsj;
    }

    public String getBz() {
        return this.bz;
    }
    
    public void setBz(String bz) {
        this.bz = bz;
    }

    public String getYzbm() {
        return this.yzbm;
    }
    
    public void setYzbm(String yzbm) {
        this.yzbm = yzbm;
    }

}