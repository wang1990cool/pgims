package edu.ahut.model;


public class ViewXkXxxkb implements java.io.Serializable {

	private static final long serialVersionUID = -6155505061248881119L;
	private String zydm;
	private String zymc;
	private String gjzydm;
	private String gjzymc;
	private String xwlb;
	private String xwlbm;
	private String sfyx;
	private Long id;

	// Constructors

	/** default constructor */
	public ViewXkXxxkb() {
	}

	/** minimal constructor */
	public ViewXkXxxkb(String zydm, Long id) {
		this.zydm = zydm;
		this.id = id;
	}

	/** full constructor */
	public ViewXkXxxkb(String zydm, String zymc, String gjzydm,
			String gjzymc, String xwlb, String xwlbm, Long id,String sfyx) {
		this.zydm = zydm;
		this.zymc = zymc;
		this.gjzydm = gjzydm;
		this.gjzymc = gjzymc;
		this.xwlb = xwlb;
		this.xwlbm = xwlbm;
		this.sfyx = sfyx;
		this.id = id;
	}

	// Property accessors

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

	public String getGjzydm() {
		return this.gjzydm;
	}

	public void setGjzydm(String gjzydm) {
		this.gjzydm = gjzydm;
	}

	public String getGjzymc() {
		return this.gjzymc;
	}

	public void setGjzymc(String gjzymc) {
		this.gjzymc = gjzymc;
	}

	public String getXwlb() {
		return this.xwlb;
	}

	public void setXwlb(String xwlb) {
		this.xwlb = xwlb;
	}

	public String getXwlbm() {
		return this.xwlbm;
	}

	public void setXwlbm(String xwlbm) {
		this.xwlbm = xwlbm;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSfyx() {
		return sfyx;
	}

	public void setSfyx(String sfyx) {
		this.sfyx = sfyx;
	}

}