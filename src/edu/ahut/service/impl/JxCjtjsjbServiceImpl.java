package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjtjsjb;
import edu.ahut.service.JxCjtjsjbService;

public class JxCjtjsjbServiceImpl implements JxCjtjsjbService{

	private BaseDAO<JxCjtjsjb,String> jxCjtjsjbDao;
	
	public BaseDAO<JxCjtjsjb, String> getJxCjtjsjbDao() {
		return jxCjtjsjbDao;
	}

	public void setJxCjtjsjbDao(BaseDAO<JxCjtjsjb, String> jxCjtjsjbDao) {
		this.jxCjtjsjbDao = jxCjtjsjbDao;
	}

	
	public boolean add(JxCjtjsjb instance) {
		try {
			jxCjtjsjbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(JxCjtjsjb instance){
		try {
			jxCjtjsjbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(JxCjtjsjb instance){
		try {
			jxCjtjsjbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<JxCjtjsjb> Query(String filters, String orders, Object... values){
		String hql = "from JxCjtjsjb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return jxCjtjsjbDao.hqlQuery(hql, values);
	}
	
	public Page<JxCjtjsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from JxCjtjsjb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return jxCjtjsjbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return jxCjtjsjbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return jxCjtjsjbDao.hqlExecute(hql, values);
	}
	
	public List<JxCjtjsjb> hqlQuery(String hql, Object...values){
		return jxCjtjsjbDao.hqlQuery(hql, values);
	}
}
