package edu.ahut.model;



/**
 * ZdXwlbm entity. @author MyEclipse Persistence Tools
 */

public class ZdXwlbm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 1410244292182163265L;
	private long id;
     private String xwlbm;
     private String xwlb;
     private String sfyx;
     private String bz;
     private long pxh;


    // Constructors

    /** default constructor */
    public ZdXwlbm() {
    }

    
    /** full constructor */
    public ZdXwlbm(String xwlbm, String xwlb, String sfyx, String bz, long pxh) {
        this.xwlbm = xwlbm;
        this.xwlb = xwlb;
        this.sfyx = sfyx;
        this.bz = bz;
        this.pxh = pxh;
    }

   
    // Property accessors

    public long getId() {
        return this.id;
    }
    
    public void setId(long id) {
        this.id = id;
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

    public long getPxh() {
        return this.pxh;
    }
    
    public void setPxh(long pxh) {
        this.pxh = pxh;
    }
   








}