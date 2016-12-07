package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.WebInfo;
import edu.ahut.service.WebInfoService;

public class WebInfoServiceImpl implements WebInfoService {
	private BaseDAO<WebInfo, String> webInfoDao;
	
	public BaseDAO<WebInfo, String> getWebInfoDao() {
		return webInfoDao;
	}

	public void setWebInfoDao(BaseDAO<WebInfo, String> webInfoDao) {
		this.webInfoDao = webInfoDao;
	}

	public WebInfo findbyId(int id) {
		return this.webInfoDao.findById(WebInfo.class,id);
	}

	public boolean add(WebInfo instance) {
		try {
			this.webInfoDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(WebInfo instance) {
		try {
			this.webInfoDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(WebInfo instance) {
		try {
			this.webInfoDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<WebInfo> Query(String filters, String orders, Object... values) {
		String hql = "from WebInfo as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<WebInfo>) webInfoDao.hqlQuery(hql, values);

	}

	@Override
	public Page<WebInfo> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from WebInfo as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return webInfoDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return webInfoDao.getAll();
	}

	@Override
	public boolean hqlExecute(String hql, Object... values) {
		return webInfoDao.hqlExecute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return webInfoDao.hqlQuery(hql, values);
	}

}
