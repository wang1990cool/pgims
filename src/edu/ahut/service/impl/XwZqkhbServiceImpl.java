package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwZqkhb;
import edu.ahut.service.XwZqkhbService;

public class XwZqkhbServiceImpl implements XwZqkhbService{

	private BaseDAO<XwZqkhb,String> xwZqkhbDao;
	
	public BaseDAO<XwZqkhb, String> getXwZqkhbDao() {
		return xwZqkhbDao;
	}

	public void setXwZqkhbDao(BaseDAO<XwZqkhb, String> xwZqkhbDao) {
		this.xwZqkhbDao = xwZqkhbDao;
	}

	
	public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr,String shrgh
			, String dskhdjm, String dskhdj,String xzkhdjm,String xzkhdj,String xykhdjm,String xykhdj) {
	    try {
	    	String zbHql = "update XwZqkhb as model  set model.shzt = '"+shzt +"', model.shztm = '"
					+ shztm +"', model.shyj = '"+ shyj +"', model.shr = '"+shr + "', model.shrgh = '"+shrgh + "'"
							+ ", model.dskhdjm = '"+dskhdjm + "', model.dskhdj = '"+dskhdj + "'"
									+ ", model.xzkhdjm = '"+xzkhdjm + "', model.xykhdjm = '"+xykhdjm + "'"
											+ ", model.xykhdj = '"+xykhdj + "', model.xzkhdj = '"+xzkhdj + "' where model.xh = '" + xh + "'";
	    	this.xwZqkhbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		}
	    return true;
	}


	public boolean update(XwZqkhb instance){
		try {
			xwZqkhbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<XwZqkhb> Query(String filters, String orders, Object... values){
		String hql = "from XwZqkhb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwZqkhbDao.hqlQuery(hql, values);
	}
	
	public Page<XwZqkhb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwZqkhb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwZqkhbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwZqkhbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwZqkhbDao.hqlExcute(hql, values);
	}
	
	public List<XwZqkhb> hqlQuery(String hql, Object...values){
		return xwZqkhbDao.hqlQuery(hql, values);
	}

	@Override
	public boolean updateZtm(String xh, String shztm, String shzt, String shyj,
			String shr) {
		// TODO Auto-generated method stub
		return false;
	}



}
