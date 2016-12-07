package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewZxkkjhPk;

public interface ViewZxkkjhPkService {
	  public boolean divideBj(JxSkxxb skxx, JxSkjhb skjh);
	
//      public List<JxSkjhb> getSkjh();
	
	   public ViewZxkkjhPk findbyId(int id);

		public boolean add(JxSkxxb skxx, JxSkjhb[] skjhArr);
		

		public List<ViewZxkkjhPk> Query(String filters, String orders, Object... values);	
	
		public Page<ViewZxkkjhPk> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
}
