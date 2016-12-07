package edu.ahut.model;



/**
 * ZdMzm entity. @author MyEclipse Persistence Tools
 */

public class ZdMzm  implements java.io.Serializable {


    /**
	 * 
	 */
	private static final long serialVersionUID = -6211443278461214032L;
	// Fields    

     private long id;
     private String mzm;
     private String mzmc;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdMzm() {
    }

	/** minimal constructor */
    public ZdMzm(String mzm) {
        this.mzm = mzm;
    }
    
    /** full constructor */
    public ZdMzm(String mzm, String mzmc, long pxh, String sfyx, String bz) {
        this.mzm = mzm;
        this.mzmc = mzmc;
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

    public String getMzm() {
        return this.mzm;
    }
    
    public void setMzm(String mzm) {
        this.mzm = mzm;
    }

    public String getMzmc() {
        return this.mzmc;
    }
    
    public void setMzmc(String mzmc) {
        this.mzmc = mzmc;
    }

    public long getPxh() {
        return this.pxh;
    }
    
    public void setPxh(long pxh) {
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