package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewSkxxPk;
import edu.ahut.service.ViewSkxxPkService;

public class ViewSkxxPkServiceImpl implements ViewSkxxPkService {
	private BaseDAO<ViewSkxxPk,String> viewSkxxPkDao; 
	
	public BaseDAO<ViewSkxxPk, String> getViewSkxxPkDao() {
		return viewSkxxPkDao;
	}


	public void setViewSkxxPkDao(BaseDAO<ViewSkxxPk, String> viewSkxxPkDao) {
		this.viewSkxxPkDao = viewSkxxPkDao;
	}


	@Override
	public ViewSkxxPk findbyId(int id) {
		return this.viewSkxxPkDao.findById(ViewSkxxPk.class,id) ;
	}
	

	@Override
	public List<ViewSkxxPk> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewSkxxPk as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewSkxxPk>) this.viewSkxxPkDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewSkxxPk> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewSkxxPk as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewSkxxPkDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewSkxxPkDao.getAll();
	}


	@Override
	public List<?> findAll(String modelName, String filters, String orders) {
		return this.findAll("ViewSkxxPk", filters, orders);
	}
	
}
