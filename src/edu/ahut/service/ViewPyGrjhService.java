package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPyGrjh;

public interface ViewPyGrjhService {
	   	public ViewPyGrjh findbyId(int id);
		
		public List<ViewPyGrjh> Query(String filters, String orders, Object... values);	
		
		public Page<ViewPyGrjh> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
