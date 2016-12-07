package edu.ahut.model;

/**
 * AuditFlowAll entity. @author MyEclipse Persistence Tools
 */

public class AuditFlow implements java.io.Serializable {


	private static final long serialVersionUID = 3162109616903880168L;
	private Long id;
	private String flowName;
	private String flowCode;
	private String bz;

	// Constructors

	/** default constructor */
	public AuditFlow() {
	}

	/** minimal constructor */
	public AuditFlow(String flowName, String flowCode) {
		this.flowName = flowName;
		this.flowCode = flowCode;
	}

	/** full constructor */
	public AuditFlow(String flowName, String flowCode, String bz) {
		this.flowName = flowName;
		this.flowCode = flowCode;
		this.bz = bz;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFlowName() {
		return this.flowName;
	}

	public void setFlowName(String flowName) {
		this.flowName = flowName;
	}

	public String getFlowCode() {
		return this.flowCode;
	}

	public void setFlowCode(String flowCode) {
		this.flowCode = flowCode;
	}

	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

}