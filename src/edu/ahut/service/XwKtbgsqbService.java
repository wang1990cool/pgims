package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKtbgsqb;

public interface XwKtbgsqbService {
	 public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr);
	public boolean add(XwKtbgsqb instance);
	
	public boolean delete(XwKtbgsqb instance);
	
	public boolean update(XwKtbgsqb instance);
	
	public List<XwKtbgsqb> Query(String filters, String orders, Object... values);
	
	public Page<XwKtbgsqb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKtbgsqb> hqlQuery(String hql, Object...values);
	
	public String isConflict(String kkkh, String kksj, String kkkhs);
	
}
