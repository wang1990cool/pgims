package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.AuditFlow;

public interface AuditFlowService {
	public void submit(AuditDetail auditDetail,String ztm,String zt, String targetTab);
	
	public void deleteByFlowCodes(String flowCodes);
	
	public boolean add(AuditFlow instance);

	public boolean update(AuditFlow instance);

	public boolean delete(AuditFlow instance);
	
	public boolean checkFlowCode(String flowCode);
	
	public boolean hqlExcute(String hql, Object...values);
	
	public Page<AuditFlow> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<AuditFlow> QueryByHql(String hql,String filters, String orders, Object... values);
	
	public List<AuditFlow> Query(String filters, String orders, Object... values);
}
