package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.WebRole;
import edu.ahut.service.WebRoleService;

public class WebRoleServiceImpl implements WebRoleService{
	private BaseDAO<WebRole, String> webRoleDao;

	public BaseDAO<WebRole, String> getWebRoleDao() {
		return webRoleDao;
	}

	public void setWebRoleDao(BaseDAO<WebRole, String> webRoleDao) {
		this.webRoleDao = webRoleDao;
	}

	public WebRole findByRoleCode(String roleCode) {
		String hql = "from WebRole where roleCode = '" + roleCode + "'";
		return webRoleDao.hqlQuery(hql).get(0);
	}
	
	public boolean add(WebRole instance) {
		try {
			webRoleDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(WebRole instance){
		try {
			webRoleDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(WebRole instance){
		try {
			webRoleDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<WebRole> Query(String filters, String orders, Object... values) {
    	String hql = "from WebRole as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return webRoleDao.hqlQuery(hql, values);
	}

	public Page<WebRole> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
         String hql = "from WebRole as model";
		
		if(filters != null)
			hql += " where " + filters;
		
		if(orders != null)
			hql += " order by " + orders;
	
		return webRoleDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}

	public List<?> getAll() {
		return this.webRoleDao.getAll();
	}

	@Override
	public boolean hqlExecute(String hql, Object... values) {
		return this.webRoleDao.hqlExecute(hql, values);
	}

	@Override
	public List<WebRole> hqlQuery(String hql, Object... values) {
		return this.webRoleDao.hqlQuery(hql, values);
	}
	
}
