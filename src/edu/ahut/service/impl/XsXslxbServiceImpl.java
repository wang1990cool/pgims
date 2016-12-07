package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XsXslxb;
import edu.ahut.service.XsXslxbService;

public class XsXslxbServiceImpl implements XsXslxbService {
	private BaseDAO<XsXslxb, String> xsXslxbDao; 
	
	public BaseDAO<XsXslxb, String> getXsXslxbDao() {
		return xsXslxbDao;
	}

	public void setXsXslxbDao(BaseDAO<XsXslxb, String> xsXslxbDao) {
		this.xsXslxbDao = xsXslxbDao;
	}

	@Override
	public XsXslxb findbyId(int id) {
		return this.xsXslxbDao.findById(XsXslxb.class,id) ;
	}

	@Override
	public List<XsXslxb> Query(String filters, String orders, Object... values) {
		String queryString = "from XsXslxb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<XsXslxb>) this.xsXslxbDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<XsXslxb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from XsXslxb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.xsXslxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.xsXslxbDao.getAll();
	}

}
