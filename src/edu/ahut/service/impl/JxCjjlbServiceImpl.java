package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;
import edu.ahut.service.JxCjjlbService;

public class JxCjjlbServiceImpl implements JxCjjlbService{

	private BaseDAO<JxCjjlb, String> jxCjjlbDao;
	
	public BaseDAO<JxCjjlb, String> getJxCjjlbDao() {
		return jxCjjlbDao;
	}

	public void setJxCjjlbDao(BaseDAO<JxCjjlb, String> jxCjjlbDao) {
		this.jxCjjlbDao = jxCjjlbDao;
	}

	public boolean add(JxCjjlb instance) {
		try {
			jxCjjlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(JxCjjlb instance) {
		try {
			jxCjjlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(JxCjjlb instance) {
		try {
			jxCjjlbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<JxCjjlb> Query(String filters, String orders, Object... values) {
		String hql = "from JxCjjlb as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<JxCjjlb>) jxCjjlbDao.hqlQuery(hql, values);
	}

	public Page<JxCjjlb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from JxCjjlb as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return jxCjjlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return jxCjjlbDao.getAll();
	}
	
	public JxCjjlb findById(java.lang.Long id) {
		return jxCjjlbDao.findById(JxCjjlb.class,id);
	}

	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete JxCjjlb where id in (" + ids + ")";
		return this.jxCjjlbDao.hqlExecute(hql);
	}
	
	@Override
	public boolean checkIsExistByZjjsh(String zjjsh) {
		String hql = "from JxSkxxb where zjjsh='" + zjjsh + "'";
		List<JxCjjlb> list = jxCjjlbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.jxCjjlbDao.findAll("jxCjjlb",filters,orders);
	}

	@Override
	public List<?> getByKkkh(String kkkh) {
		String hql = "from JxCjjlb where kkkh = '" + kkkh + "'";
		return this.jxCjjlbDao.hqlQuery(hql);
	}
	
}
