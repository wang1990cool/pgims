package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyGrjhzb;

public interface PyGrjhzbService {
	  public boolean deleteByXhs(String xhs);
	
	  public void updateZt(PyGrjhzb instance);
	  
	   public boolean checkIsExistByXh(String xh);
	
	   public List<?> findByXh(String xh);
	
	   public PyGrjhzb findById(int id);
	   
		public boolean add(PyGrjhzb instance);
		
		public boolean delete(PyGrjhzb instance);
		
		public boolean update(PyGrjhzb instance);	

		public List<?> QueryView(String filters, String orders, Object... values);	
		
		public List<PyGrjhzb> Query(String filters, String orders, Object... values);	
	
		public Page<PyGrjhzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
