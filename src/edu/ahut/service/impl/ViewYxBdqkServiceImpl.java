package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxBdqk;
import edu.ahut.service.ViewYxBdqkService;

public class ViewYxBdqkServiceImpl implements ViewYxBdqkService{

	private BaseDAO<ViewYxBdqk, String> viewYxBdqkDao;
	
	public BaseDAO<ViewYxBdqk, String> getViewYxBdqkDao() {
		return viewYxBdqkDao;
	}

	public void setViewYxBdqkDao(BaseDAO<ViewYxBdqk, String> viewYxBdqkDao) {
		this.viewYxBdqkDao = viewYxBdqkDao;
	}

	public boolean add(ViewYxBdqk instance) {
		try {
			viewYxBdqkDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<ViewYxBdqk> Query(String filters, String orders, Object... values) {
		String hql = "from ViewYxBdqk as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<ViewYxBdqk>) viewYxBdqkDao.hqlQuery(hql, values);
	}

	public Page<ViewYxBdqk> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from ViewYxBdqk as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return viewYxBdqkDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return viewYxBdqkDao.getAll();
	}
	
}
