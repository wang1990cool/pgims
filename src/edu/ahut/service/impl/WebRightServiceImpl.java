package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.WebRight;
import edu.ahut.service.WebRightService;

public class WebRightServiceImpl implements WebRightService{
	private BaseDAO<WebRight, String> webRightDao;

	public BaseDAO<WebRight, String> getWebRightDao() {
		return webRightDao;
	}

	public void setWebRightDao(BaseDAO<WebRight, String> webRightDao) {
		this.webRightDao = webRightDao;
	}

	
	public List<WebRight> findByNamedParams(String hql, String[] paramNames,Object... values){
		return webRightDao.findByNamedParams(hql, paramNames, values);
	}
	
	public boolean add(WebRight instance) {
		try {
			webRightDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(WebRight instance){
		try {
			webRightDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(WebRight instance){
		try {
			webRightDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<WebRight> Query(String filters, String orders, Object... values){
		String hql = "from WebRight as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return webRightDao.hqlQuery(hql, values);
	}
	
	public Page<WebRight> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from WebRight as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return webRightDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return webRightDao.getAll();
	}

	@Override
	public WebRight findByRightCode(String rightcode) {
		String hql = "from WebRight where rightcode='" + rightcode + "'";
		return this.webRightDao.hqlQuery(hql).get(0);
	}

	
}
