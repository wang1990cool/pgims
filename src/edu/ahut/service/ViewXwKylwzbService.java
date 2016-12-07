package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKylwzb;


public interface ViewXwKylwzbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKylwzb findbyId(long gh);

		public boolean add(ViewXwKylwzb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKylwzb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKylwzb

		public List<ViewXwKylwzb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKylwzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKylwzb instance);
}
