package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewRsDsxx;

/**
 * ViewRsDsxxId entity. @author MyEclipse Persistence Tools
 */

public interface ViewRsDsxxService {
	
   	public ViewRsDsxx findbyId(Long id);
	
	public List<ViewRsDsxx> Query(String filters, String orders, Object... values);	
	
	public Page<ViewRsDsxx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
}