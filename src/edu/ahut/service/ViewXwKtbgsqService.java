package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKtbgsq;


public interface ViewXwKtbgsqService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKtbgsq findbyId(long gh);

		public boolean add(ViewXwKtbgsq instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKtbgsq instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKtbgsq

		public List<ViewXwKtbgsq> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKtbgsq> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		public List<?> getAll(String filter,String order);
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKtbgsq instance);
}
