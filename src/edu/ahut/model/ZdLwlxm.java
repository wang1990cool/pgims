package edu.ahut.model;



/**
 * ZdPyfsm entity. @author MyEclipse Persistence Tools
 */

public class ZdLwlxm  implements java.io.Serializable {


	private static final long serialVersionUID = -4348634639181387680L;
	 private Long id;
     private String lwlxm;
     private String lwlx;
     private Long pxh;
     private String sfyx;
     private String bz;


    // Constructors

    /** default constructor */
    public ZdLwlxm() {
    }


	public ZdLwlxm(String lwlxm, String lwlx, Long pxh, String sfyx,
			String bz) {
		this.lwlxm = lwlxm;
		this.lwlx = lwlx;
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


	public String getLwlxm() {
		return lwlxm;
	}


	public void setLwlxm(String lwlxm) {
		this.lwlxm = lwlxm;
	}


	public String getLwlx() {
		return lwlx;
	}


	public void setLwlx(String lwlx) {
		this.lwlx = lwlx;
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