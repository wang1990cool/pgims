package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyFakcb;

public interface PyFakcbService {
	   public boolean deleteAllByPyfah(String pyfah);
	
	   public PyFakcb findbyId(int id);

	   public boolean checkFakcIsExist(String pyfah,String kch);
		
		public boolean add(PyFakcb instance);
		
//		public boolean addList(List<PyFakcb> instanceList);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(PyFakcb instance);
		
		public boolean update(PyFakcb instance);	

		public List<PyFakcb> Query(String filters, String orders, Object... values);	
	
		public Page<PyFakcb> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<PyFakcb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters,String orders);
		
}
