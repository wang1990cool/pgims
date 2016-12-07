package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XsXslxb;

public interface XsXslxbService {
	   	public XsXslxb findbyId(int id);
		
		public List<XsXslxb> Query(String filters, String orders, Object... values);	
		
		public Page<XsXslxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();

}
