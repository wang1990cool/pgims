package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxSkjhb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.JxZxkkjhb;
import edu.ahut.service.JxZxkkjhbService;

public class JxZxkkjhbServiceImpl implements JxZxkkjhbService {
	private BaseDAO<JxZxkkjhb,String> jxZxkkjhbDao; 
	
	public BaseDAO<JxZxkkjhb, String> getJxZxkkjhbDao() {
		return jxZxkkjhbDao;
	}

	public void setJxZxkkjhbDao(BaseDAO<JxZxkkjhb, String> jxZxkkjhbDao) {
		this.jxZxkkjhbDao = jxZxkkjhbDao;
	}

	@Override
	public JxZxkkjhb findbyId(int id) {
		return this.jxZxkkjhbDao.findById(JxZxkkjhb.class,id) ;
	}
	
	@Override
	public boolean add(JxSkxxb skxx, JxSkjhb[] skjhArr){
		try {
			this.jxZxkkjhbDao.saveEntity(skxx);
			for(JxSkjhb skjh : skjhArr)
				this.jxZxkkjhbDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	

	@Override
	public List<JxZxkkjhb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxZxkkjhb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxZxkkjhb>) this.jxZxkkjhbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxZxkkjhb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from JxZxkkjhb as A "
				+ "where not exists (select 1 from edu.ahut.model.JxSkjhgxb as B where A.kkjhh=B.kkjhh and A.kch=B.kch)";
		if(filters != null && (!filters.isEmpty())){
			hql += " and " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.jxZxkkjhbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
//		Page<JxZxkkjhb> pageSkxxmx =  this.jxZxkkjhbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
//		@SuppressWarnings("unchecked")
//		List<JxZxkkjhb> list  = (List<JxZxkkjhb>) pageSkxxmx.getResult();
//		@SuppressWarnings("unchecked")
//		List<JxSkjhgxb> skjhList = (List<JxSkjhgxb>) this.jxZxkkjhbDao.findAll("JxSkjhgxb", null, null);
//		// 去掉已经合班，分班和独立的课程
//		List<JxZxkkjhb> tempList = new ArrayList<JxZxkkjhb>();
//		if(list.size() > 0){
//			for(int i = 0 ;i < list.size() ;i++){
//				boolean flag = false;
//					if(skjhList.size() > 0){
//					for(int j = 0; j < skjhList.size();j++){
//						if((list.get(i).getKch()).equals(skjhList.get(j).getKch()) && (list.get(i).getKkjhh()).equals(skjhList.get(j).getKkjhh())){
//							flag = true;	
//						}
//					}
//				}
//				if(!flag)
//					tempList.add(list.get(i));
//			}
//		}
//		return new Page<JxZxkkjhb>(startNo, tempList.size(), pageSize, tempList);
	}

	@Override
	public List<?> getAll() {
		return this.jxZxkkjhbDao.getAll();
	}
	
//	@Override
//	public List<JxSkjhb> getSkjh() {
//		return this.jxZxkkjhbDao.findSkjh();
//	}

	
	
	@Override
	public boolean divideBj(JxSkxxb skxx, JxSkjhb skjh) {
		try {
			this.jxZxkkjhbDao.saveEntity(skxx);
			this.jxZxkkjhbDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
