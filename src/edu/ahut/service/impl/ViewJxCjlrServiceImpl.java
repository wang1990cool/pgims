package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;
import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.ViewJxCjlr;
import edu.ahut.service.ViewJxCjlrService;

public class ViewJxCjlrServiceImpl implements ViewJxCjlrService {
	private  BaseDAO< ViewJxCjlr, String>  viewJxCjlrDao; 
	
	public BaseDAO<ViewJxCjlr, String> getViewJxCjlrDao() {
		return viewJxCjlrDao;
	}

	public void setViewJxCjlrDao(BaseDAO<ViewJxCjlr, String> viewJxCjlrDao) {
		this.viewJxCjlrDao = viewJxCjlrDao;
	}

	@Override
	public ViewJxCjlr findbyId(int id) {
		return this.viewJxCjlrDao.findById(ViewJxCjlr.class,id) ;
	}

	@Override
	public List<ViewJxCjlr> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxCjlr as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxCjlr>) this.viewJxCjlrDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewJxCjlr> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxCjlr as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewJxCjlrDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewJxCjlrDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		// TODO Auto-generated method stub
		return this.viewJxCjlrDao.findAll("ViewJxCjlr", filters, orders);
	}
	
	

}
