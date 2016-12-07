package edu.ahut.model;

import java.util.Date;


/**
 * PyXsdsb entity. @author MyEclipse Persistence Tools
 */

public class PyXsdsb  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
     private String xh;
     private String zdfsm;
     private String zdfs;
     private String dsh;
     private Date cjrq;
     private String sfyx;
     private Date sxrq;
     private String bz;


    // Constructors

    /** default constructor */
    public PyXsdsb() {
    }

	/** minimal constructor */
    public PyXsdsb(String xh, String dsh) {
        this.xh = xh;
        this.dsh = dsh;
    }
    
    /** full constructor */
    public PyXsdsb(String xh, String zdfsm, String zdfs, String dsh, Date cjrq, String sfyx, Date sxrq, String bz) {
        this.xh = xh;
        this.zdfsm = zdfsm;
        this.zdfs = zdfs;
        this.dsh = dsh;
        this.cjrq = cjrq;
        this.sfyx = sfyx;
        this.sxrq = sxrq;
        this.bz = bz;
    }

   
    // Property accessors

    public long getId() {
        return this.id;
    }
    
    public void setId(long id) {
        this.id = id;
    }

    public String getXh() {
        return this.xh;
    }
    
    public void setXh(String xh) {
        this.xh = xh;
    }

    public String getZdfsm() {
        return this.zdfsm;
    }
    
    public void setZdfsm(String zdfsm) {
        this.zdfsm = zdfsm;
    }

    public String getZdfs() {
        return this.zdfs;
    }
    
    public void setZdfs(String zdfs) {
        this.zdfs = zdfs;
    }

    public String getDsh() {
        return this.dsh;
    }
    
    public void setDsh(String dsh) {
        this.dsh = dsh;
    }

    public Date getCjrq() {
        return this.cjrq;
    }
    
    public void setCjrq(Date cjrq) {
        this.cjrq = cjrq;
    }

    public String getSfyx() {
        return this.sfyx;
    }
    
    public void setSfyx(String sfyx) {
        this.sfyx = sfyx;
    }

    public Date getSxrq() {
        return this.sxrq;
    }
    
    public void setSxrq(Date sxrq) {
        this.sxrq = sxrq;
    }

    public String getBz() {
        return this.bz;
    }
    
    public void setBz(String bz) {
        this.bz = bz;
    }
   
}