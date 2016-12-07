package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXxJxdw;
public interface ViewXxJxdwService {
	   	public ViewXxJxdw findbyId(int id);
		
		public List<ViewXxJxdw> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXxJxdw> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<ViewXxJxdw> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters, String orders);
		
}
