package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditFlowLink;

public interface AuditFlowLinkService {
   public AuditFlowLink findNextFlagCode(String flowCode,String flagCode,String roleCode);
	
	public  List<AuditFlowLink> findByRoleCodeAndFlowCode(String roleCode,String flowCode);
	
	public boolean add(AuditFlowLink instance);

	public boolean update(AuditFlowLink instance);

	public boolean delete(AuditFlowLink instance);
	
	public boolean checkFlagCode(String flowCode,String flagCode,String roleCode);
	
	public boolean hqlExcute(String hql, Object...values);
	
	public Page<AuditFlowLink> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<AuditFlowLink> QueryByHql(String hql,String filters, String orders, Object... values);
	
	public List<AuditFlowLink> Query(String filters, String orders, Object... values);
	
	public List<?> getAll(String filters,String orders);
}
