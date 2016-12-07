package edu.ahut.model;



/**
 * ZdDslym entity. @author MyEclipse Persistence Tools
 */

public class ZdJslym  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -801269271737374162L;
	private long id;
     private String jslym;
     private String jsly;
     private long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdJslym() {
    }

	/** minimal constructor */
    public ZdJslym(String jslym) {
        this.jslym = jslym;
    }
    
    /** full constructor */
    public ZdJslym(String jslym, String jsly, long pxh, String sfyx, String bz) {
        this.jslym = jslym;
        this.jsly = jsly;
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

    public String getJslym() {
		return jslym;
	}

	public void setJslym(String jslym) {
		this.jslym = jslym;
	}

	public String getJsly() {
		return jsly;
	}

	public void setJsly(String jsly) {
		this.jsly = jsly;
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