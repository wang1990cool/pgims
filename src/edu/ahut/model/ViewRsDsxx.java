package edu.ahut.model;

/**
 * ViewRsDsxxId entity. @author MyEclipse Persistence Tools
 */

public class ViewRsDsxx  implements java.io.Serializable {

	 private static final long serialVersionUID = 2078475590137410396L;
	 private Long id;
     private String gh;
     private String xm;
     private String xb;
     private String mz;
     private String zzmm;
     private String zc;
     private String gzdw;
     private String szdwh;
     private String szdw;
     private String dslbm;
     private String dslb;
     private String jslym;
     private String jsly;
     private String dszt;


    // Constructors

    /** default constructor */
    public ViewRsDsxx() {
    }

	/** minimal constructor */
    public ViewRsDsxx(Long id, String gh, String xm) {
        this.id = id;
        this.gh = gh;
        this.xm = xm;
    }
    
    /** full constructor */
    public ViewRsDsxx(Long id, String gh, String xm, String xb, 
    		String mz, String zzmm, String zc, String gzdw, String szdwh, 
    		String szdw, String dslbm, String dslb, String jslym, 
    		String jsly, String dszt) {
        this.id = id;
        this.gh = gh;
        this.xm = xm;
        this.xb = xb;
        this.mz = mz;
        this.zzmm = zzmm;
        this.zc = zc;
        this.gzdw = gzdw;
        this.szdwh = szdwh;
        this.szdw = szdw;
        this.dslbm = dslbm;
        this.dslb = dslb;
        this.jslym = jslym;
        this.jsly = jsly;
        this.dszt = dszt;
    }

   
    // Property accessors

    public Long getId() {
        return this.id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public String getGh() {
        return this.gh;
    }
    
    public void setGh(String gh) {
        this.gh = gh;
    }

    public String getXm() {
        return this.xm;
    }
    
    public void setXm(String xm) {
        this.xm = xm;
    }

    public String getXb() {
        return this.xb;
    }
    
    public void setXb(String xb) {
        this.xb = xb;
    }

    public String getMz() {
        return this.mz;
    }
    
    public void setMz(String mz) {
        this.mz = mz;
    }

    public String getZzmm() {
        return this.zzmm;
    }
    
    public void setZzmm(String zzmm) {
        this.zzmm = zzmm;
    }

    public String getZc() {
        return this.zc;
    }
    
    public void setZc(String zc) {
        this.zc = zc;
    }

    public String getGzdw() {
        return this.gzdw;
    }
    
    public void setGzdw(String gzdw) {
        this.gzdw = gzdw;
    }

    public String getSzdwh() {
        return this.szdwh;
    }
    
    public void setSzdwh(String szdwh) {
        this.szdwh = szdwh;
    }

    public String getSzdw() {
        return this.szdw;
    }
    
    public void setSzdw(String szdw) {
        this.szdw = szdw;
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

    public String getJslym() {
        return this.jslym;
    }
    
    public void setJslym(String jslym) {
        this.jslym = jslym;
    }

    public String getJsly() {
        return this.jsly;
    }
    
    public void setJsly(String jsly) {
        this.jsly = jsly;
    }

    public String getDszt() {
        return this.dszt;
    }
    
    public void setDszt(String dszt) {
        this.dszt = dszt;
    }
   
}