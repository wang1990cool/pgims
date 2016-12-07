package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjmx;
import edu.ahut.service.ViewJxCjmxService;

public class ViewJxCjmxServiceImpl implements ViewJxCjmxService {
	private  BaseDAO< ViewJxCjmx, String>  viewJxCjmxDao; 
	
	public BaseDAO<ViewJxCjmx, String> getViewJxCjmxDao() {
		return viewJxCjmxDao;
	}

	public void setViewJxCjmxDao(BaseDAO<ViewJxCjmx, String> viewJxCjmxDao) {
		this.viewJxCjmxDao = viewJxCjmxDao;
	}

	@Override
	public ViewJxCjmx findbyId(int id) {
		return this.viewJxCjmxDao.findById(ViewJxCjmx.class,id) ;
	}

	@Override
	public List<ViewJxCjmx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxCjmx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxCjmx>) this.viewJxCjmxDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewJxCjmx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxCjmx as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewJxCjmxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewJxCjmxDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		// TODO Auto-generated method stub
		return this.viewJxCjmxDao.findAll("ViewJxCjmx", filters, orders);
	}
	
	

}
