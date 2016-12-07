package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyjlb;
import edu.ahut.service.ViewXwKyjlbService;


public class ViewXwKyjlbServiceImpl implements ViewXwKyjlbService {
	
	private BaseDAO<ViewXwKyjlb,String> viewXwKyjlbDao;
	
	public BaseDAO<ViewXwKyjlb, String> getViewXwKyjlbDao() {
		return viewXwKyjlbDao;
	}

	public void setViewXwKyjlbDao(BaseDAO<ViewXwKyjlb, String> viewXwKyjlbDao) {
		this.viewXwKyjlbDao = viewXwKyjlbDao;
	}

	@Override
	public ViewXwKyjlb findbyId(long id) {
		return this.viewXwKyjlbDao.findById(ViewXwKyjlb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKyjlb instance) {
		try {
			viewXwKyjlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKyjlb where id in (" + ids + ")";
		return this.viewXwKyjlbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKyjlb instance) {
		try {
			this.viewXwKyjlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKyjlb instance){
		try {
			viewXwKyjlbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKyjlb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKyjlb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKyjlb>) this.viewXwKyjlbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKyjlb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKyjlb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKyjlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKyjlbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKyjlbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKyjlbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKyjlb where xh='" + xh + "'";
		List<?> list = this.viewXwKyjlbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
