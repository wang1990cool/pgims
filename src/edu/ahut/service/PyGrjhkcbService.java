package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhkcb;

public interface PyGrjhkcbService {
	   public boolean deleteAllByXh(String xh);
	
	   public boolean SaveGrjhkc(List< PyGrjhkcb> list, String xh);
	   
	   public List<?> findByPyfah(String pyfah);
	
	   public PyGrjhkcb findById(int id);
	   
		public boolean add(PyGrjhkcb instance);
		
		public boolean delete(PyGrjhkcb instance);
		
		public boolean update(PyGrjhkcb instance);	

		public List<PyGrjhkcb> Query(String filters, String orders, Object... values);	
	
		public Page<PyGrjhkcb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters,String orders);
		
}
