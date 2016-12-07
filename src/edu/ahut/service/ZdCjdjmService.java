package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ZdCjdjm;

public interface ZdCjdjmService {
	public List<ZdCjdjm> Query(String filters, String orders, Object... values);
	
	public Page<ZdCjdjm> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExecute(String hql, Object...values);
	
	public List<ZdCjdjm> hqlQuery(String hql, Object...values);
}
