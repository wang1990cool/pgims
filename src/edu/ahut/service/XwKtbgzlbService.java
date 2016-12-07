package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKtbgzlb;

public interface XwKtbgzlbService {

	public boolean add(XwKtbgzlb instance);
	
	public boolean delete(XwKtbgzlb instance);
	
	public boolean deleteByIds(String ids);
	
	public boolean update(XwKtbgzlb instance);
	
	public List<XwKtbgzlb> Query(String filters, String orders, Object... values);
	
	public Page<XwKtbgzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKtbgzlb> hqlQuery(String hql, Object...values);
	
//	public String isConflict(String kkkh, String kksj, String kkkhs);
	
}
