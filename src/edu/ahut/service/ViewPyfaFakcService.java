package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewPyfaFakc;
public interface ViewPyfaFakcService {
	   	public ViewPyfaFakc findbyId(int id);
		
		public List<ViewPyfaFakc> Query(String filters, String orders, Object... values);	
	
		public Page<ViewPyfaFakc> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<ViewPyfaFakc> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters, String orders);
		
}
