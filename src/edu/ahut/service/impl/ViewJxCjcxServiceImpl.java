package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;
import edu.ahut.model.JxCjmxb;
import edu.ahut.model.ViewJxCjcx;
import edu.ahut.model.XsJcxxb;
import edu.ahut.service.JxCjmxbService;
import edu.ahut.service.ViewJxCjcxService;

public class ViewJxCjcxServiceImpl implements ViewJxCjcxService{

	private BaseDAO<ViewJxCjcx, String> viewJxCjcxDao;
	
	
	public BaseDAO<ViewJxCjcx, String> getXsJcxxbDao() {
		return viewJxCjcxDao;
	}
	
	public void setViewJxCjcxDao(BaseDAO<ViewJxCjcx, String> viewJxCjcxDao) {
		this.viewJxCjcxDao = viewJxCjcxDao;
	}
	
	public BaseDAO<ViewJxCjcx, String> getViewJxCjcxDao() {
		return viewJxCjcxDao;
	}

	public List<ViewJxCjcx> Query(String filters, String orders, Object... values) {
		String hql = "from ViewJxCjcx as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<ViewJxCjcx>) viewJxCjcxDao.hqlQuery(hql, values);
	}

	public Page<ViewJxCjcx> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from ViewJxCjcx as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return viewJxCjcxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	public boolean hqlExcute(String hql, Object... values) {
		return viewJxCjcxDao.hqlExecute(hql, values);
	}

	public List<?> getAll() {
		return viewJxCjcxDao.getAll();
	}
	
	public ViewJxCjcx findById(java.lang.Long id) {
		return viewJxCjcxDao.findById(ViewJxCjcx.class,id);
	}

}
