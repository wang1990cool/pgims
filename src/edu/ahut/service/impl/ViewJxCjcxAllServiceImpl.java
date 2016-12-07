package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjcxAll;
import edu.ahut.service.ViewJxCjcxAllService;

public class ViewJxCjcxAllServiceImpl implements ViewJxCjcxAllService{

	private BaseDAO<ViewJxCjcxAll,String> viewJxCjcxAllDao;
	
	public BaseDAO<ViewJxCjcxAll, String> getViewJxCjcxAllDao() {
		return viewJxCjcxAllDao;
	}

	public void setViewJxCjcxAllDao(BaseDAO<ViewJxCjcxAll, String> viewJxCjcxAllDao) {
		this.viewJxCjcxAllDao = viewJxCjcxAllDao;
	}

	
	public List<ViewJxCjcxAll> Query(String filters, String orders, Object... values){
		String hql = "from ViewJxCjcxAll as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return viewJxCjcxAllDao.hqlQuery(hql, values);
	}
	
	public Page<ViewJxCjcxAll> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from ViewJxCjcxAll as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return viewJxCjcxAllDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	
	public List<ViewJxCjcxAll> getCjcxXwk(String xh)throws Exception{
	List<ViewJxCjcxAll> cjcxList = null;
	try{
		if(xh != null){
		String hql = "from ViewJxCjcxAll where xh='" + xh + "' and kclb='学位课'";
		cjcxList = viewJxCjcxAllDao.find(hql);
		}
	}catch(Exception e){
		e.printStackTrace();
		throw e;
	}
	return cjcxList;
}
	
	public List<ViewJxCjcxAll> getCjcxFxwk(String xh)throws Exception{
		List<ViewJxCjcxAll> cjcxList = null;
		try{
			if(xh != null){
			String hql = "from ViewJxCjcxAll where xh='" + xh + "' and kclb='非学位课'";
			cjcxList = viewJxCjcxAllDao.find(hql);
			}
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return cjcxList;
	}
	
	
	@Override
	public List<ViewJxCjcxAll> getAll() {
		String hql = "from ViewJxCjcxAll";
		return viewJxCjcxAllDao.find(hql);
	}

	public boolean hqlExcute(String hql, Object...values){
		return viewJxCjcxAllDao.hqlExcute(hql, values);
	}
	
	public List<ViewJxCjcxAll> hqlQuery(String hql, Object...values){
		return viewJxCjcxAllDao.hqlQuery(hql, values);
	}
	
	@Override
	public ViewJxCjcxAll findbyXh(String xh) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,xh) ;
		
	}

	@Override
	public ViewJxCjcxAll findbyXm(String xm) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,xm) ;
	}
	public List<?> getByModelName(String modelName) {
		String hql = "from " + modelName + " where sfyx = '1' ";
		return this.viewJxCjcxAllDao.hqlQuery(hql);
	}

	@Override
	public List<?> getAll(String filter, String order) {
		return this.viewJxCjcxAllDao.findAll("ViewJxCjcxAll", filter, order);
	}

	
	@Override
	public ViewJxCjcxAll findbyZydm(String zydm) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,zydm) ;
	}

	@Override
	public ViewJxCjcxAll findbyZymc(String zymc) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,zymc) ;
	}

	@Override
	public ViewJxCjcxAll findbyXslxm(String xslxm) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,xslxm) ;
	}

	@Override
	public ViewJxCjcxAll findbyXslx(String xslx) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,xslx) ;
	}

	@Override
	public ViewJxCjcxAll findbyFyh(String fyh) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,fyh) ;
	}

	@Override
	public ViewJxCjcxAll findbyFymc(String fymc) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,fymc) ;
	}

	@Override
	public ViewJxCjcxAll findbyId(Long id) {
		return this.viewJxCjcxAllDao.findById(ViewJxCjcxAll.class,id) ;
	}
	
}
