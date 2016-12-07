package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwZqkhzlb;
import edu.ahut.service.XwZqkhzlbService;

public class XwZqkhzlbServiceImpl implements XwZqkhzlbService {
	private BaseDAO<XwZqkhzlb,String> xwZqkhzlbDao;
	

	public BaseDAO<XwZqkhzlb, String> getXwZqkhzlbDao() {
		return xwZqkhzlbDao;
	}


	public void setXwZqkhzlbDao(BaseDAO<XwZqkhzlb, String> xwZqkhzlbDao) {
		this.xwZqkhzlbDao = xwZqkhzlbDao;
	}


	@Override
	public XwZqkhzlb findbyId(int id) {
		return this.xwZqkhzlbDao.findById(XwZqkhzlb.class,id) ;
	}

	public boolean add(XwZqkhzlb instance) {
		try {
			xwZqkhzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean update(XwZqkhzlb instance) {
		try {
			xwZqkhzlbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public List<XwZqkhzlb> Query(String filters, String orders, Object... values) {
		String queryString = "from XwZqkhzlb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<XwZqkhzlb>) this.xwZqkhzlbDao.hqlQuery(queryString, values);
	}
	
	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return (List<?>) xwZqkhzlbDao.hqlQuery(hql, values);
	}

	public Page<XwZqkhzlb> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.xwZqkhzlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<XwZqkhzlb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from XwZqkhzlb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.xwZqkhzlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.xwZqkhzlbDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return this.xwZqkhzlbDao.findAll("XwZqkhzlb", filters, orders);
	}
	
	

	@Override
	public boolean hqlExecute(String hql, Object... values) {
		return this.xwZqkhzlbDao.hqlExcute(hql, values);
	}


}
