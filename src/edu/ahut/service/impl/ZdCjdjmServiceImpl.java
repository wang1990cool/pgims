package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ZdCjdjm;
import edu.ahut.service.ZdCjdjmService;

public class ZdCjdjmServiceImpl implements ZdCjdjmService{

	private BaseDAO<ZdCjdjm,String> zdCjdjmDao;
	
	public BaseDAO<ZdCjdjm, String> getZdCjdjmDao() {
		return zdCjdjmDao;
	}

	public void setZdCjdjmDao(BaseDAO<ZdCjdjm, String> zdCjdjmDao) {
		this.zdCjdjmDao = zdCjdjmDao;
	}

	
	public boolean add(ZdCjdjm instance) {
		try {
			zdCjdjmDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(ZdCjdjm instance){
		try {
			zdCjdjmDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(ZdCjdjm instance){
		try {
			zdCjdjmDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<ZdCjdjm> Query(String filters, String orders, Object... values){
		String hql = "from ZdCjdjm as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return zdCjdjmDao.hqlQuery(hql, values);
	}
	
	public Page<ZdCjdjm> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from ZdCjdjm as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return zdCjdjmDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return zdCjdjmDao.getAll();
	}

	public boolean hqlExecute(String hql, Object...values){
		return zdCjdjmDao.hqlExecute(hql, values);
	}
	
	public List<ZdCjdjm> hqlQuery(String hql, Object...values){
		return zdCjdjmDao.hqlQuery(hql, values);
	}
}

