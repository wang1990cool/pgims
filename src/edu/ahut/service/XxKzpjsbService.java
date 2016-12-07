package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXxKzpjsb;
import edu.ahut.model.XxKzpjsb;

public interface XxKzpjsbService {
	public List<ViewXxKzpjsb> Query(String filters, String orders, Object... values);
	
	public Page<ViewXxKzpjsb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<ViewXxKzpjsb> hqlQuery(String hql, Object...values);
}
