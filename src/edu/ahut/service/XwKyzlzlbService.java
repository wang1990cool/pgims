package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyzlzlb;

public interface XwKyzlzlbService {
//	public boolean updateZtm(String xh, String shztm, String shzt,String shyj);
	public boolean add(XwKyzlzlb instance);
	
	public boolean delete(XwKyzlzlb instance);
	
	public boolean update(XwKyzlzlb instance);
	
	public List<XwKyzlzlb> Query(String filters, String orders, Object... values);
	
	public Page<XwKyzlzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKyzlzlb> hqlQuery(String hql, Object...values);
	public boolean deleteByIds(String ids);
	public String isConflict(String kkkh, String kksj, String kkkhs);

	public boolean deleteByIds1(String ids);
	
}
