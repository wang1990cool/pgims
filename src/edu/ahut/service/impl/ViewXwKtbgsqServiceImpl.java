package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKtbgsq;
import edu.ahut.service.ViewXwKtbgsqService;


public class ViewXwKtbgsqServiceImpl implements ViewXwKtbgsqService {
	
	private BaseDAO<ViewXwKtbgsq,String> viewXwKtbgsqDao;
	
	public BaseDAO<ViewXwKtbgsq, String> getViewXwKtbgsqDao() {
		return viewXwKtbgsqDao;
	}

	public void setViewXwKtbgsqDao(BaseDAO<ViewXwKtbgsq, String> viewXwKtbgsqDao) {
		this.viewXwKtbgsqDao = viewXwKtbgsqDao;
	}

	@Override
	public ViewXwKtbgsq findbyId(long id) {
		return this.viewXwKtbgsqDao.findById(ViewXwKtbgsq.class,id) ;
	}

	@Override
	public boolean add(ViewXwKtbgsq instance) {
		try {
			viewXwKtbgsqDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKtbgsq where id in (" + ids + ")";
		return this.viewXwKtbgsqDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKtbgsq instance) {
		try {
			this.viewXwKtbgsqDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKtbgsq instance){
		try {
			viewXwKtbgsqDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKtbgsq> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKtbgsq as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKtbgsq>) this.viewXwKtbgsqDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKtbgsq> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKtbgsq as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKtbgsqDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKtbgsqDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKtbgsqDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKtbgsqDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKtbgsq where xh='" + xh + "'";
		List<?> list = this.viewXwKtbgsqDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}
	@Override
	public List<?> getAll(String filter, String order) {
		return this.viewXwKtbgsqDao.findAll("ViewXwKtbgsq", filter, order);
	}


}
