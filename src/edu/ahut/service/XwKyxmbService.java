package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyxmb;

public interface XwKyxmbService {
	 public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr);
	public boolean add(XwKyxmb instance);
	
	public boolean delete(XwKyxmb instance);
	
	public boolean update(XwKyxmb instance);
	
	public List<XwKyxmb> Query(String filters, String orders, Object... values);
	
	public Page<XwKyxmb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKyxmb> hqlQuery(String hql, Object...values);
	
	public String isConflict(String kkkh, String kksj, String kkkhs);
	
}
