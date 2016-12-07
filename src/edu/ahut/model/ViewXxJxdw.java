package edu.ahut.model;

public class ViewXxJxdw implements java.io.Serializable {

	private static final long serialVersionUID = 6529434790674001578L;
	private Long id;
	private String dwh;
	private String dwmc;
	private String dwjc;
	private String lsdwh;
	private String bszsdw;
	private String sszsdw;
	private String jxdw;
	private String ggjx;
	private Long pxh;
	private String sfyx;
	private String bz;
	private String dwlbm;

	// Constructors

	/** default constructor */
	public ViewXxJxdw() {
	}

	/** minimal constructor */
	public ViewXxJxdw(Long id, String dwh) {
		this.id = id;
		this.dwh = dwh;
	}

	/** full constructor */
	public ViewXxJxdw(Long id, String dwh, String dwmc, String dwjc,
			String lsdwh, String bszsdw, String sszsdw, String jxdw,
			String ggjx, Long pxh, String sfyx, String bz, String dwlbm) {
		this.id = id;
		this.dwh = dwh;
		this.dwmc = dwmc;
		this.dwjc = dwjc;
		this.lsdwh = lsdwh;
		this.bszsdw = bszsdw;
		this.sszsdw = sszsdw;
		this.jxdw = jxdw;
		this.ggjx = ggjx;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.dwlbm = dwlbm;
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

	public String getDwjc() {
		return this.dwjc;
	}

	public void setDwjc(String dwjc) {
		this.dwjc = dwjc;
	}

	public String getLsdwh() {
		return this.lsdwh;
	}

	public void setLsdwh(String lsdwh) {
		this.lsdwh = lsdwh;
	}

	public String getBszsdw() {
		return this.bszsdw;
	}

	public void setBszsdw(String bszsdw) {
		this.bszsdw = bszsdw;
	}

	public String getSszsdw() {
		return this.sszsdw;
	}

	public void setSszsdw(String sszsdw) {
		this.sszsdw = sszsdw;
	}

	public String getJxdw() {
		return this.jxdw;
	}

	public void setJxdw(String jxdw) {
		this.jxdw = jxdw;
	}

	public String getGgjx() {
		return this.ggjx;
	}

	public void setGgjx(String ggjx) {
		this.ggjx = ggjx;
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

	public String getDwlbm() {
		return this.dwlbm;
	}

	public void setDwlbm(String dwlbm) {
		this.dwlbm = dwlbm;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof ViewXxJxdw))
			return false;
		ViewXxJxdw castOther = (ViewXxJxdw) other;

		return ((this.getId() == castOther.getId()) || (this.getId() != null
				&& castOther.getId() != null && this.getId().equals(
				castOther.getId())))
				&& ((this.getDwh() == castOther.getDwh()) || (this.getDwh() != null
						&& castOther.getDwh() != null && this.getDwh().equals(
						castOther.getDwh())))
				&& ((this.getDwmc() == castOther.getDwmc()) || (this.getDwmc() != null
						&& castOther.getDwmc() != null && this.getDwmc()
						.equals(castOther.getDwmc())))
				&& ((this.getDwjc() == castOther.getDwjc()) || (this.getDwjc() != null
						&& castOther.getDwjc() != null && this.getDwjc()
						.equals(castOther.getDwjc())))
				&& ((this.getLsdwh() == castOther.getLsdwh()) || (this
						.getLsdwh() != null && castOther.getLsdwh() != null && this
						.getLsdwh().equals(castOther.getLsdwh())))
				&& ((this.getBszsdw() == castOther.getBszsdw()) || (this
						.getBszsdw() != null && castOther.getBszsdw() != null && this
						.getBszsdw().equals(castOther.getBszsdw())))
				&& ((this.getSszsdw() == castOther.getSszsdw()) || (this
						.getSszsdw() != null && castOther.getSszsdw() != null && this
						.getSszsdw().equals(castOther.getSszsdw())))
				&& ((this.getJxdw() == castOther.getJxdw()) || (this.getJxdw() != null
						&& castOther.getJxdw() != null && this.getJxdw()
						.equals(castOther.getJxdw())))
				&& ((this.getGgjx() == castOther.getGgjx()) || (this.getGgjx() != null
						&& castOther.getGgjx() != null && this.getGgjx()
						.equals(castOther.getGgjx())))
				&& ((this.getPxh() == castOther.getPxh()) || (this.getPxh() != null
						&& castOther.getPxh() != null && this.getPxh().equals(
						castOther.getPxh())))
				&& ((this.getSfyx() == castOther.getSfyx()) || (this.getSfyx() != null
						&& castOther.getSfyx() != null && this.getSfyx()
						.equals(castOther.getSfyx())))
				&& ((this.getBz() == castOther.getBz()) || (this.getBz() != null
						&& castOther.getBz() != null && this.getBz().equals(
						castOther.getBz())))
				&& ((this.getDwlbm() == castOther.getDwlbm()) || (this
						.getDwlbm() != null && castOther.getDwlbm() != null && this
						.getDwlbm().equals(castOther.getDwlbm())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getId() == null ? 0 : this.getId().hashCode());
		result = 37 * result
				+ (getDwh() == null ? 0 : this.getDwh().hashCode());
		result = 37 * result
				+ (getDwmc() == null ? 0 : this.getDwmc().hashCode());
		result = 37 * result
				+ (getDwjc() == null ? 0 : this.getDwjc().hashCode());
		result = 37 * result
				+ (getLsdwh() == null ? 0 : this.getLsdwh().hashCode());
		result = 37 * result
				+ (getBszsdw() == null ? 0 : this.getBszsdw().hashCode());
		result = 37 * result
				+ (getSszsdw() == null ? 0 : this.getSszsdw().hashCode());
		result = 37 * result
				+ (getJxdw() == null ? 0 : this.getJxdw().hashCode());
		result = 37 * result
				+ (getGgjx() == null ? 0 : this.getGgjx().hashCode());
		result = 37 * result
				+ (getPxh() == null ? 0 : this.getPxh().hashCode());
		result = 37 * result
				+ (getSfyx() == null ? 0 : this.getSfyx().hashCode());
		result = 37 * result + (getBz() == null ? 0 : this.getBz().hashCode());
		result = 37 * result
				+ (getDwlbm() == null ? 0 : this.getDwlbm().hashCode());
		return result;
	}

}