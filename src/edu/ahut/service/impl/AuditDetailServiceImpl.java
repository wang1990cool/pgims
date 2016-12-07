package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.service.AuditDetailService;

public class AuditDetailServiceImpl implements AuditDetailService {

private BaseDAO<AuditDetail,String> auditDetailDao;
	
	public BaseDAO<AuditDetail, String> getAuditDetailDao() {
		return auditDetailDao;
	}

	public void setAuditDetailDao(BaseDAO<AuditDetail, String> auditDetailDao) {
		this.auditDetailDao = auditDetailDao;
	}
	
	public boolean add(AuditDetail instance) {
		try {
			auditDetailDao.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean update(AuditDetail instance) {
		try {
			auditDetailDao.merge(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean delete(AuditDetail instance) {
		try {
			auditDetailDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean checkFlowCode(String flowCode){
		String hql = "from AuditDetail where flowCode = '"+ flowCode +"'";
		List<AuditDetail> list = this.auditDetailDao.hqlQuery(hql);
		return list.size() > 0 ? true:false;
	}
	
	public List<AuditDetail> QueryByHql(String hql,String filters, String orders,
			Object... values) {
		if(filters != null && filters !="")
			hql += " where " + filters;
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return auditDetailDao.hqlQuery(hql, values);
	}
	
	public List<AuditDetail> Query(String filters, String orders,
			Object... values) {
		String hql = "from AuditDetail as model";
		return QueryByHql(hql, filters,  orders, values);
	}
	
	public boolean hqlExcute(String hql, Object... values) {
		return auditDetailDao.hqlExecute(hql, values);
	}
	
	@Override
	public Page<AuditDetail> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from AuditDetail as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return auditDetailDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return auditDetailDao.findAll("AuditDetail", filters, orders);
	}
	
	

}
