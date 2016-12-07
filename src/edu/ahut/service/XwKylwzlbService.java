package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKylwzlb;

public interface XwKylwzlbService {
//	public boolean updateZtm(String xh, String shztm, String shzt,String shyj);
	public boolean add(XwKylwzlb instance);
	
	public boolean delete(XwKylwzlb instance);
	
	public boolean update(XwKylwzlb instance);
	
	public List<XwKylwzlb> Query(String filters, String orders, Object... values);
	
	public Page<XwKylwzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKylwzlb> hqlQuery(String hql, Object...values);
	public boolean deleteByIds(String ids);
	public String isConflict(String kkkh, String kksj, String kkkhs);

	public boolean deleteByIds1(String ids);
	
}
