package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.JxKkjhzb;
import edu.ahut.service.JxKkjhzbService;

public class JxKkjhzbServiceImpl implements JxKkjhzbService {
	private BaseDAO<JxKkjhzb, String> jxKkjhzbDao; 
	
	public BaseDAO<JxKkjhzb, String> getJxKkjhzbDao() {
		return jxKkjhzbDao;
	}

	public void setJxKkjhzbDao(BaseDAO<JxKkjhzb, String> jxKkjhzbDao) {
		this.jxKkjhzbDao = jxKkjhzbDao;
	}

	@Override
	public JxKkjhzb findbyId(int id) {
		return this.jxKkjhzbDao.findById(JxKkjhzb.class,id) ;
	}

	@Override
	public boolean add(JxKkjhzb instance) {
		try {
			jxKkjhzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(JxKkjhzb instance) {
		try {
			this.jxKkjhzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(JxKkjhzb instance) {
		try{
			this.jxKkjhzbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<JxKkjhzb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxKkjhzb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxKkjhzb>) this.jxKkjhzbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxKkjhzb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from JxKkjhzb as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.jxKkjhzbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.jxKkjhzbDao.getAll();
	}

	@Override
	public void deleteByKkjhhss(String kkjhhs) {
		String[] array = kkjhhs.split(",");
		for(int i = 0; i < array.length; i++){
			String kkjhHql = "delete JxKkjhzb where kkjhh = '" + array[i]  + "'";
			this.jxKkjhzbDao.hqlExecute(kkjhHql);
			String kkjhmxHql = "delete JxKkjhmxb where kkjhh = '" +  array[i]  + "'";
			this.jxKkjhzbDao.hqlExecute(kkjhmxHql);
		}
	}

	@Override
	public boolean checkKkjhIsExist(JxKkjhzb kkjh) {
		String hql = "from JxKkjhzb as model where model.pyfah=? and model.xn=? and model.xq=? and pydwh=? and xkzym=? and nj=? and xslxm=?";
		List<JxKkjhzb> list =this.jxKkjhzbDao.hqlQuery(hql, new Object[]{kkjh.getPyfah(),kkjh.getXn(),kkjh.getXq(),
				kkjh.getPydwh(),kkjh.getXkzym(),kkjh.getNj(),kkjh.getXslxm()});
	
		return list.size() > 0 ? true :false;
	}

	@Override
	public String getKkjhh(String xnXq) {
		String hql = "from JxKkjhzb as model where model.kkjhh like '" + xnXq + "%'";
		List<JxKkjhzb> list = this.jxKkjhzbDao.hqlQuery(hql);
		String [] array = new String[list.size()]; //保存已经存在的培养方案号
		if(list.size() > 0){
			for(int i = 0;i < list.size(); i++){
				array[i] = list.get(i).getKkjhh();
			}
		}
		String SerialNum = createSerialNum(array, 3);// 创建后3位
		String kkjhh = xnXq + SerialNum;
		return kkjhh;
	}
	
	/**
	 * 获得下一个流水号
	 * @param array
	 * @param len
	 * @return
	 */
	public String createSerialNum(String[] array, int len){
		int maxNum = 1; //初始化最大值为1
		String SerialNum;
		if(array.length > 0){
			for(int i = 0; i < array.length ; i++){
				String num = array[i];
				String previousSerialNum = num.substring(num.length() - len); //获得培养方案号号后3位
				int newNum = Integer.parseInt(previousSerialNum.replaceAll("^(0+)", ""));// 去掉前面的0
				if(newNum > maxNum){
					maxNum = newNum;
				}
			}
			SerialNum = String.format("%0" + len + "d", (maxNum + 1)); // 数值前面加0，保存为len位
			return SerialNum;
		}else{
			SerialNum = String.format("%0" + len + "d",  1);
			return  SerialNum;
		}
	}

	@Override
	public void submitKkjh(JxKkjhzb kkjh) {
		this.jxKkjhzbDao.merge(kkjh);
	}
	
	@Override
	public void submit(AuditDetail auditDetail, JxKkjhzb kkjh) {
		try {
			this.jxKkjhzbDao.saveEntity(auditDetail);
			this.jxKkjhzbDao.merge(kkjh);
		} catch (Exception e) {
			e.getStackTrace();
		}
	}
	
	public boolean updateZtm(String kkjhh, String ztm, String zt) {
	    try {
	    	String zbHql = "update JxKkjhzb as model  set model.zt = '"+zt +"', model.ztm = '"
					+ ztm + "' where model.kkjhh = '" + kkjhh + "'";
	    	this.jxKkjhzbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		}
	    return true;
	}
}
