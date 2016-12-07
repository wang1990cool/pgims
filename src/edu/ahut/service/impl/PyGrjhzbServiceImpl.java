package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhzb;
import edu.ahut.service.PyGrjhzbService;

public class PyGrjhzbServiceImpl implements PyGrjhzbService {
	private BaseDAO<PyGrjhzb, String> pyGrjhzbDao; 
	
	public BaseDAO<PyGrjhzb, String> getPyGrjhzbDao() {
		return pyGrjhzbDao;
	}

	public void setPyGrjhzbDao(BaseDAO<PyGrjhzb, String> pyGrjhzbDao) {
		this.pyGrjhzbDao = pyGrjhzbDao;
	}

	@Override
	public PyGrjhzb findById(int id) {
		return this.pyGrjhzbDao.findById(PyGrjhzb.class,id) ;
	}

	@Override
	public boolean add(PyGrjhzb instance) {
		try {
			pyGrjhzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(PyGrjhzb instance) {
		try {
			this.pyGrjhzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(PyGrjhzb instance) {
		try{
			this.pyGrjhzbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<?> QueryView(String filters, String orders, Object... values) {
		String queryString = "from ViewPyGrjh as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return this.pyGrjhzbDao.hqlQuery(queryString);
	}
	
	@Override
	public List<PyGrjhzb> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewPyGrjh as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<PyGrjhzb>) this.pyGrjhzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<PyGrjhzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from PyGrjhzb as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.pyGrjhzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	
	
	@Override
	public List<?> getAll() {
		return this.pyGrjhzbDao.getAll();
	}

	@Override
	public List<?> findByXh(String xh) {
		String queryString = "from XsJcxxb where xh = '" + xh + "'";
		return this.pyGrjhzbDao.hqlQuery(queryString);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String queryString = "from PyGrjhzb where xh = '" + xh + "'";
		List<PyGrjhzb> list = this.pyGrjhzbDao.hqlQuery(queryString);
		return list.size() > 0 ? true :false;
	}

	@Override
	public void updateZt(PyGrjhzb grjh) {
		String hql = "update PyGrjhzb as model  set model.zt = '"+grjh.getZt() +"', model.ztm = '"
				+ grjh.getZtm() + "' where model.xh = '" + grjh.getXh() + "'";
		this.pyGrjhzbDao.hqlExecute(hql);
	}

	@Override
	public boolean deleteByXhs(String xhs) {
		try {
			String[] xhArray = xhs.split(",");
			for(int i = 0; i < xhArray.length; i++){
				String pyfaHql = "delete PyGrjhzb where xh = '" + xhArray[i]  + "'";
				this.pyGrjhzbDao.hqlExecute(pyfaHql);
				String fakcHql = "delete PyGrjhkcb where xh = '" +  xhArray[i]  + "'";
				this.pyGrjhzbDao.hqlExecute(fakcHql);
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
