package edu.ahut.model;

/**
 * ZdRxfs entity. @author MyEclipse Persistence Tools
 */

public class ZdRxfs implements java.io.Serializable {

	private static final long serialVersionUID = 8939575387444559105L;
	private Long id;
	private String rxfsm;
	private String rxfs;
	private Long pxh;
	private String sfyx;
	private String bz;

	// Constructors

	/** default constructor */
	public ZdRxfs() {
	}

	/** minimal constructor */
	public ZdRxfs(Long id, String rxfsm) {
		this.id = id;
		this.rxfsm = rxfsm;
	}

	/** full constructor */
	public ZdRxfs(Long id, String rxfsm, String rxfs, Long pxh, String sfyx,
			String bz) {
		this.id = id;
		this.rxfsm = rxfsm;
		this.rxfs = rxfs;
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

	public String getRxfsm() {
		return this.rxfsm;
	}

	public void setRxfsm(String rxfsm) {
		this.rxfsm = rxfsm;
	}

	public String getRxfs() {
		return this.rxfs;
	}

	public void setRxfs(String rxfs) {
		this.rxfs = rxfs;
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