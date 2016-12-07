package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.service.JxSkjhgxbService;

public class JxSkjhgxbServiceImpl implements JxSkjhgxbService {
	private BaseDAO<JxSkjhgxb, String> jxSkjhgxbDao; 
	
	public BaseDAO<JxSkjhgxb, String> getJxSkjhgxbDao() {
		return jxSkjhgxbDao;
	}

	public void setJxSkjhgxbDao(BaseDAO<JxSkjhgxb, String> jxSkjhgxbDao) {
		this.jxSkjhgxbDao = jxSkjhgxbDao;
	}

	@Override
	public JxSkjhgxb findbyId(int id) {
		return this.jxSkjhgxbDao.findById(JxSkjhgxb.class,id) ;
	}

	@Override
	public boolean add(JxSkjhgxb instance) {
		try {
			jxSkjhgxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(JxSkjhgxb instance) {
		try {
			this.jxSkjhgxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(JxSkjhgxb instance) {
		try{
			this.jxSkjhgxbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<JxSkjhgxb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxSkjhgxb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxSkjhgxb>) this.jxSkjhgxbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxSkjhgxb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from JxSkjhgxb as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.jxSkjhgxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.jxSkjhgxbDao.getAll();
	}

}
