package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjtjsjb;

public interface JxCjtjsjbService {

	public boolean add(JxCjtjsjb instance);
	
	public boolean delete(JxCjtjsjb instance);
	
	public boolean update(JxCjtjsjb instance);
	
	public List<JxCjtjsjb> Query(String filters, String orders, Object... values);
	
	public Page<JxCjtjsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<JxCjtjsjb> hqlQuery(String hql, Object...values);
}
