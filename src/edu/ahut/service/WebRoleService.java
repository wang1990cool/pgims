package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebRole;

public interface WebRoleService {
	/**
	 * 
	 * @param roleCode
	 * @return
	 */
	public WebRole findByRoleCode(java.lang.String roleCode);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean add(WebRole instance);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean delete(WebRole instance);

	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean update(WebRole instance);
	/**
	 * 查询角色
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public List<WebRole> Query(String filters, String orders, Object... values);
	
	/**
	 * 分页查询角色
	 * @param startNo
	 * @param pageSize
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public Page<WebRole> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	/**
	 * 查询全部角色
	 * @return
	 */
	public List<?> getAll();
	
	/**
	 * 执行Hql
	 * @param hql
	 * @param values
	 * @return
	 */
	public boolean hqlExecute(String hql, Object...values);
	
	/**
	 * Hql查询
	 * @param hql
	 * @param values
	 * @return
	 */
	public List<WebRole> hqlQuery(String hql, Object...values);
}
