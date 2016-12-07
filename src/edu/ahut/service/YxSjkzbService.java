package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.YxSjkzb;



/**
 * YxSjkzb entity. @author MyEclipse Persistence Tools
 */

public interface YxSjkzbService {

	public YxSjkzb findById(Integer id);
	
	public boolean add(YxSjkzb instance);
	
	public boolean delete(YxSjkzb instance);

	public boolean update(YxSjkzb instance);

	public List<YxSjkzb> Query(String filters, String orders, Object... values);
	
	public Page<YxSjkzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<YxSjkzb> hqlQuery(String hql, Object...values);
	
	public YxSjkzb findByCjcxlbm(String cjcxlbm);
}