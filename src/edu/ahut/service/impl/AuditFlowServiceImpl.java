package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.AuditFlow;
import edu.ahut.service.AuditFlowService;

public class AuditFlowServiceImpl implements AuditFlowService {

private BaseDAO<AuditFlow,String> auditFlowDao;
	
	public BaseDAO<AuditFlow, String> getAuditFlowDao() {
		return auditFlowDao;
	}

	public void setAuditFlowDao(BaseDAO<AuditFlow, String> auditFlowDao) {
		this.auditFlowDao = auditFlowDao;
	}
	
	public boolean add(AuditFlow instance) {
		try {
			auditFlowDao.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean update(AuditFlow instance) {
		try {
			auditFlowDao.merge(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean delete(AuditFlow instance) {
		try {
			auditFlowDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean checkFlowCode(String flowCode){
		String hql = "from AuditFlow where flowCode = '"+ flowCode +"'";
		List<AuditFlow> list = this.auditFlowDao.hqlQuery(hql);
		return list.size() > 0 ? true:false;
	}
	
	public List<AuditFlow> QueryByHql(String hql,String filters, String orders,
			Object... values) {
		if(filters != null && filters !="")
			hql += " where " + filters;
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return auditFlowDao.hqlQuery(hql, values);
	}
	
	public List<AuditFlow> Query(String filters, String orders,
			Object... values) {
		String hql = "from AuditFlow as model";
		return QueryByHql(hql, filters,  orders, values);
	}
	
	public boolean hqlExcute(String hql, Object... values) {
		return auditFlowDao.hqlExecute(hql, values);
	}
	
	@Override
	public Page<AuditFlow> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from AuditFlow as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return auditFlowDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public void deleteByFlowCodes(String flowCodes) {
		 String[] flowCodeArray = flowCodes.split(",");
		for(int i = 0; i < flowCodeArray.length; i++){
			String flowHql = "delete AuditFlow where flowCode = '" + flowCodeArray[i]  + "'";
			this.auditFlowDao.hqlExecute(flowHql);
			String linkHql = "delete AuditFlowLink where flowCode = '" +  flowCodeArray[i]  + "'";
			this.auditFlowDao.hqlExecute(linkHql);
		}
		
	}

	@Override
	public void submit(AuditDetail auditDetail, String ztm, String zt,
			String targetTab) {
		this.auditFlowDao.saveEntity(auditDetail);
	
	}
}
