package edu.ahut.model;

import java.util.Date;


/**
 * AuditDetail entity. @author MyEclipse Persistence Tools
 */

public class AuditDetail implements java.io.Serializable {

	private static final long serialVersionUID = 3913460480634990845L;
	private Long id;
	private String userName;
	private String userCname;
	private String proNo;
	private String auditOpinion;
	private Date auditDate;
	private String flagCode;
	private String flowCode;

	// Constructors

	/** default constructor */
	public AuditDetail() {
	}

	/** minimal constructor */
	public AuditDetail(String flagCode, String flowCode) {
		this.flagCode = flagCode;
		this.flowCode = flowCode;
	}

	/** full constructor */
	public AuditDetail(String userName, String userCname, String proNo,
			String auditOpinion, Date auditDate, String flagCode,
			String flowCode) {
		this.userName = userName;
		this.userCname = userCname;
		this.proNo = proNo;
		this.auditOpinion = auditOpinion;
		this.auditDate = auditDate;
		this.flagCode = flagCode;
		this.flowCode = flowCode;
	}

	// Property accessors

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserCname() {
		return this.userCname;
	}

	public void setUserCname(String userCname) {
		this.userCname = userCname;
	}

	public String getProNo() {
		return this.proNo;
	}

	public void setProNo(String proNo) {
		this.proNo = proNo;
	}

	public String getAuditOpinion() {
		return this.auditOpinion;
	}

	public void setAuditOpinion(String auditOpinion) {
		this.auditOpinion = auditOpinion;
	}

	public Date getAuditDate() {
		return this.auditDate;
	}

	public void setAuditDate(Date auditDate) {
		this.auditDate = auditDate;
	}

	public String getFlagCode() {
		return this.flagCode;
	}

	public void setFlagCode(String flagCode) {
		this.flagCode = flagCode;
	}

	public String getFlowCode() {
		return this.flowCode;
	}

	public void setFlowCode(String flowCode) {
		this.flowCode = flowCode;
	}

}