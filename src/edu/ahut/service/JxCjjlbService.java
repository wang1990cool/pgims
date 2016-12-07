package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxCjjlb;

public interface JxCjjlbService {
	
	public List<?> getByKkkh(String kkkh);
	
	public JxCjjlb findById(java.lang.Long id);
	
	public boolean checkIsExistByZjjsh(String zjjsh);
	
	public boolean deleteByIds(String ids);
	
	public boolean add(JxCjjlb instance);

	public boolean delete(JxCjjlb instance);

	public boolean update(JxCjjlb instance);

	public List<JxCjjlb> Query(String filters, String orders, Object... values);

	public Page<JxCjjlb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	
	public List<?> getAll(String filters,String orders);
	
	
	
	
}
