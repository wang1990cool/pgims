package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPkJxrw;
import edu.ahut.service.ViewPkJxrwService;

public class ViewPkJxrwServiceImpl implements ViewPkJxrwService {
	private BaseDAO<ViewPkJxrw,String> viewPkJxrwDao; 
	
	public BaseDAO<ViewPkJxrw, String> getViewPkJxrwDao() {
		return viewPkJxrwDao;
	}


	public void setViewPkJxrwDao(BaseDAO<ViewPkJxrw, String> viewPkJxrwDao) {
		this.viewPkJxrwDao = viewPkJxrwDao;
	}


	@Override
	public ViewPkJxrw findbyId(int id) {
		return this.viewPkJxrwDao.findById(ViewPkJxrw.class,id) ;
	}
	

	@Override
	public List<ViewPkJxrw> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewPkJxrw as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewPkJxrw>) this.viewPkJxrwDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewPkJxrw> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewPkJxrw as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewPkJxrwDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewPkJxrwDao.getAll();
	}


	@Override
	public List<?> findAll(String modelName, String filters, String orders) {
		return this.findAll("ViewPkJxrw", filters, orders);
	}
	
}
