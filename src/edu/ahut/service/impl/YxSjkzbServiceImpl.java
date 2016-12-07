package edu.ahut.service.impl;

import java.util.List;

import net.sf.json.JSONObject;
import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.YxSjkzb;
import edu.ahut.service.YxSjkzbService;



/**
 * YxSjkzb entity. @author MyEclipse Persistence Tools
 */

public class YxSjkzbServiceImpl  implements YxSjkzbService {
	
	private BaseDAO<YxSjkzb,String> yxSjkzbDao;

	public BaseDAO<YxSjkzb, String> getYxSjkzbDao() {
		return  yxSjkzbDao;
	}

	public void setYxSjkzbDao(BaseDAO<YxSjkzb, String> yxSjkzbDao) {
		this.yxSjkzbDao = yxSjkzbDao;
	}

	public YxSjkzb findById(java.lang.Integer id) {
		return yxSjkzbDao.findById(YxSjkzb.class, id);
	}
	
	public boolean add(YxSjkzb instance) {
		try {
			yxSjkzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(YxSjkzb instance){
		try {
			yxSjkzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(YxSjkzb instance){
		try {
			yxSjkzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<YxSjkzb> Query(String filters, String orders, Object... values) {
    	String hql = "from YxSjkzb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return (List<YxSjkzb>) yxSjkzbDao.hqlQuery(hql, values);
	}

	public Page<YxSjkzb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
         String hql = "from YxSjkzb as model";
		
		if(filters != null)
			hql += " where " + filters;
		
		if(orders != null)
			hql += " order by " + orders;
	
		return yxSjkzbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}

	public List<?> getAll() {
		return this.yxSjkzbDao.getAll();
	}
	
	public boolean hqlExcute(String hql, Object...values){
		return yxSjkzbDao.hqlExecute(hql, values);
	}
	
	public List<YxSjkzb> hqlQuery(String hql, Object...values){
		return (List<YxSjkzb>) yxSjkzbDao.hqlQuery(hql, values);
	}

	public YxSjkzb findByCjcxlbm(String cjcxlbm) {
		try{
			String hql = "from YxSjkzb as model where cjcxlbm=?";
			List<?> yxSjkzbLst =  yxSjkzbDao.find(hql, new Object[]{cjcxlbm});
			JSONObject json = JSONObject.fromObject(yxSjkzbLst.get(0)); 
			YxSjkzb yxSjkzb = (YxSjkzb) JSONObject.toBean(json,YxSjkzb.class);
			return yxSjkzb;
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
}