package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.ZdZtm;
import edu.ahut.service.ZdZtmService;

public class ZdZtmServiceImpl implements ZdZtmService {
	
	private BaseDAO<ZdZtm, String> zdZtmDao;

	public BaseDAO<ZdZtm, String> getZdZtmDao() {
		return zdZtmDao;
	}

	public void setZdZtmDao(BaseDAO<ZdZtm, String> zdZtmDao) {
		this.zdZtmDao = zdZtmDao;
	}

	@Override
	public List<ZdZtm> getZt(String ztlb) {
		String hql = "from ZdZtm where sfyx = '1' and  ztlb = '" + ztlb + "'"; 
		return zdZtmDao.hqlQuery(hql);
	}

	
}