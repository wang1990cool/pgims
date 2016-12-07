package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxJfqkAll;
import edu.ahut.service.ViewYxJfqkAllService;

public class ViewYxJfqkAllServiceImpl implements ViewYxJfqkAllService{

	private BaseDAO<ViewYxJfqkAll, String> viewYxJfqkAllDao;
	
	public BaseDAO<ViewYxJfqkAll, String> getViewYxJfqkAllDao() {
		return viewYxJfqkAllDao;
	}

	public void setViewYxJfqkAllDao(BaseDAO<ViewYxJfqkAll, String> viewYxJfqkAllDao) {
		this.viewYxJfqkAllDao = viewYxJfqkAllDao;
	}

	public boolean add(ViewYxJfqkAll instance) {
		try {
			viewYxJfqkAllDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<ViewYxJfqkAll> Query(String filters, String orders, Object... values) {
		String hql = "from ViewYxJfqkAll as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<ViewYxJfqkAll>) viewYxJfqkAllDao.hqlQuery(hql, values);
	}

	public Page<ViewYxJfqkAll> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from ViewYxJfqkAll as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return viewYxJfqkAllDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return viewYxJfqkAllDao.getAll();
	}
	
}
