package edu.ahut.model;



/**
 * ZdZzmmm entity. @author MyEclipse Persistence Tools
 */

public class ZdZzmmm  implements java.io.Serializable {


    /**
	 * 
	 */
	private static final long serialVersionUID = -5626361046902042794L;
	// Fields    

     private long id;
     private String zzmmm;
     private String zzmm;
     private String zzmmmqc;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdZzmmm() {
    }

	/** minimal constructor */
    public ZdZzmmm(String zzmmm) {
        this.zzmmm = zzmmm;
    }
    
    /** full constructor */
    public ZdZzmmm(String zzmmm, String zzmm, String zzmmmqc, long pxh, String sfyx, String bz) {
        this.zzmmm = zzmmm;
        this.zzmm = zzmm;
        this.zzmmmqc = zzmmmqc;
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

    public String getZzmmmqc() {
        return this.zzmmmqc;
    }
    
    public void setZzmmmqc(String zzmmmqc) {
        this.zzmmmqc = zzmmmqc;
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