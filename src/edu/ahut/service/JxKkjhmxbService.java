package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxKkjhmxb;

public interface JxKkjhmxbService {
	   public boolean deleteAllByKkjhh(String kkjhh);
	
	   public boolean SaveGrjhkc(List< JxKkjhmxb> list, String xh);
	   
	   public List<?> findByPyfah(String pyfah);
	
	   public JxKkjhmxb findById(int id);
	   
		public boolean add(JxKkjhmxb instance);
		
		public boolean delete(JxKkjhmxb instance);
		
		public boolean update(JxKkjhmxb instance);	

		public List<JxKkjhmxb> Query(String filters, String orders, Object... values);	
	
		public Page<JxKkjhmxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters,String orders);
}
