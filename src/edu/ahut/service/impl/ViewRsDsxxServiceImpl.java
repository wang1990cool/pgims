package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewRsDsxx;
import edu.ahut.service.ViewRsDsxxService;

/**
 * ViewRsDsxxId entity. @author MyEclipse Persistence Tools
 */

public class ViewRsDsxxServiceImpl  implements ViewRsDsxxService {
	private BaseDAO<ViewRsDsxx, String> viewXsJcxxDao; 
	
	public BaseDAO<ViewRsDsxx, String> getViewRsDsxxDao() {
		return viewXsJcxxDao;
	}

	public void setViewRsDsxxDao(BaseDAO<ViewRsDsxx, String> viewXsJcxxDao) {
		this.viewXsJcxxDao = viewXsJcxxDao;
	}

	@Override
	public ViewRsDsxx findbyId(Long id) {
		return this.viewXsJcxxDao.findById(ViewRsDsxx.class,id) ;
	}

	@Override
	public List<ViewRsDsxx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewRsDsxx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewRsDsxx>) this.viewXsJcxxDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewRsDsxx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewRsDsxx as model";
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