package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXxKzpjsb;
import edu.ahut.service.XxKzpjsbService;

public class XxKzpjsbServiceImpl implements XxKzpjsbService{

	private BaseDAO<ViewXxKzpjsb,String> xxKzpjsbDao;
	
	public BaseDAO<ViewXxKzpjsb, String> getXxKzpjsbDao() {
		return xxKzpjsbDao;
	}

	public void setXxKzpjsbDao(BaseDAO<ViewXxKzpjsb, String> xxKzpjsbDao) {
		this.xxKzpjsbDao = xxKzpjsbDao;
	}

	public boolean add(ViewXxKzpjsb instance) {
		try {
			xxKzpjsbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	
	
	public List<ViewXxKzpjsb> Query(String filters, String orders, Object... values){
		String hql = "from ViewXxKzpjsb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xxKzpjsbDao.hqlQuery(hql, values);
	}
	
	public Page<ViewXxKzpjsb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from ViewXxKzpjsb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xxKzpjsbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xxKzpjsbDao.getAll();
	}

	
	public List<ViewXxKzpjsb> hqlQuery(String hql, Object...values){
		return xxKzpjsbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.xxKzpjsbDao.hqlExecute(hql, values);
	}
}
