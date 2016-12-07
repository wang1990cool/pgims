package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXsJcxx;
import edu.ahut.service.ViewXsJcxxService;

public class ViewXsJcxxServiceImpl implements ViewXsJcxxService {
	private BaseDAO<ViewXsJcxx, String> viewXsJcxxDao; 
	
	public BaseDAO<ViewXsJcxx, String> getViewXsJcxxDao() {
		return viewXsJcxxDao;
	}

	public void setViewXsJcxxDao(BaseDAO<ViewXsJcxx, String> viewXsJcxxDao) {
		this.viewXsJcxxDao = viewXsJcxxDao;
	}

	@Override
	public ViewXsJcxx findbyId(int id) {
		return this.viewXsJcxxDao.findById(ViewXsJcxx.class,id) ;
	}

	@Override
	public List<ViewXsJcxx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXsJcxx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXsJcxx>) this.viewXsJcxxDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewXsJcxx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXsJcxx as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewXsJcxxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXsJcxxDao.getAll();
	}

}
