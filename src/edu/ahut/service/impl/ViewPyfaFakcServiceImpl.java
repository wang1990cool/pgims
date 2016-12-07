package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPyfaFakc;
import edu.ahut.service.ViewPyfaFakcService;

public class ViewPyfaFakcServiceImpl implements ViewPyfaFakcService {
	private BaseDAO<ViewPyfaFakc, String> viewPyfaFakcDao;

	public BaseDAO<ViewPyfaFakc, String> getViewPyfaFakcDao() {
		return viewPyfaFakcDao;
	}

	public void setViewPyfaFakcDao(BaseDAO<ViewPyfaFakc, String> viewPyfaFakcDao) {
		this.viewPyfaFakcDao = viewPyfaFakcDao;
	}

	@Override
	public ViewPyfaFakc findbyId(int id) {
		return this.viewPyfaFakcDao.findById(ViewPyfaFakc.class,id) ;
	}

	@Override
	public List<ViewPyfaFakc> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewPyfaFakc as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewPyfaFakc>) this.viewPyfaFakcDao.hqlQuery(queryString, values);
	}

	public Page<ViewPyfaFakc> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewPyfaFakcDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<ViewPyfaFakc> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewPyfaFakc as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewPyfaFakcDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewPyfaFakcDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return this.viewPyfaFakcDao.findAll("ViewPyfaFakc", filters, orders);
	}

}
