package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxKtbgsjb;
import edu.ahut.service.JxKtbgsjbService;

public class JxKtbgsjbServiceImpl implements JxKtbgsjbService{

	private BaseDAO<JxKtbgsjb,String> jxKtbgsjbDao;
	
	public BaseDAO<JxKtbgsjb, String> getJxKtbgsjbDao() {
		return jxKtbgsjbDao;
	}

	public void setJxKtbgsjbDao(BaseDAO<JxKtbgsjb, String> jxKtbgsjbDao) {
		this.jxKtbgsjbDao = jxKtbgsjbDao;
	}

	
	public boolean add(JxKtbgsjb instance) {
		try {
			jxKtbgsjbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(JxKtbgsjb instance){
		try {
			jxKtbgsjbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(JxKtbgsjb instance){
		try {
			jxKtbgsjbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<JxKtbgsjb> Query(String filters, String orders, Object... values){
		String hql = "from JxKtbgsjb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return jxKtbgsjbDao.hqlQuery(hql, values);
	}
	
	public Page<JxKtbgsjb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from JxKtbgsjb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return jxKtbgsjbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return jxKtbgsjbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return jxKtbgsjbDao.hqlExecute(hql, values);
	}
	
	public List<JxKtbgsjb> hqlQuery(String hql, Object...values){
		return jxKtbgsjbDao.hqlQuery(hql, values);
	}
	public Boolean changeFlowFlag(String sznj,String xn,String xq,String fyh,String zydm,String xslxm,String xwbz) throws Exception{
	     try{
	    	 JxKtbgsjb billInstance =  jxKtbgsjbDao.find("from JxKtbgsjb as model where sznj='" + sznj + "'and xn='" + xn + "'"
	    	 		+ "and xq='" + xq + "'and fyh='" + fyh + "'and zydm='" + zydm + "'"
	    	 				+ "and xslxm='" + xslxm + "'").get(0);
	    	billInstance.setXwbz(xwbz);
//	    	billInstance.setZt(zt);
	    	jxKtbgsjbDao.merge(billInstance);
	     }catch(Exception e){
	    	 e.printStackTrace();
	    	 return false;
	     }
	     return true;
	}
}
