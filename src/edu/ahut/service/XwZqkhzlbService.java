package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwZqkhzlb;

public interface XwZqkhzlbService {
	
	public XwZqkhzlb findbyId(int id);
	
	public boolean add(XwZqkhzlb instance);
	
	public boolean update(XwZqkhzlb instance);	
   	
   	public boolean hqlExecute(String hql, Object... values);
	
	public List<XwZqkhzlb> Query(String filters, String orders, Object... values);	
	
	public List<?> hqlQuery(String hql, Object... values);

	public Page<XwZqkhzlb> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public Page<XwZqkhzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public List<?> getAll(String filters, String orders);
}