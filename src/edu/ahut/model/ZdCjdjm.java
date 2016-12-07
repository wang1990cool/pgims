package edu.ahut.model;


public class ZdCjdjm implements java.io.Serializable {


	private static final long serialVersionUID = 3409956657711368548L;
	private Long id;
	private String bm;
	private String mc;
	private Long pxh;
	private String sfyx;
	private String bz;
	private String lx;
	private Double hsfs;

	public ZdCjdjm() {
	}

	public ZdCjdjm(Long id, String bm) {
		this.id = id;
		this.bm = bm;
	}

	/** full constructor */
	public ZdCjdjm(Long id, String bm, String mc, Long pxh, String sfyx,
			String bz, String lx, Double hsfs) {
		this.id = id;
		this.bm = bm;
		this.mc = mc;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.lx = lx;
		this.hsfs = hsfs;
	}


	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBm() {
		return this.bm;
	}

	public void setBm(String bm) {
		this.bm = bm;
	}

	public String getMc() {
		return this.mc;
	}

	public void setMc(String mc) {
		this.mc = mc;
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

	public String getLx() {
		return this.lx;
	}

	public void setLx(String lx) {
		this.lx = lx;
	}

	public Double getHsfs() {
		return this.hsfs;
	}

	public void setHsfs(Double hsfs) {
		this.hsfs = hsfs;
	}

}