package edu.ahut.model;


import java.util.List;

public class CjxxData implements java.io.Serializable{

	private static final long serialVersionUID = 3999914230153693670L;
	private JxCjjlb jxCjjlbData;
	private List<JxCjmxb> jxCjmxbData;
	
	public CjxxData() {
		
	}

	public CjxxData(JxCjjlb jxCjjlbData, List<JxCjmxb> jxCjmxbData) {
		this.setJxCjjlbData(jxCjjlbData);
		this.setJxCjmxbData(jxCjmxbData);
	}

	public JxCjjlb getJxCjjlbData() {
		return jxCjjlbData;
	}

	public void setJxCjjlbData(JxCjjlb jxCjjlbData) {
		this.jxCjjlbData = jxCjjlbData;
	}

	public List<JxCjmxb> getJxCjmxbData() {
		return jxCjmxbData;
	}

	public void setJxCjmxbData(List<JxCjmxb> jxCjmxbData) {
		this.jxCjmxbData = jxCjmxbData;
	}
}
