package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyxmb;


public interface ViewXwKyxmbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKyxmb findbyId(long gh);

		public boolean add(ViewXwKyxmb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKyxmb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKyxmb

		public List<ViewXwKyxmb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKyxmb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		public List<?> getAll(String filter,String order);
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKyxmb instance);
}
