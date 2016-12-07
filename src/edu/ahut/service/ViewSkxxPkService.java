package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewSkxxPk;

public interface ViewSkxxPkService {
	
	   public ViewSkxxPk findbyId(int id);

		public List<ViewSkxxPk> Query(String filters, String orders, Object... values);	
	
		public Page<ViewSkxxPk> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> findAll(String modelName, String filters,String orders);

}
