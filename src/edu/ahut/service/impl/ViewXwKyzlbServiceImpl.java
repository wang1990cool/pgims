package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyzlb;
import edu.ahut.service.ViewXwKyzlbService;


public class ViewXwKyzlbServiceImpl implements ViewXwKyzlbService {
	
	private BaseDAO<ViewXwKyzlb,String> viewXwKyzlbDao;
	
	public BaseDAO<ViewXwKyzlb, String> getViewXwKyzlbDao() {
		return viewXwKyzlbDao;
	}

	public void setViewXwKyzlbDao(BaseDAO<ViewXwKyzlb, String> viewXwKyzlbDao) {
		this.viewXwKyzlbDao = viewXwKyzlbDao;
	}

	@Override
	public ViewXwKyzlb findbyId(long id) {
		return this.viewXwKyzlbDao.findById(ViewXwKyzlb.class,id) ;
	}

	@Override
	public boolean add(ViewXwKyzlb instance) {
		try {
			viewXwKyzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete ViewXwKyzlb where id in (" + ids + ")";
		return this.viewXwKyzlbDao.hqlExcute(hql);
	}
	
	@Override
	public boolean delete(ViewXwKyzlb instance) {
		try {
			this.viewXwKyzlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(ViewXwKyzlb instance){
		try {
			viewXwKyzlbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	

	@Override
	public List<ViewXwKyzlb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXwKyzlb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXwKyzlb>) this.viewXwKyzlbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewXwKyzlb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXwKyzlb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewXwKyzlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXwKyzlbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewXwKyzlbDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewXwKyzlbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewXwKyzlb where xh='" + xh + "'";
		List<?> list = this.viewXwKyzlbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
