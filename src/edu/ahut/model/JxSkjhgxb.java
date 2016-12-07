package edu.ahut.model;


/**
 * JxSkjhgxb entity. @author MyEclipse Persistence Tools
 */

public class JxSkjhgxb implements java.io.Serializable {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4648144105896672144L;
	private Long id;
	private String kkkh;
	private String kkjhh;
	private String kch;

	// Constructors

	/** default constructor */
	public JxSkjhgxb() {
	}

	/** minimal constructor */
	public JxSkjhgxb(String kkkh, String kkjhh) {
		this.kkkh = kkkh;
		this.kkjhh = kkjhh;
	}

	/** full constructor */
	public JxSkjhgxb(String kkkh, String kkjhh, String kch) {
		this.kkkh = kkkh;
		this.kkjhh = kkjhh;
		this.kch = kch;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public String getKkjhh() {
		return this.kkjhh;
	}

	public void setKkjhh(String kkjhh) {
		this.kkjhh = kkjhh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
	}

}