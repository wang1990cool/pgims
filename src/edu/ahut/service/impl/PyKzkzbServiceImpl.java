package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.PyKckzb;
import edu.ahut.service.PyKckzbService;

public class PyKzkzbServiceImpl implements PyKckzbService {
	private BaseDAO<PyKckzb,String> pyKckzbDao;
	
	public BaseDAO<PyKckzb, String> getPyKckzbDao() {
		return pyKckzbDao;
	}

	public void setPyKckzbDao(BaseDAO<PyKckzb, String> pyKckzbDao) {
		this.pyKckzbDao = pyKckzbDao;
	}

	@Override
	public boolean add(PyKckzb instance) {
		try {
			pyKckzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete PyKckzb where id in (" + ids + ")";
		return this.pyKckzbDao.hqlExecute(hql);
	}
	
	@Override
	public boolean delete(PyKckzb instance) {
		try {
			this.pyKckzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(PyKckzb instance) {
		try{
			this.pyKckzbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<PyKckzb> Query(String filters, String orders, Object... values) {
		String queryString = "from PyKckzb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<PyKckzb>) this.pyKckzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<PyKckzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from PyKckzb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return pyKckzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<PyKckzb> getAll() {
		return pyKckzbDao.getAll();
	}

	@Override
	public boolean checkIsExistByKch(String kch) {
		String hql = "from PyKckzb where kch ='" + kch + "'";
		List<PyKckzb> list = pyKckzbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

}
