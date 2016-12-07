package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyjlb;


public interface ViewXwKyjlbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKyjlb findbyId(long gh);

		public boolean add(ViewXwKyjlb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKyjlb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKyjlb

		public List<ViewXwKyjlb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKyjlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKyjlb instance);
}
