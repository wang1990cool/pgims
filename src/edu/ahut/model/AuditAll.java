package edu.ahut.model;



/**
 * AuditAll entity. @author MyEclipse Persistence Tools
 */

public class AuditAll  implements java.io.Serializable {


	private static final long serialVersionUID = -4434288044604340462L;
	private Long id;
     private String auditName;
     private String flowCode;
     private String bz;


    // Constructors

    /** default constructor */
    public AuditAll() {
    }

	/** minimal constructor */
    public AuditAll(String auditName, String flowCode) {
        this.auditName = auditName;
        this.flowCode = flowCode;
    }
    
    /** full constructor */
    public AuditAll(String auditName, String flowCode, String bz) {
        this.auditName = auditName;
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

    public String getAuditName() {
        return this.auditName;
    }
    
    public void setAuditName(String auditName) {
        this.auditName = auditName;
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