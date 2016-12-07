package edu.ahut.model;

/**
 * ZdSshztm entity. @author MyEclipse Persistence Tools
 */

public class ZdSshztm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String shztm;
	private String shzt;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdSshztm() {
	}

	/** minimal constructor */
	public ZdSshztm(Long id, String shztm) {
		this.id = id;
		this.shztm = shztm;
	}

	/** full constructor */
	public ZdSshztm(Long id, String shztm, String shzt, Long pxh, String sfyx,
			String bz) {
		this.id = id;
		this.shztm = shztm;
		this.shzt = shzt;
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

	public String getShztm() {
		return this.shztm;
	}

	public void setShztm(String shztm) {
		this.shztm = shztm;
	}

	public String getShzt() {
		return this.shzt;
	}

	public void setShzt(String shzt) {
		this.shzt = shzt;
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