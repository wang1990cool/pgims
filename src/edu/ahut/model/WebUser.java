package edu.ahut.model;



/**
 * Webuser entity. @author MyEclipse Persistence Tools
 */

public class WebUser  implements java.io.Serializable {


	private static final long serialVersionUID = 8884958326727730490L;
	// Fields    
	 private String userName;
	 private String userCName;
	 private String userPwd;
 	 private String mobile;
	 private String email;
     private Integer isLock;
     private String gh;
     private String xm;
     private String szdwh;
     private String szdw;
     private WebRole webRole;
     private WebRole roleName;

    // Constructors

    /** default constructor */
    public WebUser() {
    }

	/** minimal constructor */
    public WebUser(String userName) {
        this.userName = userName;
    }
    
    /** full constructor */
    public WebUser( WebRole webRole,WebRole roleName,String userName, String userCName, 
    		String userPwd, String mobile, String email, Integer isLock, 
    		String gh, String xm, String szdwh, String szdw) {
        this.userName = userName;
        this.userCName = userCName;
        this.userPwd = userPwd;
        this.mobile = mobile;
        this.email = email;
        this.isLock = isLock;
        this.gh = gh;
        this.xm = xm;
        this.szdwh = szdwh;
        this.szdw = szdw;
        this.webRole = webRole;
        this.roleName = roleName;
    }


    public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserCName() {
		return userCName;
	}

	public void setUserCName(String userCName) {
		this.userCName = userCName;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public Integer getIsLock() {
		return isLock;
	}

	public void setIsLock(Integer isLock) {
		this.isLock = isLock;
	}

	public WebRole getWebRole() {
		return webRole;
	}

	public void setWebRole(WebRole webRole) {
		this.webRole = webRole;
	}
	
	public WebRole getRoleName() {
		return roleName;
	}

	public void setRoleName(WebRole roleName) {
		this.roleName = roleName;
	}

	public String getMobile() {
        return this.mobile;
    }
    
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }



    public String getGh() {
        return this.gh;
    }
    
    public void setGh(String gh) {
        this.gh = gh;
    }

    public String getXm() {
        return this.xm;
    }
    
    public void setXm(String xm) {
        this.xm = xm;
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
}