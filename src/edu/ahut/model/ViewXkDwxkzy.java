package edu.ahut.model;


/**
 * ViewXkDwxkzy entity. @author MyEclipse Persistence Tools
 */

public class ViewXkDwxkzy implements java.io.Serializable {

	private static final long serialVersionUID = 5258054647173583858L;
	private Long id;
	private String dwh;
	private String dwmc;
	private String zydm;
	private String zymc;
	private String sfyx;

	// Constructors

	/** default constructor */
	public ViewXkDwxkzy() {
	}

	/** minimal constructor */
	public ViewXkDwxkzy(Long id) {
		this.id = id;
	}

	/** full constructor */
	public ViewXkDwxkzy(Long id, String dwh, String dwmc, String zydm,
			String zymc, String sfyx) {
		this.id = id;
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.zydm = zydm;
		this.zymc = zymc;
		this.sfyx = sfyx;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDwh() {
		return this.dwh;
	}

	public void setDwh(String dwh) {
		this.dwh = dwh;
	}

	public String getDwmc() {
		return this.dwmc;
	}

	public void setDwmc(String dwmc) {
		this.dwmc = dwmc;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getZymc() {
		return this.zymc;
	}

	public void setZymc(String zymc) {
		this.zymc = zymc;
	}

	
	public String getSfyx() {
		return this.sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}