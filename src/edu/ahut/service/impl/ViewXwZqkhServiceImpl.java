package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwZqkh;
import edu.ahut.service.ViewXwZqkhService;


public class ViewXwZqkhServiceImpl implements ViewXwZqkhService {
	
	private BaseDAO<ViewXwZqkh,String> viewXwZqkhDao;
	
	public BaseDAO<ViewXwZqkh, String> getViewXwZqkhDao() {
		return viewXwZqkhDao;
	}

	public void setViewXwZqkhDao(BaseDAO<ViewXwZqkh, String> viewXwZqkhDao) {
		this.viewXwZqkhDao = viewXwZqkhDao;
	}


	@Override
	public boolean add(ViewXwZqkh instance) {
		try {
			viewXwZqkhDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	

	@Override
	public boolean update(ViewXwZqkh instance){
		try {
			viewXwZqkhDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwZqkh> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwZqkh as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwZqkh>) this.viewXwZqkhDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwZqkh> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwZqkh as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwZqkhDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwZqkhDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwZqkhDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwZqkhDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwZqkh where xh='" + xh + "'";
		List<?> list = this.viewXwZqkhDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}
	@Override
	public List<?> getAll(String filter, String order) {
		return this.viewXwZqkhDao.findAll("ViewXwZqkh", filter, order);
	}


}
