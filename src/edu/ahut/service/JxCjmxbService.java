package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;
import edu.ahut.model.JxCjmxb;

public interface JxCjmxbService {
	public List<?> getByKkkh(String kkkh);
	
	public boolean deleteByIds(String ids);
	
	public boolean add(JxCjmxb instance);
	
	public boolean add(String xh, String kkkh);

	public boolean delete(JxCjmxb instance);

	public boolean update(JxCjmxb instance);

	public boolean hqlExcute(String hql, Object...values);
	
	public List<JxCjmxb> Query(String filters, String orders, Object... values);

	public Page<JxCjmxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	
	public JxCjmxb findById(java.lang.Long id);
	
}
