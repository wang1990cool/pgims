package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.RsJgxxb;
import edu.ahut.service.RsJgxxbService;

public class RsJgxxbServiceImpl implements RsJgxxbService {

	private BaseDAO<RsJgxxb, String> rsJgxxbDao;

	public BaseDAO<RsJgxxb, String> getRsJgxxbDao() {
		return rsJgxxbDao;
	}

	public void setRsJgxxbDao(BaseDAO<RsJgxxb, String> rsJgxxbDao) {
		this.rsJgxxbDao = rsJgxxbDao;
	}

	public RsJgxxb findbyId(Long id) {
		return this.rsJgxxbDao.findById(RsJgxxb.class,id);
	}

	@Override
	public boolean add(RsJgxxb instance) {
		try {
			rsJgxxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteByIds(String ids) {
		ids = "'" + ids.replace(",", "','") + "'";
		String hql = "delete RsJgxxb where id in (" + ids + ")";
		return this.rsJgxxbDao.hqlExecute(hql);
	}

	@Override
	public boolean delete(RsJgxxb instance) {
		try {
			this.rsJgxxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(RsJgxxb instance) {
		try {
			this.rsJgxxbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public List<RsJgxxb> Query(String filters, String orders, Object... values) {
		String queryString = "from RsJgxxb as model";
		System.out.println("filters = " + filters);
		if (filters != null && filters != "") {
			queryString += " where " + filters;
		}
		if (orders != null && orders != "") {
			queryString += " order by " + orders;
		}
		return (List<RsJgxxb>) this.rsJgxxbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<RsJgxxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from RsJgxxb as model";
		if (filters != null && filters != "") {
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.rsJgxxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.rsJgxxbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.rsJgxxbDao.hqlExecute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.rsJgxxbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByGh(String gh) {
		String hql = "from RsJgxxb where gh='" + gh +"'";
		List<RsJgxxb> list = this.rsJgxxbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

	@Override
	public RsJgxxb findByGh(String gh) {
		String hql = "from RsJgxxb where gh = '" + gh + "'";
		return this.rsJgxxbDao.hqlQuery(hql).get(0);
	}
}
