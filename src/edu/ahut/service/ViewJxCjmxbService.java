package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjmxb;

public interface ViewJxCjmxbService {
	
	   	public ViewJxCjmxb findbyId(int id);
		
		public List<ViewJxCjmxb> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxCjmxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filter,String order);
		
}
