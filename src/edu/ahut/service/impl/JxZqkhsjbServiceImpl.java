package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxZqkhsjb;
import edu.ahut.service.JxZqkhsjbService;

public class JxZqkhsjbServiceImpl implements JxZqkhsjbService{

	private BaseDAO<JxZqkhsjb,String> jxZqkhsjbDao;
	
	public BaseDAO<JxZqkhsjb, String> getJxZqkhsjbDao() {
		return jxZqkhsjbDao;
	}

	public void setJxZqkhsjbDao(BaseDAO<JxZqkhsjb, String> jxZqkhsjbDao) {
		this.jxZqkhsjbDao = jxZqkhsjbDao;
	}

	
	public boolean add(JxZqkhsjb instance) {
		try {
			jxZqkhsjbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(JxZqkhsjb instance){
		try {
			jxZqkhsjbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(JxZqkhsjb instance){
		try {
			jxZqkhsjbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<JxZqkhsjb> Query(String filters, String orders, Object... values){
		String hql = "from JxZqkhsjb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return jxZqkhsjbDao.hqlQuery(hql, values);
	}
	
	public Page<JxZqkhsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from JxZqkhsjb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return jxZqkhsjbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return jxZqkhsjbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return jxZqkhsjbDao.hqlExecute(hql, values);
	}
	
	public List<JxZqkhsjb> hqlQuery(String hql, Object...values){
		return jxZqkhsjbDao.hqlQuery(hql, values);
	}
	public Boolean changeFlowFlag(String sznj,String xn,String xq,String fyh,String zydm,String xslxm,String xwbz) throws Exception{
	     try{
	    	 JxZqkhsjb billInstance =  jxZqkhsjbDao.find("from JxZqkhsjb as model where sznj='" + sznj + "'and xn='" + xn + "'"
	    	 		+ "and xq='" + xq + "'and fyh='" + fyh + "'and zydm='" + zydm + "'"
	    	 				+ "and xslxm='" + xslxm + "'").get(0);
	    	billInstance.setXwbz(xwbz);
//	    	billInstance.setZt(zt);
	    	jxZqkhsjbDao.merge(billInstance);
	     }catch(Exception e){
	    	 e.printStackTrace();
	    	 return false;
	     }
	     return true;
	}
}
