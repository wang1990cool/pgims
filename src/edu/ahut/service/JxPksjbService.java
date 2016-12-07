package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPksjb;

public interface JxPksjbService {
	public List<JxPksjb> Query(String filters, String orders, Object... values);
	
	public Page<JxPksjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<JxPksjb> hqlQuery(String hql, Object...values);
}
