package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjcx;

public interface ViewJxCjcxService {
	
		public List<ViewJxCjcx> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxCjcx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}