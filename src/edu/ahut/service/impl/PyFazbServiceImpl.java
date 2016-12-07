package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.AuditDetail;
import edu.ahut.model.PyFazb;
import edu.ahut.service.PyFazbService;

public class PyFazbServiceImpl implements PyFazbService {
	private BaseDAO<PyFazb,String> pyFazbDao;

	public BaseDAO<PyFazb, String> getPyFazbDao() {
		return pyFazbDao;
	}

	public void setPyFazbDao(BaseDAO<PyFazb, String> pyFazbDao) {
		this.pyFazbDao = pyFazbDao;
	}

	@Override
	public PyFazb findbyId(int id) {
		return this.pyFazbDao.findById(PyFazb.class,id) ;
	}

	@Override
	public boolean add(PyFazb instance) {
		try {
			pyFazbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(PyFazb instance) {
		try {
			this.pyFazbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(PyFazb instance) {
		try{
			this.pyFazbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<PyFazb> Query(String filters, String orders, Object... values) {
		String queryString = "from PyFazb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<PyFazb>) this.pyFazbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<PyFazb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from PyFazb as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.pyFazbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<PyFazb> getAll() {
		return this.pyFazbDao.getAll();
	}


	@Override
	public void deleteByPyfahs(String pyfahs) {
		String[] pyfahArray = pyfahs.split(",");
		for(int i = 0; i < pyfahArray.length; i++){
			String pyfaHql = "delete PyFazb where pyfah = '" + pyfahArray[i]  + "'";
			this.pyFazbDao.hqlExecute(pyfaHql);
			String fakcHql = "delete PyFakcb where pyfah = '" +  pyfahArray[i]  + "'";
			this.pyFazbDao.hqlExecute(fakcHql);
			if(this.pyFazbDao.hqlQuery("from AttachData where billNo=?", new Object[]{pyfahArray[i] }).size() > 0){
				String attachHql = "delete AttachData where billNo = '" +  pyfahArray[i]  + "'";
				this.pyFazbDao.hqlExecute(attachHql);
			}
		}
	}

	@Override
	public boolean checkIsExistByPyfah(String pyfah) {
		String hql = "from PyFazb where pyfah='" + pyfah + "'";
		List<PyFazb> list = pyFazbDao.hqlQuery(hql);
		return list.size() > 0 ? true :false;
	}


	@Override
	public String getPyfah(String bbhDwhZydm) {
		String hql = "from PyFazb as model where model.pyfah like '" + bbhDwhZydm + "%'";
		List<PyFazb> list = pyFazbDao.hqlQuery(hql);
		String [] pyfahArray = new String[list.size()]; //保存已经存在的培养方案号
		if(list.size() > 0){
			for(int i = 0;i < list.size(); i++){
				pyfahArray[i] = list.get(i).getPyfah();
			}
		}
		String SerialNum = createSerialNum(pyfahArray, 3);// 创建后3位
		String pyfah = bbhDwhZydm + SerialNum;
		return pyfah;
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
	public void updateZt(PyFazb pyfa) {
		pyFazbDao.merge(pyfa);
	}

	@Override
	public boolean updateZtm(String pyfah, String ztm, String zt) {
	    try {
	    	String zbHql = "update PyFazb as model  set model.zt = '"+zt +"', model.ztm = '"
					+ ztm + "' where model.pyfah = '" + pyfah + "'";
	    	this.pyFazbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		}
	    return true;
	}

	@Override
	public void submit(AuditDetail auditDetail, PyFazb pyfa) {
		try {
			this.pyFazbDao.saveEntity(auditDetail);
			this.pyFazbDao.merge(pyfa);
		} catch (Exception e) {
			e.getStackTrace();
		}
	}
	
	@Override
	public List<?> getAll(String filters,String orders) {
		return this.pyFazbDao.findAll("PyFazb",filters,orders);
	}
}
