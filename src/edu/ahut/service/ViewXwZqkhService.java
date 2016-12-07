package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwZqkh;


public interface ViewXwZqkhService {
	 	public boolean checkIsExistByXh(String xh);
	
		public boolean add(ViewXwZqkh instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwZqkh

		public List<ViewXwZqkh> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwZqkh> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		public List<?> getAll(String filter,String order);
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwZqkh instance);
}
