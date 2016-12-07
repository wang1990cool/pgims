package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxKtbgsjb;

public interface JxKtbgsjbService {

	public boolean add(JxKtbgsjb instance);
	
	public boolean delete(JxKtbgsjb instance);
	
	public boolean update(JxKtbgsjb instance);
	
	public List<JxKtbgsjb> Query(String filters, String orders, Object... values);
	
	public Page<JxKtbgsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	public Boolean changeFlowFlag(String sznj,String xn,String xq,String fyh,String zydm,String xslxm,String sfyx) throws Exception;
//	public String isConflict(String kkkh, String kksj, String kkkhs);
	public List<JxKtbgsjb> hqlQuery(String hql, Object...values);
}
