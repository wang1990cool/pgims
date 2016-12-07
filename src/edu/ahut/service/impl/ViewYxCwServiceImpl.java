package edu.ahut.service.impl;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxCw;
import edu.ahut.model.YxXsjbxxb;
import edu.ahut.service.ViewYxCwService;

public class ViewYxCwServiceImpl implements ViewYxCwService{

private BaseDAO<ViewYxCw,String> viewYxCwDao;
	
	public BaseDAO<ViewYxCw, String> getViewYxCwDao() {
		return viewYxCwDao;
	}

	public void setViewYxCwDao(BaseDAO<ViewYxCw, String> viewYxCwDao) {
		this.viewYxCwDao = viewYxCwDao;
	}



	@Override
	public boolean add(ViewYxCw instance) {
		try {
			viewYxCwDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	

	@Override
	public boolean update(ViewYxCw instance) {
		try{
			this.viewYxCwDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<ViewYxCw> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewYxCw as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewYxCw>) this.viewYxCwDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewYxCw> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewYxCw as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.viewYxCwDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	

//	@SuppressWarnings("unchecked")
//	public List<ViewYxCw> getCwxx (String filters) {
//		Session session = viewYxCwDao.getNativeHibernateSession();
//	  
//		String sql = "SELECT A.ID,A.XH,A.DYXNXF,A.JCF,A.ZSF,A.TJF,A.YKTF,A.YLBXF,A.HJ,B.\"nPaid\","
//				+ "B.\"nOwe\" FROM YX_XSJBXXB A,FinT_PaidTotalView@MSSQL_LINK B WHERE A.XH = B.\"vStudentNo\" and " + filters;  
//		
//		SQLQuery query = session.createSQLQuery(sql); 
//		query.addEntity(ViewYxCw.class);   
//		List<ViewYxCw> list = query.list();
//		
//		return list;
//	}

	@Override
	public List<?> getAll() {
		return this.viewYxCwDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.viewYxCwDao.hqlExcute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.viewYxCwDao.hqlQuery(hql, values);
	}

	@Override
	public boolean checkIsExistByXh(String xh) {
		String hql = "from ViewYxCw where xh='" + xh + "'";
		List<?> list = this.viewYxCwDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}

	public List<ViewYxCw> getCwxx(String xh){
		String hql = "from ViewYxCw where xh = '" + xh + "'";
		return viewYxCwDao.find(hql);
		}
	
}
