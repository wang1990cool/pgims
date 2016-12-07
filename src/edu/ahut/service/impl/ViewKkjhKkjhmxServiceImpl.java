package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewKkjhKkjhmx;
import edu.ahut.service.ViewKkjhKkjhmxService;

public class ViewKkjhKkjhmxServiceImpl implements ViewKkjhKkjhmxService {
	private BaseDAO<ViewKkjhKkjhmx, String> viewKkjhKkjhmxDao;

	public BaseDAO<ViewKkjhKkjhmx, String> getViewKkjhKkjhmxDao() {
		return viewKkjhKkjhmxDao;
	}

	public void setViewKkjhKkjhmxDao(
			BaseDAO<ViewKkjhKkjhmx, String> viewKkjhKkjhmxDao) {
		this.viewKkjhKkjhmxDao = viewKkjhKkjhmxDao;
	}

	@Override
	public ViewKkjhKkjhmx findbyId(int id) {
		return this.viewKkjhKkjhmxDao.findById(ViewKkjhKkjhmx.class,id) ;
	}

	@Override
	public List<ViewKkjhKkjhmx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewKkjhKkjhmx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewKkjhKkjhmx>) this.viewKkjhKkjhmxDao.hqlQuery(queryString, values);
	}

	public Page<ViewKkjhKkjhmx> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewKkjhKkjhmxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<ViewKkjhKkjhmx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewKkjhKkjhmx as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewKkjhKkjhmxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewKkjhKkjhmxDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return this.viewKkjhKkjhmxDao.findAll("ViewKkjhKkjhmx", filters, orders);
	}

}
