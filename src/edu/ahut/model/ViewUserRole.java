package edu.ahut.model;

/**
 * ViewUserRole entity. @author MyEclipse Persistence Tools
 */

public class ViewUserRole implements java.io.Serializable {

	private static final long serialVersionUID = 4549871243668318951L;
	private Double id;
	private String username;
	private String usercname;
	private String szdwh;
	private String szdw;
	private String xzzw;
	private String zcm;
	private String zc;
	private String flowCode;
	private String flagCode;
	private String nextFlagCode;
	private String auditScope;
	private Boolean isPass;
	private String rolecode;
	private String rolename;
	private String roleright;
	private String rightName;
	private String condition;

	// Constructors

	/** default constructor */
	public ViewUserRole() {
	}

	/** minimal constructor */
	public ViewUserRole(String username, String flowCode, String flagCode,
			String rightName) {
		this.username = username;
		this.flowCode = flowCode;
		this.flagCode = flagCode;
		this.rightName = rightName;
	}

	/** full constructor */
	public ViewUserRole(String username, String usercname, String szdwh,
			String szdw, String xzzw, String zcm, String zc, String flowCode,
			String flagCode, String nextFlagCode, String auditScope,
			Boolean isPass, String rolecode, String rolename, String roleright,
			String rightName, String condition) {
		this.username = username;
		this.usercname = usercname;
		this.szdwh = szdwh;
		this.szdw = szdw;
		this.xzzw = xzzw;
		this.zcm = zcm;
		this.zc = zc;
		this.flowCode = flowCode;
		this.flagCode = flagCode;
		this.nextFlagCode = nextFlagCode;
		this.auditScope = auditScope;
		this.isPass = isPass;
		this.rolecode = rolecode;
		this.rolename = rolename;
		this.roleright = roleright;
		this.rightName = rightName;
		this.condition = condition;
	}

	// Property accessors

	public Double getId() {
		return this.id;
	}

	public void setId(Double id) {
		this.id = id;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsercname() {
		return this.usercname;
	}

	public void setUsercname(String usercname) {
		this.usercname = usercname;
	}

	public String getSzdwh() {
		return this.szdwh;
	}

	public void setSzdwh(String szdwh) {
		this.szdwh = szdwh;
	}

	public String getSzdw() {
		return this.szdw;
	}

	public void setSzdw(String szdw) {
		this.szdw = szdw;
	}

	public String getXzzw() {
		return this.xzzw;
	}

	public void setXzzw(String xzzw) {
		this.xzzw = xzzw;
	}

	public String getZcm() {
		return this.zcm;
	}

	public void setZcm(String zcm) {
		this.zcm = zcm;
	}

	public String getZc() {
		return this.zc;
	}

	public void setZc(String zc) {
		this.zc = zc;
	}

	public String getFlowCode() {
		return this.flowCode;
	}

	public void setFlowCode(String flowCode) {
		this.flowCode = flowCode;
	}

	public String getFlagCode() {
		return this.flagCode;
	}

	public void setFlagCode(String flagCode) {
		this.flagCode = flagCode;
	}

	public String getNextFlagCode() {
		return this.nextFlagCode;
	}

	public void setNextFlagCode(String nextFlagCode) {
		this.nextFlagCode = nextFlagCode;
	}

	public String getAuditScope() {
		return this.auditScope;
	}

	public void setAuditScope(String auditScope) {
		this.auditScope = auditScope;
	}

	public Boolean getIsPass() {
		return this.isPass;
	}

	public void setIsPass(Boolean isPass) {
		this.isPass = isPass;
	}

	public String getRolecode() {
		return this.rolecode;
	}

	public void setRolecode(String rolecode) {
		this.rolecode = rolecode;
	}

	public String getRolename() {
		return this.rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	public String getRoleright() {
		return this.roleright;
	}

	public void setRoleright(String roleright) {
		this.roleright = roleright;
	}

	public String getRightName() {
		return this.rightName;
	}

	public void setRightName(String rightName) {
		this.rightName = rightName;
	}

	public String getCondition() {
		return this.condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

}