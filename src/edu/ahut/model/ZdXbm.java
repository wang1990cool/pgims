package edu.ahut.model;



/**
 * ZdXbm entity. @author MyEclipse Persistence Tools
 */

public class ZdXbm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -8380012543502636183L;
	private long id;
     private String xbm;
     private String xb;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdXbm() {
    }

	/** minimal constructor */
    public ZdXbm(String xbm) {
        this.xbm = xbm;
    }
    
    /** full constructor */
    public ZdXbm(String xbm, String xb, long pxh, String sfyx, String bz) {
        this.xbm = xbm;
        this.xb = xb;
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