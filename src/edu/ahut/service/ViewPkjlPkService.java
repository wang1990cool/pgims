package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPkjlPk;

public interface ViewPkjlPkService {
	
	   public ViewPkjlPk findbyId(int id);

		public List<ViewPkjlPk> Query(String filters, String orders, Object... values);	
	
		public Page<ViewPkjlPk> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> findAll(String modelName, String filters,String orders);

		public List<?> getAll();
}
