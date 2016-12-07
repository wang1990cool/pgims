package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.PyFakcb;
import edu.ahut.service.PyFakcbService;

public class PyFakcbServiceImpl implements PyFakcbService {
	private BaseDAO<PyFakcb,String> pyFakcbDao;

	public BaseDAO<PyFakcb, String> getPyFakcbDao() {
		return pyFakcbDao;
	}
	public void setPyFakcbDao(BaseDAO<PyFakcb, String> pyFakcbDao) {
		this.pyFakcbDao = pyFakcbDao;
	}
	
	@Override
	public boolean add(PyFakcb instance) {
		try {
			pyFakcbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete PyFakcb where id in (" + ids + ")";
		return this.pyFakcbDao.hqlExecute(hql);
	}
	
	@Override
	public boolean delete(PyFakcb instance) {
		try {
			this.pyFakcbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(PyFakcb instance) {
		try{
			this.pyFakcbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<PyFakcb> Query(String filters, String orders, Object... values) {
		String queryString = "from PyFakcb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<PyFakcb>) this.pyFakcbDao.hqlQuery(queryString, values);
	}

	public Page<PyFakcb> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.pyFakcbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	
	@Override
	public Page<PyFakcb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from PyFakcb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.pyFakcbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.pyFakcbDao.getAll();
	}
	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.pyFakcbDao.findAll("ViewFakcKck",filters,orders);
	}

	@Override
	public boolean checkFakcIsExist(String pyfah, String kch) {
		String hql = "from PyFakcb as model where model.pyfah='"+ pyfah + "' and model.kch='" + kch + "'";
		return pyFakcbDao.hqlExecute(hql);
	}
	
	@Override
	public boolean deleteAllByPyfah(String pyfah) {
		try {
			String hql = "delete PyFakcb as model where model.pyfah='" + pyfah + "'";
			this.pyFakcbDao.hqlExecute( hql);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	@Override
	public PyFakcb findbyId(int id) {
		return pyFakcbDao.findById(PyFakcb.class, id);
	}
	
//	@Override
//	public boolean addList(List<PyFakcb> instanceList) {
//		return false;
//	}
}
