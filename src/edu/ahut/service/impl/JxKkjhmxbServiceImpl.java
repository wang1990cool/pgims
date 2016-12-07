package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxKkjhmxb;
import edu.ahut.service.JxKkjhmxbService;

public class JxKkjhmxbServiceImpl implements JxKkjhmxbService {
	private BaseDAO<JxKkjhmxb, String> jxKkjhmxbDao; 

	public BaseDAO<JxKkjhmxb, String> getJxKkjhmxbDao() {
		return jxKkjhmxbDao;
	}

	public void setJxKkjhmxbDao(BaseDAO<JxKkjhmxb, String> jxKkjhmxbDao) {
		this.jxKkjhmxbDao = jxKkjhmxbDao;
	}

	@Override
	public JxKkjhmxb findById(int id) {
		return this.jxKkjhmxbDao.findById(JxKkjhmxb.class,id) ;
	}

	@Override
	public boolean add(JxKkjhmxb instance) {
		try {
			jxKkjhmxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(JxKkjhmxb instance) {
		try {
			this.jxKkjhmxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(JxKkjhmxb instance) {
		try{
			this.jxKkjhmxbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<JxKkjhmxb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxKkjhmxb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxKkjhmxb>) this.jxKkjhmxbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxKkjhmxb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from JxKkjhmxb as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.jxKkjhmxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public List<?> getAll() {
		return this.jxKkjhmxbDao.getAll();
	}
	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.jxKkjhmxbDao.findAll("JxKkjhmxb",filters, orders);
	}


	@Override
	public List<?> findByPyfah(String pyfah) {
		String hql = "from ViewFakcKck where pyfah='" + pyfah + "'";
		return jxKkjhmxbDao.hqlQuery(hql);
	}

	@Override
	public boolean deleteAllByKkjhh(String kkjhh) {
		try {
			String hql = "delete JxKkjhmxb as model where model.kkjhh='" + kkjhh + "'";
			this.jxKkjhmxbDao.hqlExecute(hql);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean SaveGrjhkc(List<JxKkjhmxb> list, String xh) {
		try {
			if(list.size() > 0)
				this.deleteAllByKkjhh(xh);
			for(int i = 0; i < list.size(); i++){
				this.jxKkjhmxbDao.save(list.get(i));
			}
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
