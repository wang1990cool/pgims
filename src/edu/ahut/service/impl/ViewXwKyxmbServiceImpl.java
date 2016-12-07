package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyxmb;
import edu.ahut.service.ViewXwKyxmbService;


public class ViewXwKyxmbServiceImpl implements ViewXwKyxmbService {
	
	private BaseDAO<ViewXwKyxmb,String> viewXwKyxmbDao;
	
	public BaseDAO<ViewXwKyxmb, String> getViewXwKyxmbDao() {
		return viewXwKyxmbDao;
	}

	public void setViewXwKyxmbDao(BaseDAO<ViewXwKyxmb, String> viewXwKyxmbDao) {
		this.viewXwKyxmbDao = viewXwKyxmbDao;
	}

	@Override
	public ViewXwKyxmb findbyId(long id) {
		return this.viewXwKyxmbDao.findById(ViewXwKyxmb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKyxmb instance) {
		try {
			viewXwKyxmbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKyxmb where id in (" + ids + ")";
		return this.viewXwKyxmbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKyxmb instance) {
		try {
			this.viewXwKyxmbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKyxmb instance){
		try {
			viewXwKyxmbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKyxmb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKyxmb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKyxmb>) this.viewXwKyxmbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKyxmb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKyxmb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKyxmbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKyxmbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKyxmbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKyxmbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKyxmb where xh='" + xh + "'";
		List<?> list = this.viewXwKyxmbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}
	@Override
	public List<?> getAll(String filter, String order) {
		return this.viewXwKyxmbDao.findAll("ViewXwKyxmb", filter, order);
	}


}
