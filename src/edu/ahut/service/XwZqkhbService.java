package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwZqkhb;

public interface XwZqkhbService {
	 public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr);
	 
	 public boolean update(XwZqkhb instance);
	
	public List<XwZqkhb> Query(String filters, String orders, Object... values);
	
	public Page<XwZqkhb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<XwZqkhb> hqlQuery(String hql, Object...values);
	
	public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr,String shrgh
			, String dskhdjm, String dskhdj,String xzkhdjm,String xzkhdj,String xykhdjm,String xykhdj);
	
}
