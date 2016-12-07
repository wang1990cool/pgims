package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhb;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxSkxxmx;
import edu.ahut.service.ViewJxSkxxmxService;

public class ViewJxSkxxmxServiceImpl implements ViewJxSkxxmxService {
	private BaseDAO<ViewJxSkxxmx,String> viewJxSkxxmxDao; 
	
	public BaseDAO<ViewJxSkxxmx, String> getViewJxSkxxmxDao() {
		return viewJxSkxxmxDao;
	}

	public void setViewJxSkxxmxDao(BaseDAO<ViewJxSkxxmx, String> viewJxSkxxmxDao) {
		this.viewJxSkxxmxDao = viewJxSkxxmxDao;
	}

	@Override
	public ViewJxSkxxmx findbyId(int id) {
		return this.viewJxSkxxmxDao.findById(ViewJxSkxxmx.class,id) ;
	}
	
	@Override
	public boolean add(JxSkxxb skxx, JxSkjhb[] skjhArr){
		try {
			this.viewJxSkxxmxDao.saveEntity(skxx);
			for(JxSkjhb skjh : skjhArr)
				this.viewJxSkxxmxDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	

	@Override
	public List<ViewJxSkxxmx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewJxSkxxmx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewJxSkxxmx>) this.viewJxSkxxmxDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<ViewJxSkxxmx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewJxSkxxmx as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		Page<ViewJxSkxxmx> pageSkxxmx =  this.viewJxSkxxmxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
		@SuppressWarnings("unchecked")
		List<ViewJxSkxxmx> list  = (List<ViewJxSkxxmx>) pageSkxxmx.getResult();
		@SuppressWarnings("unchecked")
		List<JxSkjhgxb> skjhList = (List<JxSkjhgxb>) this.viewJxSkxxmxDao.findAll("JxSkjhgxb", null, null);
		// 去掉已经合班，分班和独立的课程
		List<ViewJxSkxxmx> tempList = new ArrayList<ViewJxSkxxmx>();
		if(list.size() > 0){
			for(int i = 0 ;i < list.size() ;i++){
				boolean flag = false;
					if(skjhList.size() > 0){
					for(int j = 0; j < skjhList.size();j++){
						if((list.get(i).getKch()).equals(skjhList.get(j).getKch()) && (list.get(i).getKkjhh()).equals(skjhList.get(j).getKkjhh())){
							flag = true;	
						}
					}
				}
				if(!flag)
					tempList.add(list.get(i));
			}
		}
		return new Page<ViewJxSkxxmx>(startNo, tempList.size(), pageSize, tempList);
	}

	@Override
	public List<?> getAll() {
		return this.viewJxSkxxmxDao.getAll();
	}
	
//	@Override
//	public List<JxSkjhb> getSkjh() {
//		return this.viewJxSkxxmxDao.findSkjh();
//	}

	@Override
	public boolean divideBj(JxSkxxb skxx, JxSkjhb skjh) {
		try {
			this.viewJxSkxxmxDao.saveEntity(skxx);
			this.viewJxSkxxmxDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
