package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AttachData;
import edu.ahut.service.AttachDataService;

public class AttachDataServiceImpl implements AttachDataService {
	private BaseDAO<AttachData, String> attachDataDao;
	
	public BaseDAO<AttachData, String> getAttachDataDao() {
		return attachDataDao;
	}

	public void setAttachDataDao(BaseDAO<AttachData, String> attachDataDao) {
		this.attachDataDao = attachDataDao;
	}

	@Override
	public AttachData findbyId(int id) {
		return this.attachDataDao.findById(AttachData.class,id) ;
	}

	@Override
	public List<AttachData> Query(String filters, String orders, Object... values) {
		String queryString = "from AttachData as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<AttachData>) this.attachDataDao.hqlQuery(queryString, values);
	}

	public Page<AttachData> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.attachDataDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<AttachData> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from AttachData as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.attachDataDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.attachDataDao.getAll();
	}

	@Override
	public List<?> getAll(String filters, String orders) {
		return this.attachDataDao.findAll("AttachData", filters, orders);
	}
	
	@Override
	public boolean add(AttachData instance) {
		try {
			attachDataDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean deleteAllByBillNo(String billNo) {
		try {
			String hql = "delete AttachData as model where model.billNo='" + billNo + "'";
			this.attachDataDao.hqlExecute( hql);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean hqlExecute(String hql, Object... values) {
		return this.attachDataDao.hqlExecute(hql, values);
	}

}
