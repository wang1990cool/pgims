package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkzlb;

public interface JxSkzlbService {
	   public boolean deleteSkzl(String[] kkkhs);
	     
		public boolean add(JxSkzlb instance);
		
		public boolean delete(JxSkzlb instance);
		
		public boolean update(JxSkzlb instance);	

		public List<JxSkzlb> Query(String filters, String orders, Object... values);	
	
		public Page<JxSkzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
}
