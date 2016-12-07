package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxXsxkall;
import edu.ahut.service.ViewJxXsxkallService;

public class ViewJxXsxkallServiceImpl implements ViewJxXsxkallService {
	private BaseDAO<ViewJxXsxkall, String> viewJxXsxkallDao; 
	
	public BaseDAO<ViewJxXsxkall, String> getViewJxXsxkallDao() {
		return viewJxXsxkallDao;
	}

	public void setViewJxXsxkallDao(BaseDAO<ViewJxXsxkall, String> viewJxXsxkallDao) {
		this.viewJxXsxkallDao = viewJxXsxkallDao;
	}

	@Override
	public ViewJxXsxkall findbyId(Long id) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,id) ;
	}

	@Override
	public List<ViewJxXsxkall> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxXsxkall as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxXsxkall>) this.viewJxXsxkallDao.hqlQuery(queryString, values);
	}
	
	@Override
	public Page<ViewJxXsxkall> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxXsxkall as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += "  order by " + orders;
		}
		return this.viewJxXsxkallDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewJxXsxkallDao.getAll();
	}

	@Override
	public ViewJxXsxkall findbyKch(String kch) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,kch) ;
		
	}

	@Override
	public ViewJxXsxkall findbyKcmc(String kcmc) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,kcmc) ;
	}
	public List<?> getByModelName(String modelName) {
		String hql = "from " + modelName + " where sfyx = '1' ";
		return this.viewJxXsxkallDao.hqlQuery(hql);
	}

	@Override
	public List<?> getAll(String filter, String order) {
		return this.viewJxXsxkallDao.findAll("ViewJxXsxkall", filter, order);
	}

	
	@Override
	public ViewJxXsxkall findbyZydm(String zydm) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,zydm) ;
	}

	@Override
	public ViewJxXsxkall findbyZymc(String zymc) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,zymc) ;
	}

	@Override
	public ViewJxXsxkall findbyXslxm(String xslxm) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,xslxm) ;
	}

	@Override
	public ViewJxXsxkall findbyXslx(String xslx) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,xslx) ;
	}

	@Override
	public ViewJxXsxkall findbyFyh(String fyh) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,fyh) ;
	}

	@Override
	public ViewJxXsxkall findbyFymc(String fymc) {
		return this.viewJxXsxkallDao.findById(ViewJxXsxkall.class,fymc) ;
	}
}
