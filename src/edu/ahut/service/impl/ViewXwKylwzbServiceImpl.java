package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKylwzb;
import edu.ahut.service.ViewXwKylwzbService;


public class ViewXwKylwzbServiceImpl implements ViewXwKylwzbService {
	
	private BaseDAO<ViewXwKylwzb,String> viewXwKylwzbDao;
	
	public BaseDAO<ViewXwKylwzb, String> getViewXwKylwzbDao() {
		return viewXwKylwzbDao;
	}

	public void setViewXwKylwzbDao(BaseDAO<ViewXwKylwzb, String> viewXwKylwzbDao) {
		this.viewXwKylwzbDao = viewXwKylwzbDao;
	}

	@Override
	public ViewXwKylwzb findbyId(long id) {
		return this.viewXwKylwzbDao.findById(ViewXwKylwzb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKylwzb instance) {
		try {
			viewXwKylwzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKylwzb where id in (" + ids + ")";
		return this.viewXwKylwzbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKylwzb instance) {
		try {
			this.viewXwKylwzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKylwzb instance){
		try {
			viewXwKylwzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKylwzb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKylwzb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKylwzb>) this.viewXwKylwzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKylwzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKylwzb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKylwzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKylwzbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKylwzbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKylwzbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKylwzb where xh='" + xh + "'";
		List<?> list = this.viewXwKylwzbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
