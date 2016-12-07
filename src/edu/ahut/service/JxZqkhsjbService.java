package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.JxZqkhsjb;

public interface JxZqkhsjbService {

	public boolean add(JxZqkhsjb instance);
	
	public boolean delete(JxZqkhsjb instance);
	
	public boolean update(JxZqkhsjb instance);
	
	public List<JxZqkhsjb> Query(String filters, String orders, Object... values);
	
	public Page<JxZqkhsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	public Boolean changeFlowFlag(String sznj,String xn,String xq,String fyh,String zydm,String xslxm,String xwbz) throws Exception;
//	public String isConflict(String kkkh, String kksj, String kkkhs);
	public List<JxZqkhsjb> hqlQuery(String hql, Object...values);
}
