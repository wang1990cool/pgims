package edu.ahut.model;

import java.math.BigDecimal;
import java.sql.Timestamp;


/**
 * ViewPkjlPk entity. @author MyEclipse Persistence Tools
 */

public class ViewPkjlPk  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -5304921217595808696L;
	private BigDecimal id;
     private String xn;
     private String xq;
     private String pydwh;
     private String pydw;
     private String zydm;
     private String zymc;
     private String kkkh;
     private String kch;
     private String kcmc;
     private String kclbm;
     private String kclb;
     private String ggkbzm;
     private String ggkbz;
     private String jsbh;
     private String jsmc;
     private String zjjsh;
     private String zjjs;
     private String dszbzm;
     private String dszbz;
     private String kcsjm;
     private String kcsj;
     private String kczs;
     private String kcjc;
     private String pkztm;
     private String czrzh;
     private String czr;
     private Timestamp czsj;
     private String sjzxapbz;
     private String ddzxapbz;
     private String kksj;
     private String kkdwh;
     private String kkdw;
     private String ctid;


    // Constructors

    /** default constructor */
    public ViewPkjlPk() {
    }

	/** minimal constructor */
    public ViewPkjlPk(BigDecimal id) {
        this.id = id;
    }
    
    /** full constructor */
    public ViewPkjlPk(BigDecimal id, String xn, String xq, String pydwh, String pydw, String zydm, String zymc, String kkkh, String kch, String kcmc, String kclbm, String kclb, String ggkbzm, String ggkbz, String jsbh, String jsmc, String zjjsh, String zjjs, String dszbzm, String dszbz, String kcsjm, String kcsj, String kczs, String kcjc, String pkztm, String czrzh, String czr, Timestamp czsj, String sjzxapbz, String ddzxapbz, String kksj, String kkdwh, String kkdw, String ctid) {
        this.id = id;
        this.xn = xn;
        this.xq = xq;
        this.pydwh = pydwh;
        this.pydw = pydw;
        this.zydm = zydm;
        this.zymc = zymc;
        this.kkkh = kkkh;
        this.kch = kch;
        this.kcmc = kcmc;
        this.kclbm = kclbm;
        this.kclb = kclb;
        this.ggkbzm = ggkbzm;
        this.ggkbz = ggkbz;
        this.jsbh = jsbh;
        this.jsmc = jsmc;
        this.zjjsh = zjjsh;
        this.zjjs = zjjs;
        this.dszbzm = dszbzm;
        this.dszbz = dszbz;
        this.kcsjm = kcsjm;
        this.kcsj = kcsj;
        this.kczs = kczs;
        this.kcjc = kcjc;
        this.pkztm = pkztm;
        this.czrzh = czrzh;
        this.czr = czr;
        this.czsj = czsj;
        this.sjzxapbz = sjzxapbz;
        this.ddzxapbz = ddzxapbz;
        this.kksj = kksj;
        this.kkdwh = kkdwh;
        this.kkdw = kkdw;
        this.ctid = ctid;
    }

   
    // Property accessors

    public BigDecimal getId() {
        return this.id;
    }
    
    public void setId(BigDecimal id) {
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

    public String getPydwh() {
        return this.pydwh;
    }
    
    public void setPydwh(String pydwh) {
        this.pydwh = pydwh;
    }

    public String getPydw() {
        return this.pydw;
    }
    
    public void setPydw(String pydw) {
        this.pydw = pydw;
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

    public String getKkkh() {
        return this.kkkh;
    }
    
    public void setKkkh(String kkkh) {
        this.kkkh = kkkh;
    }

    public String getKch() {
        return this.kch;
    }
    
    public void setKch(String kch) {
        this.kch = kch;
    }

    public String getKcmc() {
        return this.kcmc;
    }
    
    public void setKcmc(String kcmc) {
        this.kcmc = kcmc;
    }

    public String getKclbm() {
        return this.kclbm;
    }
    
    public void setKclbm(String kclbm) {
        this.kclbm = kclbm;
    }

    public String getKclb() {
        return this.kclb;
    }
    
    public void setKclb(String kclb) {
        this.kclb = kclb;
    }

    public String getGgkbzm() {
        return this.ggkbzm;
    }
    
    public void setGgkbzm(String ggkbzm) {
        this.ggkbzm = ggkbzm;
    }

    public String getGgkbz() {
        return this.ggkbz;
    }
    
    public void setGgkbz(String ggkbz) {
        this.ggkbz = ggkbz;
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

    public String getZjjsh() {
        return this.zjjsh;
    }
    
    public void setZjjsh(String zjjsh) {
        this.zjjsh = zjjsh;
    }

    public String getZjjs() {
        return this.zjjs;
    }
    
    public void setZjjs(String zjjs) {
        this.zjjs = zjjs;
    }

    public String getDszbzm() {
        return this.dszbzm;
    }
    
    public void setDszbzm(String dszbzm) {
        this.dszbzm = dszbzm;
    }

    public String getDszbz() {
        return this.dszbz;
    }
    
    public void setDszbz(String dszbz) {
        this.dszbz = dszbz;
    }

    public String getKcsjm() {
        return this.kcsjm;
    }
    
    public void setKcsjm(String kcsjm) {
        this.kcsjm = kcsjm;
    }

    public String getKcsj() {
        return this.kcsj;
    }
    
    public void setKcsj(String kcsj) {
        this.kcsj = kcsj;
    }

    public String getKczs() {
        return this.kczs;
    }
    
    public void setKczs(String kczs) {
        this.kczs = kczs;
    }

    public String getKcjc() {
        return this.kcjc;
    }
    
    public void setKcjc(String kcjc) {
        this.kcjc = kcjc;
    }

    public String getPkztm() {
        return this.pkztm;
    }
    
    public void setPkztm(String pkztm) {
        this.pkztm = pkztm;
    }

    public String getCzrzh() {
        return this.czrzh;
    }
    
    public void setCzrzh(String czrzh) {
        this.czrzh = czrzh;
    }

    public String getCzr() {
        return this.czr;
    }
    
    public void setCzr(String czr) {
        this.czr = czr;
    }

    public Timestamp getCzsj() {
        return this.czsj;
    }
    
    public void setCzsj(Timestamp czsj) {
        this.czsj = czsj;
    }

    public String getSjzxapbz() {
        return this.sjzxapbz;
    }
    
    public void setSjzxapbz(String sjzxapbz) {
        this.sjzxapbz = sjzxapbz;
    }

    public String getDdzxapbz() {
        return this.ddzxapbz;
    }
    
    public void setDdzxapbz(String ddzxapbz) {
        this.ddzxapbz = ddzxapbz;
    }

    public String getKksj() {
        return this.kksj;
    }
    
    public void setKksj(String kksj) {
        this.kksj = kksj;
    }

    public String getKkdwh() {
        return this.kkdwh;
    }
    
    public void setKkdwh(String kkdwh) {
        this.kkdwh = kkdwh;
    }

    public String getKkdw() {
        return this.kkdw;
    }
    
    public void setKkdw(String kkdw) {
        this.kkdw = kkdw;
    }

    public String getCtid() {
        return this.ctid;
    }
    
    public void setCtid(String ctid) {
        this.ctid = ctid;
    }
   








}