package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjjlzt;
import edu.ahut.service.ViewJxCjjlztService;

public class ViewJxCjjlztServiceImpl implements ViewJxCjjlztService{

	private  BaseDAO< ViewJxCjjlzt, String>  viewJxCjjlztDao; 
	
	public BaseDAO<ViewJxCjjlzt, String> getViewJxCjjlztDao() {
		return viewJxCjjlztDao;
	}

	public void setViewJxCjjlztDao(BaseDAO<ViewJxCjjlzt, String> viewJxCjjlztDao) {
		this.viewJxCjjlztDao = viewJxCjjlztDao;
	}

	public ViewJxCjjlzt findbyId(int id) {
		return this.viewJxCjjlztDao.findById(ViewJxCjjlzt.class,id) ;
	}

	public List<ViewJxCjjlzt> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxCjjlzt as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxCjjlzt>) this.viewJxCjjlztDao.hqlQuery(queryString, values);
	}
	
	public Page<ViewJxCjjlzt> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxCjjlzt as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewJxCjjlztDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return this.viewJxCjjlztDao.getAll();
	}

	public List<?> getAll(String filters, String orders) {
		// TODO Auto-generated method stub
		return this.viewJxCjjlztDao.findAll("ViewJxCjjlzt", filters, orders);
	}
}
