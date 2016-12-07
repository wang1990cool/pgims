package edu.ahut.service;


import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebInfo;


public interface WebInfoService {
	/**
	 * 
	 * @return
	 */
	
   public WebInfo findbyId(int id);
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean add(WebInfo instance);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean delete(WebInfo instance);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean update(WebInfo instance);	/**
	 * 
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public List<WebInfo> Query(String filters, String orders, Object... values);
	
	/**
	 * 
	 * @param startNo
	 * @param pageSize
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public Page<WebInfo> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	/**
	 * 
	 * @return
	 */
	public List<?> getAll();
	
	public boolean hqlExecute(String hql, Object...values);
	
	public List<?> hqlQuery(String hql, Object...values);
}
