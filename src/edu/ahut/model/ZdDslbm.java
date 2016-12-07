package edu.ahut.model;



/**
 * ZdDslbm entity. @author MyEclipse Persistence Tools
 */

public class ZdDslbm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -8365950907018438725L;
	private long id;
     private String dslbm;
     private String dslb;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdDslbm() {
    }

	/** minimal constructor */
    public ZdDslbm(String dslbm) {
        this.dslbm = dslbm;
    }
    
    /** full constructor */
    public ZdDslbm(String dslbm, String dslb, long pxh, String sfyx, String bz) {
        this.dslbm = dslbm;
        this.dslb = dslb;
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

    public String getDslbm() {
        return this.dslbm;
    }
    
    public void setDslbm(String dslbm) {
        this.dslbm = dslbm;
    }

    public String getDslb() {
        return this.dslb;
    }
    
    public void setDslb(String dslb) {
        this.dslb = dslb;
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