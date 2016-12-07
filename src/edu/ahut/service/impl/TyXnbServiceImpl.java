package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.TyXnb;
import edu.ahut.service.TyXnbService;

public class TyXnbServiceImpl implements TyXnbService{

	private BaseDAO<TyXnb,String> tyXnbDao;
	
	public BaseDAO<TyXnb, String> getTyXnbDao() {
		return tyXnbDao;
	}

	public void setTyXnbDao(BaseDAO<TyXnb, String> tyXnbDao) {
		this.tyXnbDao = tyXnbDao;
	}

	
	public boolean add(TyXnb instance) {
		try {
			tyXnbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(TyXnb instance){
		try {
			tyXnbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(TyXnb instance){
		try {
			tyXnbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<TyXnb> Query(String filters, String orders, Object... values){
		String hql = "from TyXnb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return tyXnbDao.hqlQuery(hql, values);
	}
	
	public Page<TyXnb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from TyXnb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return tyXnbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return tyXnbDao.getAll();
	}

	
	public List<TyXnb> hqlQuery(String hql, Object...values){
		return tyXnbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.tyXnbDao.hqlExecute(hql, values);
	}
}
