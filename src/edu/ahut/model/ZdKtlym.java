package edu.ahut.model;



/**
 * ZdPyfsm entity. @author MyEclipse Persistence Tools
 */

public class ZdKtlym  implements java.io.Serializable {


	private static final long serialVersionUID = -4348634639181387680L;
	private Long id;
     private String ktlym;
     private String ktly;
     private Long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdKtlym() {
    }


	public ZdKtlym( String ktlym, String ktly, Long pxh, String sfyx,
			String bz) {
		this.ktlym = ktlym;
		this.ktly = ktly;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getKtlym() {
		return ktlym;
	}


	public void setKtlym(String ktlym) {
		this.ktlym = ktlym;
	}


	public String getKtly() {
		return ktly;
	}


	public void setKtly(String ktly) {
		this.ktly = ktly;
	}


	public Long getPxh() {
		return pxh;
	}


	public void setPxh(Long pxh) {
		this.pxh = pxh;
	}


	public String getSfyx() {
		return sfyx;
	}


	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}


	public String getBz() {
		return bz;
	}


	public void setBz(String bz) {
		this.bz = bz;
	}


	
    
   




}