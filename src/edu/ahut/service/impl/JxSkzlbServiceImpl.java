package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkzlb;
import edu.ahut.service.JxSkzlbService;

public class JxSkzlbServiceImpl implements JxSkzlbService {
	private BaseDAO<JxSkzlb,String> jxSkzlbDao;
	

	public BaseDAO<JxSkzlb, String> getJxSkzlbDao() {
		return jxSkzlbDao;
	}


	public void setJxSkzlbDao(BaseDAO<JxSkzlb, String> jxSkzlbDao) {
		this.jxSkzlbDao = jxSkzlbDao;
	}


	@Override
	public boolean add(JxSkzlb instance) {
		try {
			jxSkzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	
	@Override
	public boolean delete(JxSkzlb instance) {
		try {
			this.jxSkzlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(JxSkzlb instance) {
		try{
			this.jxSkzlbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<JxSkzlb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxSkzlb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxSkzlb>) this.jxSkzlbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxSkzlb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from JxSkzlb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return jxSkzlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<JxSkzlb> getAll() {
		return jxSkzlbDao.getAll();
	}


	@Override
	public boolean deleteSkzl(String[] kkkhs) {
		try {
			String skzlHql = "delete JxSkzlb where kkkh=?";
			for(int i = 0; i < kkkhs.length; i++){
				this.jxSkzlbDao.hqlExecute(skzlHql, kkkhs[i]);
			}
		
		} catch (Exception e) {
			return false;
		}
		return true;
	}


}
