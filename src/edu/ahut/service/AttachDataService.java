package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AttachData;
public interface AttachDataService {
		public boolean deleteAllByBillNo(String billNo);
	
		public boolean add(AttachData instance);
	
	   	public AttachData findbyId(int id);
	   	
	   	public boolean hqlExecute(String hql, Object... values);
		
		public List<AttachData> Query(String filters, String orders, Object... values);	
	
		public Page<AttachData> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<AttachData> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters, String orders);
		
}
