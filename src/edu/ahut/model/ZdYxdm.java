package edu.ahut.model;



/**
 * ZdYxdm entity. @author MyEclipse Persistence Tools
 */

public class ZdYxdm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -1757733502398669207L;
	private String id;
     private String yxdm;
     private String yxmc;
     private Long pxh;
     private String sfyx;
     private String bz;
     private String yxlxm;
     private String yxlx;


    // Constructors

    /** default constructor */
    public ZdYxdm() {
    }

	/** minimal constructor */
    public ZdYxdm(String yxdm) {
        this.yxdm = yxdm;
    }
    
    /** full constructor */
    public ZdYxdm(String yxdm, String yxmc, Long pxh, String sfyx, String bz, String yxlxm, String yxlx) {
        this.yxdm = yxdm;
        this.yxmc = yxmc;
        this.pxh = pxh;
        this.sfyx = sfyx;
        this.bz = bz;
        this.yxlxm = yxlxm;
        this.yxlx = yxlx;
    }

   
    // Property accessors

    public String getId() {
        return this.id;
    }
    
    public void setId(String id) {
        this.id = id;
    }

    public String getYxdm() {
        return this.yxdm;
    }
    
    public void setYxdm(String yxdm) {
        this.yxdm = yxdm;
    }

    public String getYxmc() {
        return this.yxmc;
    }
    
    public void setYxmc(String yxmc) {
        this.yxmc = yxmc;
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

    public String getYxlxm() {
        return this.yxlxm;
    }
    
    public void setYxlxm(String yxlxm) {
        this.yxlxm = yxlxm;
    }

    public String getYxlx() {
        return this.yxlx;
    }
    
    public void setYxlx(String yxlx) {
        this.yxlx = yxlx;
    }
   








}