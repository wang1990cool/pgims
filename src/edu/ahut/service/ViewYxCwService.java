package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxCw;

public interface ViewYxCwService {
	    public boolean checkIsExistByXh(String xh);
	
		public boolean add(ViewYxCw instance);
		
		public boolean update(ViewYxCw instance);	

		public List<ViewYxCw> Query(String filters, String orders, Object... values);	
	
		public Page<ViewYxCw> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);
		
		public List<ViewYxCw> getCwxx(String xh);
}
