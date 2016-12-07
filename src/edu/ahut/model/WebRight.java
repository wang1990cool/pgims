package edu.ahut.model;



/**
 * Webright entity. @author MyEclipse Persistence Tools
 */

public class WebRight  implements java.io.Serializable {

	private static final long serialVersionUID = 9199753425377811673L;
	private String rightCode;
     private String rightName;
     private String rightFilter;
     private String memo;
     private String sfyx;


    // Constructors

    /** default constructor */
    public WebRight() {
    }

	/** minimal constructor */
    public WebRight(String rightCode) {
        this.rightCode = rightCode;
    }
    
    /** full constructor */
    public WebRight(String rightCode, String rightName, String rightFilter, String memo, String sfyx) {
        this.rightCode = rightCode;
        this.rightName = rightName;
        this.rightFilter = rightFilter;
        this.memo = memo;
        this.sfyx = sfyx;
    }

   
    // Property accessors

    public String getMemo() {
        return this.memo;
    }
    
    public String getRightCode() {
		return rightCode;
	}

	public void setRightCode(String rightCode) {
		this.rightCode = rightCode;
	}

	public String getRightName() {
		return rightName;
	}

	public void setRightName(String rightName) {
		this.rightName = rightName;
	}

	public String getRightFilter() {
		return rightFilter;
	}

	public void setRightFilter(String rightFilter) {
		this.rightFilter = rightFilter;
	}

	public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getSfyx() {
        return this.sfyx;
    }
    
    public void setSfyx(String sfyx) {
        this.sfyx = sfyx;
    }

}