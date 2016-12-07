package edu.ahut.model;



/**
 * RsDsxxb entity. @author MyEclipse Persistence Tools
 */

public class RsDsxxb  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
     private String dsh;
     private String dslym;
     private String dslbm;
     private String yjfx;
     private String dsjj;
     private String dsztm;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public RsDsxxb() {
    }

	/** minimal constructor */
    public RsDsxxb(String dsh, String dslym, String dslbm, String dsztm) {
        this.dsh = dsh;
        this.dslym = dslym;
        this.dslbm = dslbm;
        this.dsztm = dsztm;
    }
    
    /** full constructor */
    public RsDsxxb(String dsh, String dslym, String dslbm, String yjfx, String dsjj, String dsztm, String sfyx, String bz) {
        this.dsh = dsh;
        this.dslym = dslym;
        this.dslbm = dslbm;
        this.yjfx = yjfx;
        this.dsjj = dsjj;
        this.dsztm = dsztm;
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

    public String getDsh() {
        return this.dsh;
    }
    
    public void setDsh(String dsh) {
        this.dsh = dsh;
    }

    public String getDslym() {
        return this.dslym;
    }
    
    public void setDslym(String dslym) {
        this.dslym = dslym;
    }

    public String getDslbm() {
        return this.dslbm;
    }
    
    public void setDslbm(String dslbm) {
        this.dslbm = dslbm;
    }

    public String getYjfx() {
        return this.yjfx;
    }
    
    public void setYjfx(String yjfx) {
        this.yjfx = yjfx;
    }

    public String getDsjj() {
        return this.dsjj;
    }
    
    public void setDsjj(String dsjj) {
        this.dsjj = dsjj;
    }

    public String getDsztm() {
        return this.dsztm;
    }
    
    public void setDsztm(String dsztm) {
        this.dsztm = dsztm;
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