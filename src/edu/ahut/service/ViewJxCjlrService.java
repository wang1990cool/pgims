package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjlr;

public interface ViewJxCjlrService {
	   	public ViewJxCjlr findbyId(int id);
		
		public List<ViewJxCjlr> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxCjlr> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filter,String order);
		
}
