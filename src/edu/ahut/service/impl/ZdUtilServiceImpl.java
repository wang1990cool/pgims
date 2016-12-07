package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.ZdUtilDAO;
import edu.ahut.service.ZdUtilService;

public class ZdUtilServiceImpl implements ZdUtilService {
	private ZdUtilDAO zdUtilDao; 
	
	public ZdUtilDAO getZdUtilDao() {
		return zdUtilDao;
	}

	public void setZdUtilDao(ZdUtilDAO zdUtilDao) {
		this.zdUtilDao = zdUtilDao;
	}


	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.zdUtilDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.zdUtilDao.hqlQuery(hql, values);
	}

	@Override
	public List<?> getByModelName(String modelName,String orders) {
		String hql = "from " + modelName + " where sfyx = '1' ";
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.zdUtilDao.hqlQuery(hql);
	}
	@Override
	public List<?> getByModelNameXW(String modelName) {
		String hql = "from " + modelName + " where xwbz = '1' ";
		return this.zdUtilDao.hqlQuery(hql);
	}
}
