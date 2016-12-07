package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyzlb;


public interface ViewXwKyzlbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKyzlb findbyId(long gh);

		public boolean add(ViewXwKyzlb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKyzlb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKyzlb

		public List<ViewXwKyzlb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKyzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKyzlb instance);
}
