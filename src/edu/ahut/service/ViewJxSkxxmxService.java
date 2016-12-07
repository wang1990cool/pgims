package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxSkxxmx;

public interface ViewJxSkxxmxService {
	  public boolean divideBj(JxSkxxb skxx, JxSkjhb skjh);
	
//      public List<JxSkjhb> getSkjh();
	
	   public ViewJxSkxxmx findbyId(int id);

		public boolean add(JxSkxxb skxx, JxSkjhb[] skjhArr);
		

		public List<ViewJxSkxxmx> Query(String filters, String orders, Object... values);	
	
		public Page<ViewJxSkxxmx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
}
