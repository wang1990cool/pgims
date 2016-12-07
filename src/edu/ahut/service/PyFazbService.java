package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.PyFazb;

public interface PyFazbService {
	 public void submit(AuditDetail auditDetail,PyFazb pyfa);
	
      public boolean updateZtm(String pyfah, String ztm, String zt);		
	
	  public void updateZt(PyFazb instance);
	
	  public String getPyfah(String bbhDwhZydm);
	
	   public boolean checkIsExistByPyfah(String pyfah);
	
	   public PyFazb findbyId(int id);

		public boolean add(PyFazb instance);
		
		public void deleteByPyfahs(String pyfahs);
		
		public boolean delete(PyFazb instance);
		
		public boolean update(PyFazb instance);	

		public List<PyFazb> Query(String filters, String orders, Object... values);	
	
		public Page<PyFazb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public List<?> getAll(String filters,String orders);
}
