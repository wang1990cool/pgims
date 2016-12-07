package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPkJxrw;

public interface ViewPkJxrwService {
	
	   public ViewPkJxrw findbyId(int id);

		public List<ViewPkJxrw> Query(String filters, String orders, Object... values);	
	
		public Page<ViewPkJxrw> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> findAll(String modelName, String filters,String orders);

}
