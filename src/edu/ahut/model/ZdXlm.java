package edu.ahut.model;



/**
 * ZdXlm entity. @author MyEclipse Persistence Tools
 */

public class ZdXlm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 9081541532885438526L;
	private long id;
     private String xlm;
     private String xl;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdXlm() {
    }

	/** minimal constructor */
    public ZdXlm(String xlm) {
        this.xlm = xlm;
    }
    
    /** full constructor */
    public ZdXlm(String xlm, String xl, long pxh, String sfyx, String bz) {
        this.xlm = xlm;
        this.xl = xl;
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

    public String getXlm() {
        return this.xlm;
    }
    
    public void setXlm(String xlm) {
        this.xlm = xlm;
    }

    public String getXl() {
        return this.xl;
    }
    
    public void setXl(String xl) {
        this.xl = xl;
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