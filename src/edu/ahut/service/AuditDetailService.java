package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;

public interface AuditDetailService {
	
	public boolean add(AuditDetail instance);

	public boolean update(AuditDetail instance);

	public boolean delete(AuditDetail instance);
	
	public boolean checkFlowCode(String flowCode);
	
	public boolean hqlExcute(String hql, Object...values);
	
	public Page<AuditDetail> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<AuditDetail> QueryByHql(String hql,String filters, String orders, Object... values);
	
	public List<AuditDetail> Query(String filters, String orders, Object... values);
	
	public List<?> getAll(String filters,String orders);
}
