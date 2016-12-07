package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjmx;

public interface ViewJxCjmxService {
	   	public ViewJxCjmx findbyId(int id);
		
		public List<ViewJxCjmx> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxCjmx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filter,String order);
		
}
