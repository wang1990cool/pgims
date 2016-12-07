package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjmxb;
import edu.ahut.service.ViewJxCjmxbService;

public class ViewJxCjmxbServiceImpl implements ViewJxCjmxbService {
	private  BaseDAO< ViewJxCjmxb, String>  viewJxCjmxbDao; 
	
	public BaseDAO<ViewJxCjmxb, String> getViewJxCjmxbDao() {
		return viewJxCjmxbDao;
	}

	public void setViewJxCjmxbDao(BaseDAO<ViewJxCjmxb, String> viewJxCjmxbDao) {
		this.viewJxCjmxbDao = viewJxCjmxbDao;
	}

	@Override
	public ViewJxCjmxb findbyId(int id) {
		return this.viewJxCjmxbDao.findById(ViewJxCjmxb.class,id) ;
	}

	@Override
	public List<ViewJxCjmxb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxCjmxb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxCjmxb>) this.viewJxCjmxbDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewJxCjmxb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxCjmxb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewJxCjmxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewJxCjmxbDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		// TODO Auto-generated method stub
		return this.viewJxCjmxbDao.findAll("ViewJxCjmxb", filters, orders);
	}
	
	

}
