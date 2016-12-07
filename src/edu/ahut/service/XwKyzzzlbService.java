package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyzzzlb;

public interface XwKyzzzlbService {
//	public boolean updateZtm(String xh, String shztm, String shzt,String shyj);
	public boolean add(XwKyzzzlb instance);
	
	public boolean delete(XwKyzzzlb instance);
	
	public boolean update(XwKyzzzlb instance);
	
	public List<XwKyzzzlb> Query(String filters, String orders, Object... values);
	
	public Page<XwKyzzzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKyzzzlb> hqlQuery(String hql, Object...values);
	public boolean deleteByIds(String ids);
	public String isConflict(String kkkh, String kksj, String kkkhs);

	public boolean deleteByIds1(String ids);
	
}
