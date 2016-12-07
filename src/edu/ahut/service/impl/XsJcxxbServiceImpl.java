package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XsJcxxb;
import edu.ahut.service.XsJcxxbService;

public class XsJcxxbServiceImpl implements XsJcxxbService{

	private BaseDAO<XsJcxxb, String> xsJcxxbDao;
	
	public BaseDAO<XsJcxxb, String> getXsJcxxbDao() {
		return xsJcxxbDao;
	}

	public void setXsJcxxbDao(BaseDAO<XsJcxxb, String> xsJcxxbDao) {
		this.xsJcxxbDao = xsJcxxbDao;
	}

	public boolean add(XsJcxxb instance) {
		try {
			xsJcxxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(XsJcxxb instance) {
		try {
			xsJcxxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(XsJcxxb instance) {
		try {
			xsJcxxbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<XsJcxxb> Query(String filters, String orders, Object... values) {
		String hql = "from XsJcxxb as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<XsJcxxb>) xsJcxxbDao.hqlQuery(hql, values);
	}

	public Page<XsJcxxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from XsJcxxb as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return xsJcxxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return xsJcxxbDao.getAll();
	}
	
	public XsJcxxb findById(Long id) {
		return xsJcxxbDao.findById(XsJcxxb.class,id);
	}
	
	public XsJcxxb findByXh(String xh){
		List<XsJcxxb> xsJcxxb = xsJcxxbDao.find("from XsJcxxb where xh='"+ xh +"'" );
		return xsJcxxb.get(0);
	}

	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XsJcxxb where xh in (" + ids + ")";
		return this.xsJcxxbDao.hqlExecute(hql);
	}
	
}
