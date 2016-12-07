package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyjlzlb;

public interface XwKyjlzlbService {
//	public boolean updateZtm(String xh, String shztm, String shzt,String shyj);
	public boolean add(XwKyjlzlb instance);
	
	public boolean delete(XwKyjlzlb instance);
	
	public boolean update(XwKyjlzlb instance);
	
	public List<XwKyjlzlb> Query(String filters, String orders, Object... values);
	
	public Page<XwKyjlzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKyjlzlb> hqlQuery(String hql, Object...values);
	public boolean deleteByIds(String ids);
	public String isConflict(String kkkh, String kksj, String kkkhs);

	public boolean deleteByIds1(String ids);
	
}
