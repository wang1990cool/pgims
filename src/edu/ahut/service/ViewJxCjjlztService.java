package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjjlzt;

public interface ViewJxCjjlztService {
	
	   	public ViewJxCjjlzt findbyId(int id);
		
		public List<ViewJxCjjlzt> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxCjjlzt> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filter,String order);
		
}