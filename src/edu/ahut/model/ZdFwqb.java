package edu.ahut.model;


/**
 * ZdFwqb entity. @author MyEclipse Persistence Tools
 */

public class ZdFwqb  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = -1895175140326950740L;
	private Double id;
     private String fwqmc;
     private String fwqip;
     private String sfyx;
     private String username;
     private String password;


    // Constructors

    /** default constructor */
    public ZdFwqb() {
    }

	/** minimal constructor */
    public ZdFwqb(Double id) {
        this.id = id;
    }
    
    /** full constructor */
    public ZdFwqb(Double id, String fwqmc, String fwqip, String sfyx, String username, String password) {
        this.id = id;
        this.fwqmc = fwqmc;
        this.fwqip = fwqip;
        this.sfyx = sfyx;
        this.username = username;
        this.password = password;
    }

   
    // Property accessors

    public Double getId() {
        return this.id;
    }
    
    public void setId(Double id) {
        this.id = id;
    }

    public String getFwqmc() {
        return this.fwqmc;
    }
    
    public void setFwqmc(String fwqmc) {
        this.fwqmc = fwqmc;
    }

    public String getFwqip() {
        return this.fwqip;
    }
    
    public void setFwqip(String fwqip) {
        this.fwqip = fwqip;
    }

    public String getSfyx() {
        return this.sfyx;
    }
    
    public void setSfyx(String sfyx) {
        this.sfyx = sfyx;
    }

    public String getUsername() {
        return this.username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
   








}