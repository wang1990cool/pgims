package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditFlowLink;
import edu.ahut.service.AuditFlowLinkService;

public class AuditFlowLinkServiceImpl implements AuditFlowLinkService {

	private BaseDAO<AuditFlowLink,String> auditFlowLinkDao;

	public BaseDAO<AuditFlowLink, String> getAuditFlowLinkDao() {
		return auditFlowLinkDao;
	}

	public void setAuditFlowLinkDao(BaseDAO<AuditFlowLink, String> auditFlowLinkDao) {
		this.auditFlowLinkDao = auditFlowLinkDao;
	}

	public boolean add(AuditFlowLink instance) {
		try {
			auditFlowLinkDao.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean update(AuditFlowLink instance) {
		try {
			auditFlowLinkDao.merge(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean delete(AuditFlowLink instance) {
		try {
			auditFlowLinkDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean checkFlagCode(String flowCode,String flagCode,String roleCode){
		String hql = "from AuditFlowLink where flagCode = '"+ flagCode 
				+ "' and auditRole='" + roleCode + "' and flowCode='" + flowCode + "'";
		List<AuditFlowLink> list = this.auditFlowLinkDao.hqlQuery(hql);
		return list.size() > 0 ? true:false;
	}
	
	public List<AuditFlowLink> QueryByHql(String hql,String filters, String orders,
			Object... values) {
		if(filters != null && filters !="")
			hql += " where " + filters;
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return auditFlowLinkDao.hqlQuery(hql, values);
	}
	
	public List<AuditFlowLink> Query(String filters, String orders,
			Object... values) {
		String hql = "from AuditFlowLink as model";
		return QueryByHql(hql, filters,  orders, values);
	}
	
	public boolean hqlExcute(String hql, Object... values) {
		return auditFlowLinkDao.hqlExecute(hql, values);
	}
	
	@Override
	public Page<AuditFlowLink> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from AuditFlowLink as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return auditFlowLinkDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.auditFlowLinkDao.findAll("AuditFlowLink",filters,orders);
	}

	@Override
	public List<AuditFlowLink> findByRoleCodeAndFlowCode(String roleCode,
			String flowCode) {
		String hql = "from AuditFlowLink where auditRole=? and flowCode=?";
		return this.auditFlowLinkDao.find(hql, new Object[]{roleCode,flowCode});
	}

	@Override
	public AuditFlowLink findNextFlagCode(String flowCode, String flagCode,String roleCode) {
		String hql = "from AuditFlowLink where flowCode=? and flagCode=? and auditRole=?";
		return this.auditFlowLinkDao.find(hql, new Object[]{flowCode,flagCode,roleCode}).get(0);
	}
}
