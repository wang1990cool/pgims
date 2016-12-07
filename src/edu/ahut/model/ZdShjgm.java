package edu.ahut.model;



/**
 * ZdShjgm entity. @author MyEclipse Persistence Tools
 */

public class ZdShjgm  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
     private String shjgm;
     private String shjg;
     private Long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdShjgm() {
    }

	/** minimal constructor */
    public ZdShjgm(String shjgm) {
        this.shjgm = shjgm;
    }
    
    /** full constructor */
    public ZdShjgm(String shjgm, String shjg, Long pxh, String sfyx, String bz) {
        this.shjgm = shjgm;
        this.shjg = shjg;
        this.pxh = pxh;
        this.sfyx = sfyx;
        this.bz = bz;
    }

   
    // Property accessors

    public Long getId() {
        return this.id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public String getShjgm() {
        return this.shjgm;
    }
    
    public void setShjgm(String shjgm) {
        this.shjgm = shjgm;
    }

    public String getShjg() {
        return this.shjg;
    }
    
    public void setShjg(String shjg) {
        this.shjg = shjg;
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
   








}