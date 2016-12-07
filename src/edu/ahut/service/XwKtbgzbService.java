package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKtbgzb;

public interface XwKtbgzbService {

	public boolean add(XwKtbgzb instance);
	
	public boolean delete(XwKtbgzb instance);
	
	public boolean update(XwKtbgzb instance);
	
	public List<XwKtbgzb> Query(String filters, String orders, Object... values);
	
	public Page<XwKtbgzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwKtbgzb> hqlQuery(String hql, Object...values);
	
	public String[] getSj(String kksj);
	
	public boolean updateZtm(String xh, String shztm, String shzt,String dsshyj);
	
//	public String isConflict(String kkkh, String kksj, String kkkhs);
	
}
