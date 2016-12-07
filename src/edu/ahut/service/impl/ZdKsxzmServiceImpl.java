package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ZdKsxzm;
import edu.ahut.service.ZdKsxzmService;

public class ZdKsxzmServiceImpl implements ZdKsxzmService{

	private BaseDAO<ZdKsxzm,String> zdKsxzmDao;
	
	public BaseDAO<ZdKsxzm, String> getZdKsxzmDao() {
		return zdKsxzmDao;
	}

	public void setZdKsxzmDao(BaseDAO<ZdKsxzm, String> zdKsxzmDao) {
		this.zdKsxzmDao = zdKsxzmDao;
	}

	
	public boolean add(ZdKsxzm instance) {
		try {
			zdKsxzmDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(ZdKsxzm instance){
		try {
			zdKsxzmDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(ZdKsxzm instance){
		try {
			zdKsxzmDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<ZdKsxzm> Query(String filters, String orders, Object... values){
		String hql = "from ZdKsxzm as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return zdKsxzmDao.hqlQuery(hql, values);
	}
	
	public Page<ZdKsxzm> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from ZdKsxzm as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return zdKsxzmDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return zdKsxzmDao.getAll();
	}

	public boolean hqlExecute(String hql, Object...values){
		return zdKsxzmDao.hqlExecute(hql, values);
	}
	
	public List<ZdKsxzm> hqlQuery(String hql, Object...values){
		return zdKsxzmDao.hqlQuery(hql, values);
	}
}

