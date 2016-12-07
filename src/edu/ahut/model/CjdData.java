package edu.ahut.model;


import java.util.List;

public class CjdData implements java.io.Serializable{

	private static final long serialVersionUID = 3999914230153693670L;
	private JxCjjlb jxCjjlbData;
	private JxSkxxb jxSkxxbData;
	private List<JxCjmxb> jxCjmxbData;
	
	public CjdData() {
		
	}

	public CjdData(JxCjjlb jxCjjlbData, JxSkxxb jxSkxxbData,List<JxCjmxb> jxCjmxbData) {
		this.setJxCjjlbData(jxCjjlbData);
		this.setJxSkxxbData(jxSkxxbData);
		this.setJxCjmxbData(jxCjmxbData);
	}

	public JxCjjlb getJxCjjlbData() {
		return jxCjjlbData;
	}

	public void setJxCjjlbData(JxCjjlb jxCjjlbData) {
		this.jxCjjlbData = jxCjjlbData;
	}
	
	public JxSkxxb getJxSkxxbData() {
		return jxSkxxbData;
	}

	public void setJxSkxxbData(JxSkxxb jxSkxxbData) {
		this.jxSkxxbData = jxSkxxbData;
	}

	public List<JxCjmxb> getJxCjmxbData() {
		return jxCjmxbData;
	}

	public void setJxCjmxbData(List<JxCjmxb> jxCjmxbData) {
		this.jxCjmxbData = jxCjmxbData;
	}
}
