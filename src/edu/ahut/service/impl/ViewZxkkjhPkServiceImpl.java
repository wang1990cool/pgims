package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewZxkkjhPk;
import edu.ahut.service.ViewZxkkjhPkService;

public class ViewZxkkjhPkServiceImpl implements ViewZxkkjhPkService {
	private BaseDAO<ViewZxkkjhPk,String> viewZxkkjhPkDao; 
	
	public BaseDAO<ViewZxkkjhPk, String> getViewZxkkjhPkDao() {
		return viewZxkkjhPkDao;
	}

	public void setViewZxkkjhPkDao(BaseDAO<ViewZxkkjhPk, String> viewZxkkjhPkDao) {
		this.viewZxkkjhPkDao = viewZxkkjhPkDao;
	}

	@Override
	public ViewZxkkjhPk findbyId(int id) {
		return this.viewZxkkjhPkDao.findById(ViewZxkkjhPk.class,id) ;
	}
	
	@Override
	public boolean add(JxSkxxb skxx, JxSkjhb[] skjhArr){
		try {
			this.viewZxkkjhPkDao.saveEntity(skxx);
			for(JxSkjhb skjh : skjhArr)
				this.viewZxkkjhPkDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	

	@Override
	public List<ViewZxkkjhPk> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewZxkkjhPk as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewZxkkjhPk>) this.viewZxkkjhPkDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewZxkkjhPk> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewZxkkjhPk as A "
				+ "where not exists (select 1 from edu.ahut.model.JxSkjhgxb as B where A.kkjhh=B.kkjhh and A.kch=B.kch)";
		if(filters != null && (!filters.isEmpty())){
			hql += " and " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewZxkkjhPkDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewZxkkjhPkDao.getAll();
	}
	
	
	@Override
	public boolean divideBj(JxSkxxb skxx, JxSkjhb skjh) {
		try {
			this.viewZxkkjhPkDao.saveEntity(skxx);
			this.viewZxkkjhPkDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
