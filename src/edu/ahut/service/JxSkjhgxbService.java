package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;

public interface JxSkjhgxbService {
	
	   public JxSkjhgxb findbyId(int id);

		public boolean add(JxSkjhgxb instance);
		
		public boolean delete(JxSkjhgxb instance);
		
		public boolean update(JxSkjhgxb instance);	

		public List<JxSkjhgxb> Query(String filters, String orders, Object... values);	
	
		public Page<JxSkjhgxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
