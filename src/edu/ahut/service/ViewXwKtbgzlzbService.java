package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKtbgzlzb;


public interface ViewXwKtbgzlzbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKtbgzlzb findbyId(long gh);

		public boolean add(ViewXwKtbgzlzb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKtbgzlzb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKtbgzlzb

		public List<ViewXwKtbgzlzb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKtbgzlzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKtbgzlzb instance);
}
