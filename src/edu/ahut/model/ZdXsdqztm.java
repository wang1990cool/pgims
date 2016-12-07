package edu.ahut.model;



/**
 * ZdXsdqztm entity. @author MyEclipse Persistence Tools
 */

public class ZdXsdqztm  implements java.io.Serializable {


    /**
	 * 
	 */
	private static final long serialVersionUID = -1734424415978754904L;
	// Fields    

     private long id;
     private String xsdqztm;
     private String xsdqzt;
     private double pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdXsdqztm() {
    }

	/** minimal constructor */
    public ZdXsdqztm(String xsdqztm) {
        this.xsdqztm = xsdqztm;
    }
    
    /** full constructor */
    public ZdXsdqztm(String xsdqztm, String xsdqzt, double pxh, String sfyx, String bz) {
        this.xsdqztm = xsdqztm;
        this.xsdqzt = xsdqzt;
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

    public String getXsdqztm() {
        return this.xsdqztm;
    }
    
    public void setXsdqztm(String xsdqztm) {
        this.xsdqztm = xsdqztm;
    }

    public String getXsdqzt() {
        return this.xsdqzt;
    }
    
    public void setXsdqzt(String xsdqzt) {
        this.xsdqzt = xsdqzt;
    }

    public double getPxh() {
        return this.pxh;
    }
    
    public void setPxh(double pxh) {
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