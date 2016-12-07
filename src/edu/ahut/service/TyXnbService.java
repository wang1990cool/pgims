package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.TyXnb;

public interface TyXnbService {
	public List<TyXnb> Query(String filters, String orders, Object... values);
	
	public Page<TyXnb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<TyXnb> hqlQuery(String hql, Object...values);
}
