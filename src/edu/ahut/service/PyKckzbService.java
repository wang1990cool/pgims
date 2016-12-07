package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.PyKckzb;

public interface PyKckzbService {
	 	public boolean checkIsExistByKch(String kch);
	
		public boolean add(PyKckzb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(PyKckzb instance);
		
		public boolean update(PyKckzb instance);	

		public List<PyKckzb> Query(String filters, String orders, Object... values);	
	
		public Page<PyKckzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
}
