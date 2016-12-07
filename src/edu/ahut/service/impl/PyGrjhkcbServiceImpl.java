package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhkcb;
import edu.ahut.service.PyGrjhkcbService;

public class PyGrjhkcbServiceImpl implements PyGrjhkcbService {
	private BaseDAO<PyGrjhkcb,String> pyGrjhkcbDao; 
	
	public BaseDAO<PyGrjhkcb, String> getPyGrjhkcbDao() {
		return pyGrjhkcbDao;
	}

	public void setPyGrjhkcbDao(BaseDAO<PyGrjhkcb, String> pyGrjhkcbDao) {
		this.pyGrjhkcbDao = pyGrjhkcbDao;
	}

	@Override
	public PyGrjhkcb findById(int id) {
		return this.pyGrjhkcbDao.findById(PyGrjhkcb.class,id) ;
	}

	@Override
	public boolean add(PyGrjhkcb instance) {
		try {
			pyGrjhkcbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(PyGrjhkcb instance) {
		try {
			this.pyGrjhkcbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(PyGrjhkcb instance) {
		try{
			this.pyGrjhkcbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<PyGrjhkcb> Query(String filters, String orders, Object... values) {
		String queryString = "from PyGrjhkcb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<PyGrjhkcb>) this.pyGrjhkcbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<PyGrjhkcb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from PyGrjhkcb as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.pyGrjhkcbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public List<?> getAll() {
		return this.pyGrjhkcbDao.getAll();
	}
	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.pyGrjhkcbDao.findAll("PyGrjhkcb",filters, orders);
	}

	@Override
	public List<?> findByPyfah(String pyfah) {
		String hql = "from ViewFakcKck where pyfah='" + pyfah + "'";
		return pyGrjhkcbDao.hqlQuery(hql	);
	}

	@Override
	public boolean deleteAllByXh(String xh) {
		try {
			String hql = "delete PyGrjhkcb as model where model.xh='" + xh + "'";
			pyGrjhkcbDao.hqlQuery(hql);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean SaveGrjhkc(List<PyGrjhkcb> list, String xh) {
		try {
			if(list.size() > 0)
				this.deleteAllByXh(xh);
			for(int i = 0; i < list.size(); i++){
				this.pyGrjhkcbDao.save(list.get(i));
			}
		} catch (Exception e) {
			return false;
		}
		return true;
		
	}

}
