package edu.ahut.model;


public class ZdPyccm implements java.io.Serializable {


	private static final long serialVersionUID = -412983112299531030L;
	private long id;
	private String pyccm;
	private String pycc;
	private long pxh;
	private String sfyx;
	private String bz;

	public ZdPyccm() {
	}

	public ZdPyccm(String pyccm) {
		this.pyccm = pyccm;
	}

	public ZdPyccm(String pyccm, String pycc, long pxh, String sfyx, String bz) {
		this.pyccm = pyccm;
		this.pycc = pycc;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
	}


	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPyccm() {
		return this.pyccm;
	}

	public void setPyccm(String pyccm) {
		this.pyccm = pyccm;
	}

	public String getPycc() {
		return this.pycc;
	}

	public void setPycc(String pycc) {
		this.pycc = pycc;
	}

	public long getPxh() {
		return this.pxh;
	}

	public void setPxh(long pxh) {
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