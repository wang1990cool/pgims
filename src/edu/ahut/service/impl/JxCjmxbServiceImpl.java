package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;
import edu.ahut.model.JxCjmxb;
import edu.ahut.model.XsJcxxb;
import edu.ahut.service.JxCjmxbService;

public class JxCjmxbServiceImpl implements JxCjmxbService{

	private BaseDAO<JxCjmxb, String> jxCjmxbDao;
	
	private BaseDAO<XsJcxxb, String> xsJcxxbDao;
	
	public BaseDAO<XsJcxxb, String> getXsJcxxbDao() {
		return xsJcxxbDao;
	}
	
	public void setXsJcxxbDao(BaseDAO<XsJcxxb, String> xsJcxxbDao) {
		this.xsJcxxbDao = xsJcxxbDao;
	}
	
	public BaseDAO<JxCjmxb, String> getJxCjmxbDao() {
		return jxCjmxbDao;
	}

	public void setJxCjmxbDao(BaseDAO<JxCjmxb, String> jxCjmxbDao) {
		this.jxCjmxbDao = jxCjmxbDao;
	}

	public boolean add(JxCjmxb instance) {
		try {
			jxCjmxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean add(String xh, String kkkh) {
		JxCjmxb cjmx = new JxCjmxb();
		try {
			List<XsJcxxb> jcxx = xsJcxxbDao.find("from XsJcxxb where xh='"+ xh +"'");	
			String xm = jcxx.get(0).getXm();
			cjmx.setXh(xh);
			cjmx.setXm(xm);
			cjmx.setKkkh(kkkh);
			jxCjmxbDao.save(cjmx);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(JxCjmxb instance) {
		try {
			jxCjmxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(JxCjmxb instance) {
		try {
			jxCjmxbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<JxCjmxb> Query(String filters, String orders, Object... values) {
		String hql = "from JxCjmxb as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<JxCjmxb>) jxCjmxbDao.hqlQuery(hql, values);
	}

	public Page<JxCjmxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from JxCjmxb as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return jxCjmxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	public boolean hqlExcute(String hql, Object... values) {
		return jxCjmxbDao.hqlExecute(hql, values);
	}

	public List<?> getAll() {
		return jxCjmxbDao.getAll();
	}
	
	public JxCjmxb findById(java.lang.Long id) {
		return jxCjmxbDao.findById(JxCjmxb.class,id);
	}

	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete JxCjmxb where id in (" + ids + ")";
		return this.jxCjmxbDao.hqlExecute(hql);
	}

	@Override
	public List<?> getByKkkh(String kkkh) {
		String hql = "from JxCjmxb where kkkh='" + kkkh +"'";
		return this.jxCjmxbDao.hqlQuery(hql);
	}
	
}
