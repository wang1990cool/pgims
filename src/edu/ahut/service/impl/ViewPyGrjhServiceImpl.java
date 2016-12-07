package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPyGrjh;
import edu.ahut.service.ViewPyGrjhService;

public class ViewPyGrjhServiceImpl implements ViewPyGrjhService {
	private  BaseDAO< ViewPyGrjh, String>  viewPyGrjhDao; 
	
	public BaseDAO<ViewPyGrjh, String> getViewPyGrjhDao() {
		return viewPyGrjhDao;
	}

	public void setViewPyGrjhDao(BaseDAO<ViewPyGrjh, String> viewPyGrjhDao) {
		this.viewPyGrjhDao = viewPyGrjhDao;
	}

	@Override
	public ViewPyGrjh findbyId(int id) {
		return this.viewPyGrjhDao.findById(ViewPyGrjh.class,id) ;
	}

	@Override
	public List<ViewPyGrjh> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewPyGrjh as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewPyGrjh>) this.viewPyGrjhDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewPyGrjh> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewPyGrjh as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewPyGrjhDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewPyGrjhDao.getAll();
	}


}
