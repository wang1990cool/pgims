package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXxJxdw;
import edu.ahut.service.ViewXxJxdwService;

public class ViewXxJxdwServiceImpl implements ViewXxJxdwService {
	private BaseDAO<ViewXxJxdw, String> viewXxJxdwDao;
	
	public BaseDAO<ViewXxJxdw, String> getViewXxJxdwDao() {
		return viewXxJxdwDao;
	}

	public void setViewXxJxdwDao(BaseDAO<ViewXxJxdw, String> viewXxJxdwDao) {
		this.viewXxJxdwDao = viewXxJxdwDao;
	}

	@Override
	public ViewXxJxdw findbyId(int id) {
		return this.viewXxJxdwDao.findById(ViewXxJxdw.class,id) ;
	}

	@Override
	public List<ViewXxJxdw> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXxJxdw as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXxJxdw>) this.viewXxJxdwDao.hqlQuery(queryString, values);
	}

	public Page<ViewXxJxdw> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewXxJxdwDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<ViewXxJxdw> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXxJxdw as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewXxJxdwDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXxJxdwDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return this.viewXxJxdwDao.findAll("ViewXxJxdw", filters, orders);
	}

}
