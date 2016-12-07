package edu.ahut.model;

import java.util.List;

public class WebRole implements java.io.Serializable {
	private static final long serialVersionUID = -3682784821265470458L;
	private String roleCode;
	private String roleName;
	private String memo;
	private List<?> webMenus;
	private List<?> webRights;
	
	public WebRole() {
	}

	public WebRole(String roleName, String memo, List<?> webMenus){
		this.roleName = roleName;
		this.memo = memo;
		this.webMenus = webMenus;
	}

	public String getRoleCode() {
		return this.roleCode;
	}

	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getMemo() {
		return this.memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public List<?> getWebMenus() {
		return this.webMenus;
	}

	public void setWebMenus(List<?> webMenus) {
		this.webMenus = webMenus;
	}

	public List<?> getWebRights() {
		return webRights;
	}

	public void setWebRights(List<?> webRights) {
		this.webRights = webRights;
	}
	
}