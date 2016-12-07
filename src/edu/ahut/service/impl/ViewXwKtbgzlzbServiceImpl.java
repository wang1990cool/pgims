package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKtbgzlzb;
import edu.ahut.service.ViewXwKtbgzlzbService;


public class ViewXwKtbgzlzbServiceImpl implements ViewXwKtbgzlzbService {
	
	private BaseDAO<ViewXwKtbgzlzb,String> viewXwKtbgzlzbDao;
	
	public BaseDAO<ViewXwKtbgzlzb, String> getViewXwKtbgzlzbDao() {
		return viewXwKtbgzlzbDao;
	}

	public void setViewXwKtbgzlzbDao(BaseDAO<ViewXwKtbgzlzb, String> viewXwKtbgzlzbDao) {
		this.viewXwKtbgzlzbDao = viewXwKtbgzlzbDao;
	}

	@Override
	public ViewXwKtbgzlzb findbyId(long id) {
		return this.viewXwKtbgzlzbDao.findById(ViewXwKtbgzlzb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKtbgzlzb instance) {
		try {
			viewXwKtbgzlzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKtbgzlzb where id in (" + ids + ")";
		return this.viewXwKtbgzlzbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKtbgzlzb instance) {
		try {
			this.viewXwKtbgzlzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKtbgzlzb instance){
		try {
			viewXwKtbgzlzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKtbgzlzb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKtbgzlzb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKtbgzlzb>) this.viewXwKtbgzlzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKtbgzlzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKtbgzlzb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKtbgzlzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKtbgzlzbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKtbgzlzbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKtbgzlzbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKtbgzlzb where xh='" + xh + "'";
		List<?> list = this.viewXwKtbgzlzbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
