package edu.ahut.model;

public class Pksj {
	private String monCourse;
	private String tuesCourse;
	private String wedCourse;
	private String thurCourse;
	private String friCourse;
	private String satCourse;
	private String sunCourse;
	
	
	public Pksj() {
	}


	public Pksj(String monCourse, String tuesCourse, String wedCourse,
			String thurCourse, String friCourse, String satCourse,
			String sunCourse) {
		super();
		this.monCourse = monCourse;
		this.tuesCourse = tuesCourse;
		this.wedCourse = wedCourse;
		this.thurCourse = thurCourse;
		this.friCourse = friCourse;
		this.satCourse = satCourse;
		this.sunCourse = sunCourse;
	}


	public String getMonCourse() {
		return monCourse;
	}


	public void setMonCourse(String monCourse) {
		this.monCourse = monCourse;
	}


	public String getTuesCourse() {
		return tuesCourse;
	}


	public void setTuesCourse(String tuesCourse) {
		this.tuesCourse = tuesCourse;
	}


	public String getWedCourse() {
		return wedCourse;
	}


	public void setWedCourse(String wedCourse) {
		this.wedCourse = wedCourse;
	}


	public String getThurCourse() {
		return thurCourse;
	}


	public void setThurCourse(String thurCourse) {
		this.thurCourse = thurCourse;
	}


	public String getFriCourse() {
		return friCourse;
	}


	public void setFriCourse(String friCourse) {
		this.friCourse = friCourse;
	}


	public String getSatCourse() {
		return satCourse;
	}


	public void setSatCourse(String satCourse) {
		this.satCourse = satCourse;
	}


	public String getSunCourse() {
		return sunCourse;
	}


	public void setSunCourse(String sunCourse) {
		this.sunCourse = sunCourse;
	}
	
}
