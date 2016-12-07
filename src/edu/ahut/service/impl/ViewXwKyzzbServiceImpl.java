package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyzzb;
import edu.ahut.service.ViewXwKyzzbService;


public class ViewXwKyzzbServiceImpl implements ViewXwKyzzbService {
	
	private BaseDAO<ViewXwKyzzb,String> viewXwKyzzbDao;
	
	public BaseDAO<ViewXwKyzzb, String> getViewXwKyzzbDao() {
		return viewXwKyzzbDao;
	}

	public void setViewXwKyzzbDao(BaseDAO<ViewXwKyzzb, String> viewXwKyzzbDao) {
		this.viewXwKyzzbDao = viewXwKyzzbDao;
	}

	@Override
	public ViewXwKyzzb findbyId(long id) {
		return this.viewXwKyzzbDao.findById(ViewXwKyzzb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKyzzb instance) {
		try {
			viewXwKyzzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKyzzb where id in (" + ids + ")";
		return this.viewXwKyzzbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKyzzb instance) {
		try {
			this.viewXwKyzzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKyzzb instance){
		try {
			viewXwKyzzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKyzzb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKyzzb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKyzzb>) this.viewXwKyzzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKyzzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKyzzb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKyzzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKyzzbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKyzzbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKyzzbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKyzzb where xh='" + xh + "'";
		List<?> list = this.viewXwKyzzbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
