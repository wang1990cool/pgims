package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPksjb;
import edu.ahut.service.JxPksjbService;

public class JxPksjbServiceImpl implements JxPksjbService{

	private BaseDAO<JxPksjb,String> jxPksjbDao;
	
	public BaseDAO<JxPksjb, String> getJxPksjbDao() {
		return jxPksjbDao;
	}

	public void setJxPksjbDao(BaseDAO<JxPksjb, String> jxPksjbDao) {
		this.jxPksjbDao = jxPksjbDao;
	}

	
	public boolean add(JxPksjb instance) {
		try {
			jxPksjbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(JxPksjb instance){
		try {
			jxPksjbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(JxPksjb instance){
		try {
			jxPksjbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<JxPksjb> Query(String filters, String orders, Object... values){
		String hql = "from JxPksjb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return jxPksjbDao.hqlQuery(hql, values);
	}
	
	public Page<JxPksjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from JxPksjb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return jxPksjbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return jxPksjbDao.getAll();
	}

	
	public List<JxPksjb> hqlQuery(String hql, Object...values){
		return jxPksjbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.jxPksjbDao.hqlExecute(hql, values);
	}
}
