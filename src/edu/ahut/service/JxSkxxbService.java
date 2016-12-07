package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.JxSkxxb;

public interface JxSkxxbService {
	public List<?> getDivideSkxx(String kkkhArray,String kch);
	
	public List<?> getSkxxmx(String kkkh,String kch);
	
	 public boolean update(JxSkxxb skxx, JxSkjhgxb[] skjhArr);//添加授课信息和授课计划关系表
	
	 public boolean add(JxSkxxb skxx, JxSkjhgxb[] skjhArr);//添加授课信息和授课计划关系表
	
     public boolean divideBj(JxSkxxb skxx, JxSkjhgxb skjh);//分班
	
	 public String getKkkh(String prefixion);
	
	  public boolean addTec(String gh,String xm,String kkkh,String jslx);
	
	  public boolean deleteBj(String[] kkkhs);
	
      public boolean updateZtm(String condition, String ztm, String zt);		
	
	   public JxSkxxb findbyId(int id);

		public boolean add(JxSkxxb instance);
		
		public boolean delete(JxSkxxb instance);
		
		public boolean update(JxSkxxb instance);	

		public List<JxSkxxb> Query(String filters, String orders, Object... values);	
	
		public Page<JxSkxxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);
}
