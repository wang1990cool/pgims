package edu.ahut.model;

/**
 * AuditFlow entity. @author MyEclipse Persistence Tools
 */

public class AuditFlowLink implements java.io.Serializable {


	private static final long serialVersionUID = 5659683734522387784L;
	private Long id;
	private Long oid;
	private Integer isPass;
	private String memo;
	private String flowCode;
	private String auditRole;
	private String auditScope;
	private String nextFlagCode;
	private String flagCode;
	private String nodeName;
	// Constructors

	/** default constructor */
	public AuditFlowLink() {
	}

	/** minimal constructor */
	public AuditFlowLink(String flowCode, String flagCode) {
		this.flowCode = flowCode;
		this.flagCode = flagCode;
	}

	/** full constructor */
	public AuditFlowLink(Long oid, Integer isPass, String memo, String flowCode,
			String auditRole, String auditScope, String nextFlagCode,
			String flagCode,String nodeName) {
		this.oid = oid;
		this.isPass = isPass;
		this.memo = memo;
		this.flowCode = flowCode;
		this.auditRole = auditRole;
		this.auditScope = auditScope;
		this.nextFlagCode = nextFlagCode;
		this.flagCode = flagCode;
		this.nodeName = nodeName;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getOid() {
		return this.oid;
	}

	public void setOid(Long oid) {
		this.oid = oid;
	}

	public Integer getIsPass() {
		return this.isPass;
	}

	public void setIsPass(Integer isPass) {
		this.isPass = isPass;
	}

	public String getMemo() {
		return this.memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public String getFlowCode() {
		return this.flowCode;
	}

	public void setFlowCode(String flowCode) {
		this.flowCode = flowCode;
	}

	public String getAuditRole() {
		return this.auditRole;
	}

	public void setAuditRole(String auditRole) {
		this.auditRole = auditRole;
	}

	public String getAuditScope() {
		return this.auditScope;
	}

	public void setAuditScope(String auditScope) {
		this.auditScope = auditScope;
	}

	public String getNextFlagCode() {
		return this.nextFlagCode;
	}

	public void setNextFlagCode(String nextFlagCode) {
		this.nextFlagCode = nextFlagCode;
	}

	public String getFlagCode() {
		return this.flagCode;
	}

	public void setFlagCode(String flagCode) {
		this.flagCode = flagCode;
	}

	public String getNodeName() {
		return nodeName;
	}

	public void setNodeName(String nodeName) {
		this.nodeName = nodeName;
	}
}