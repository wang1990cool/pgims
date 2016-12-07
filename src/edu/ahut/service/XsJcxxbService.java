package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XsJcxxb;

public interface XsJcxxbService {
	public boolean deleteByIds(String ids);
	
	public boolean add(XsJcxxb instance);

	public boolean delete(XsJcxxb instance);

	public boolean update(XsJcxxb instance);

	public List<XsJcxxb> Query(String filters, String orders, Object... values);

	public Page<XsJcxxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	
	public XsJcxxb findById(java.lang.Long id);
	
	public XsJcxxb findByXh(String xh);
	
}
