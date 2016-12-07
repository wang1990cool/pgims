package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.JxKkjhzb;

public interface JxKkjhzbService {
	  public boolean updateZtm(String kkjhh, String ztm, String zt);		
	
	 public void submit(AuditDetail auditDetail,JxKkjhzb kkjh);
	
	  public void submitKkjh(JxKkjhzb instance);
	
	  public String getKkjhh(String xnXq);
	
	   public boolean checkKkjhIsExist(JxKkjhzb instance);
	
	   public JxKkjhzb findbyId(int id);

		public boolean add(JxKkjhzb instance);
		
		public void deleteByKkjhhss(String Kkjhhs);
		
		public boolean delete(JxKkjhzb instance);
		
		public boolean update(JxKkjhzb instance);	

		public List<JxKkjhzb> Query(String filters, String orders, Object... values);	
	
		public Page<JxKkjhzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
