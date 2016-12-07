package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewXwKyzzb;


public interface ViewXwKyzzbService {
	 	public boolean checkIsExistByXh(String xh);
	
	   public ViewXwKyzzb findbyId(long gh);

		public boolean add(ViewXwKyzzb instance);
		
		public boolean deleteByIds(String ids);
		
		public boolean delete(ViewXwKyzzb instance);
		
		//public boolean update(XwKtbgsqb instance);	//ViewXwKyzzb

		public List<ViewXwKyzzb> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXwKyzzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		boolean update(ViewXwKyzzb instance);
}
