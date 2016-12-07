package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPkjlPk;
import edu.ahut.service.ViewPkjlPkService;

public class ViewPkjlPkServiceImpl implements ViewPkjlPkService {
	private BaseDAO<ViewPkjlPk,String> viewPkjlPkDao; 

	public BaseDAO<ViewPkjlPk, String> getViewPkjlPkDao() {
		return viewPkjlPkDao;
	}


	public void setViewPkjlPkDao(BaseDAO<ViewPkjlPk, String> viewPkjlPkDao) {
		this.viewPkjlPkDao = viewPkjlPkDao;
	}


	@Override
	public ViewPkjlPk findbyId(int id) {
		return this.viewPkjlPkDao.findById(ViewPkjlPk.class,id) ;
	}
	

	@Override
	public List<ViewPkjlPk> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewPkjlPk as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewPkjlPk>) this.viewPkjlPkDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewPkjlPk> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewPkjlPk as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewPkjlPkDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewPkjlPkDao.getAll();
	}


	@Override
	public List<?> findAll(String modelName, String filters, String orders) {
		return this.viewPkjlPkDao.findAll("ViewPkjlPk", filters, orders);
	}
	
}
