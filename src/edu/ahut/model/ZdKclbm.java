package edu.ahut.model;


public class ZdKclbm implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -7710375842533586327L;
	private Long id;
	private String kclbm;
	private String kclb;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdKclbm() {
	}

	/** minimal constructor */
	public ZdKclbm(String kclbm) {
		this.kclbm = kclbm;
	}

	/** full constructor */
	public ZdKclbm(String kclbm, String kclb, Long pxh, String sfyx, String bz) {
		this.kclbm = kclbm;
		this.kclb = kclb;
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

	public String getKclbm() {
		return this.kclbm;
	}

	public void setKclbm(String kclbm) {
		this.kclbm = kclbm;
	}

	public String getKclb() {
		return this.kclb;
	}

	public void setKclb(String kclb) {
		this.kclb = kclb;
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