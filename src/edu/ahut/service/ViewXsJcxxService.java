package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXsJcxx;

public interface ViewXsJcxxService {
	   	public ViewXsJcxx findbyId(int id);
		
		public List<ViewXsJcxx> Query(String filters, String orders, Object... values);	
		
		public Page<ViewXsJcxx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
