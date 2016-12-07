package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewKkjhKkjhmx;
public interface ViewKkjhKkjhmxService {
	   	public ViewKkjhKkjhmx findbyId(int id);
		
		public List<ViewKkjhKkjhmx> Query(String filters, String orders, Object... values);	
	
		public Page<ViewKkjhKkjhmx> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<ViewKkjhKkjhmx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters, String orders);
		
}
