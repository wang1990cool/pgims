package edu.ahut.model;

public class ZdGjdqm implements java.io.Serializable {

	private static final long serialVersionUID = -1927825472252031132L;
	private long id;
	private String gjdqm;
	private String gjdqmc;
	private long pxh;
	private String sfyx;
	private String bz;
	private String ywjc;
	private String lzfdm;
	private String szfdm;
	private String zwywqc;

	public ZdGjdqm() {
	}

	public ZdGjdqm(String gjdqm) {
		this.gjdqm = gjdqm;
	}

	public ZdGjdqm(String gjdqm, String gjdqmc, long pxh, String sfyx,
			String bz, String ywjc, String lzfdm, String szfdm, String zwywqc) {
		this.gjdqm = gjdqm;
		this.gjdqmc = gjdqmc;
		this.pxh = pxh;
		this.sfyx = sfyx;
		this.bz = bz;
		this.ywjc = ywjc;
		this.lzfdm = lzfdm;
		this.szfdm = szfdm;
		this.zwywqc = zwywqc;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getGjdqm() {
		return this.gjdqm;
	}

	public void setGjdqm(String gjdqm) {
		this.gjdqm = gjdqm;
	}

	public String getGjdqmc() {
		return this.gjdqmc;
	}

	public void setGjdqmc(String gjdqmc) {
		this.gjdqmc = gjdqmc;
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

	public String getYwjc() {
		return this.ywjc;
	}

	public void setYwjc(String ywjc) {
		this.ywjc = ywjc;
	}

	public String getLzfdm() {
		return this.lzfdm;
	}

	public void setLzfdm(String lzfdm) {
		this.lzfdm = lzfdm;
	}

	public String getSzfdm() {
		return this.szfdm;
	}

	public void setSzfdm(String szfdm) {
		this.szfdm = szfdm;
	}

	public String getZwywqc() {
		return this.zwywqc;
	}

	public void setZwywqc(String zwywqc) {
		this.zwywqc = zwywqc;
	}

}