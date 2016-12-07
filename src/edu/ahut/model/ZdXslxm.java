package edu.ahut.model;



/**
 * ZdXslxm entity. @author MyEclipse Persistence Tools
 */

public class ZdXslxm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 4261099311801254617L;
	private long id;
     private String xslxm;
     private String xslx;
     private String sfyx;
     private String bz;
     private long pxh;


    // Constructors

    /** default constructor */
    public ZdXslxm() {
    }

    
    /** full constructor */
    public ZdXslxm(String xslxm, String xslx, String sfyx, String bz, long pxh) {
        this.xslxm = xslxm;
        this.xslx = xslx;
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