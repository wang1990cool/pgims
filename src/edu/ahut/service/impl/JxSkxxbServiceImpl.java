package edu.ahut.service.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.service.JxSkxxbService;

public class JxSkxxbServiceImpl implements JxSkxxbService {
	private BaseDAO<JxSkxxb, String> jxSkxxbDao; 
	private BaseDAO<JxSkjhgxb, String> jxSkjhgxbDao;
	private BaseDAO<JxPkjlb,String> jxPkjlbDao;
	public BaseDAO<JxSkxxb, String> getJxSkxxbDao() {
		return jxSkxxbDao;
	}

	public void setJxSkxxbDao(BaseDAO<JxSkxxb, String> jxSkxxbDao) {
		this.jxSkxxbDao = jxSkxxbDao;
	}

	public BaseDAO<JxSkjhgxb, String> getJxSkjhgxbDao() {
		return jxSkjhgxbDao;
	}

	public void setJxSkjhgxbDao(BaseDAO<JxSkjhgxb, String> jxSkjhgxbDao) {
		this.jxSkjhgxbDao = jxSkjhgxbDao;
	}
	
	public BaseDAO<JxPkjlb, String> getJxPkjlbDao() {
		return jxPkjlbDao;
	}

	public void setJxPkjlbDao(BaseDAO<JxPkjlb, String> jxPkjlbDao) {
		this.jxPkjlbDao = jxPkjlbDao;
	}

	@Override
	public JxSkxxb findbyId(int id) {
		return this.jxSkxxbDao.findById(JxSkxxb.class,id) ;
	}

	@Override
	public boolean add(JxSkxxb instance) {
		try {
			jxSkxxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public boolean delete(JxSkxxb instance) {
		try {
			this.jxSkxxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean update(JxSkxxb instance) {
		try{
			this.jxSkxxbDao.merge(instance);
		}catch(Exception e){
			return false;
		}
		return true;
	}

	@Override
	public List<JxSkxxb> Query(String filters, String orders, Object... values) {
		String queryString = "from JxSkxxb as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<JxSkxxb>) this.jxSkxxbDao.hqlQuery(queryString, values);
	}

	@Override
	public Page<JxSkxxb> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewSkxxPk as model";
		if(filters != null && (!filters.isEmpty())){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " order by " + orders;
		}
		return this.jxSkxxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.jxSkxxbDao.getAll();
	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		return this.jxSkxxbDao.hqlExecute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return this.jxSkxxbDao.hqlQuery(hql, values);
	}


	@Override
	public boolean updateZtm(String kkkh, String ztm, String zt) {
		try {
	    	String zbHql = "update JxSkxxb as model  set model.zt = '"+zt +"', model.ztm = '"
					+ ztm + "' where model.kkkh = '" + kkkh + "'";
	    	this.jxSkxxbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteBj(String[] kkkhs) {
		try {
			String skxxHql = "delete JxSkxxb where kkkh=?";
			String skjhgxHql = "delete JxSkjhgxb where kkkh=?" ;
			String pkjlHql = "delete JxPkjlb where id=? ";
			for(int i = 0; i < kkkhs.length; i++){
				this.jxSkxxbDao.hqlExecute(skxxHql, kkkhs[i]);
				this.jxSkxxbDao.hqlExecute(skjhgxHql, kkkhs[i]);
				
  				String kkkhHql = "from JxPkjlb where kkkh = '" + kkkhs[i] + "'";
				List<JxPkjlb> list = this.jxPkjlbDao.hqlQuery(kkkhHql);
				
				for(int j = 0;j < list.size();j++){
					JxPkjlb pkjl = list.get(j);
					if(pkjl.getCtid() !=null){
						String kkdwh = pkjl.getKkdwh();
						String xn = pkjl.getXn();
						String xq = pkjl.getXq();
						String ctHql = "from JxPkjlb where kkdwh='" + kkdwh +  "' and xn='" + xn + "' and xq='" + xq +
								 "' or ggkbzm='1' and xn='" + xn + "' and xq='" + xq + "'";
						List<JxPkjlb> preCtList = this.jxPkjlbDao.hqlQuery(ctHql);
								if(preCtList.size() > 0){
									for(int p = 0 ;p < preCtList.size() ;p++){
										JxPkjlb preCtKc = preCtList.get(p);
										String ctid = preCtKc.getCtid();
										if(ctid == null || ctid.isEmpty()){
											continue;
										}else{
											String[] preCtidArr = ctid.split(",");
											String newCtid = "";
												for(String ctidTemp : preCtidArr){
													if(!ctidTemp.equals(pkjl.getId())){
														newCtid += ctidTemp + ",";
													}
												}
												if(!newCtid.isEmpty())
													newCtid = newCtid.substring(0,newCtid.length()-1);
												preCtKc.setCtid(newCtid);
												this.jxPkjlbDao.merge(preCtKc);
											}
										}
								  }
							}
					this.jxPkjlbDao.hqlExcute(pkjlHql, pkjl.getId());
				}
			}
		
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean addTec(String gh, String xm, String kkkh,String jslx) {
		try {
			String hql = "from JxSkxxb where kkkh='" + kkkh + "'";
			List <?> list = this.hqlQuery(hql);
			if(list.size() > 0){
				String updateHql = "update JxSkxxb set " + jslx + "h= '"+ gh +"', "
						+ jslx + "= '" + xm + "' where kkkh = '" + kkkh + "'";
				this.jxSkxxbDao.hqlExecute(updateHql);
			}
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	
	@Override
	public String getKkkh(String prefixion) {
		String hql = "from JxSkxxb as model where model.kkkh like '" + prefixion + "%'";
		List<JxSkxxb> list = this.jxSkxxbDao.hqlQuery(hql);
		String [] array = new String[list.size()]; //保存已经存在的培养方案号
		if(list.size() > 0){
			for(int i = 0;i < list.size(); i++){
				array[i] = list.get(i).getKkkh();
			}
		}
		String SerialNum = createSerialNum(array, 3);// 创建后3位
		String kkkh = prefixion + SerialNum;
		return kkkh;
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
	public boolean add(JxSkxxb skxx, JxSkjhgxb[] skjhArr) {
		try {
			this.jxSkxxbDao.saveEntity(skxx);
			for(JxSkjhgxb skjh : skjhArr)
				this.jxSkxxbDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public boolean divideBj(JxSkxxb skxx, JxSkjhgxb skjh) {
		try {
			this.jxSkxxbDao.saveEntity(skxx);
			this.jxSkxxbDao.saveEntity(skjh);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public List<?> getSkxxmx(String kkkh,String kch) {
		String hql = "from JxZxkkjhb as A where exists (select 1 from JxSkjhgxb as B where A.kkjhh= B.kkjhh and B.kkkh='"
				+kkkh + "') and  A.kch='" + kch + "'";
		return this.jxSkxxbDao.hqlQuery(hql);
	}

	@Override
	public List<?> getDivideSkxx(String kkkhArray, String kch) {
		String kkkhs = "'" + kkkhArray.replace(",","','") + "'";
		String hql = "from JxSkxxb where kkkh in (" + kkkhs + ") and kch='" + kch + "'";
		return this.jxSkxxbDao.hqlQuery(hql);
	}

	@SuppressWarnings("rawtypes")
	@Override
	public boolean update(JxSkxxb skxx, JxSkjhgxb[] skjhArr) {
		String hql = "from JxSkjhgxb where kkkh = '" + skxx.getKkkh() + "'";
		List<JxSkjhgxb> skjhList = this.jxSkjhgxbDao.hqlQuery(hql);
		Map<JxSkjhgxb,String> map = new HashMap<JxSkjhgxb, String>();
		for(int i = 0; i < skjhArr.length ;i++){
			boolean isExist = false;
			for(int j = 0 ; j < skjhList.size();j++){
				if(skjhArr[i].getKkjhh().equals(skjhList.get(j).getKkjhh()) && 
						skjhArr[i].getKkkh().equals(skjhList.get(j).getKkkh())){
					isExist = true;
					break;
				}
			}
			if(!isExist){
				map.put(skjhArr[i], "add");
			}
		}
		for(int i = 0; i < skjhList.size() ;i++){
			boolean isExist = false;
			for(int j = 0 ; j < skjhArr.length;j++){
				if(skjhList.get(i).getKkjhh().equals(skjhArr[j].getKkjhh()) && 
						skjhList.get(i).getKkkh().equals(skjhArr[j].getKkkh())){
					isExist = true;
					break;
				}
			}
			if(!isExist){
				map.put(skjhList.get(i), "delete");
			}
		}
		this.jxSkxxbDao.merge(skxx);
		Iterator it = map.entrySet().iterator();
		while(it.hasNext()){
			Entry entry = (Entry) it.next();
			JxSkjhgxb skjh = (JxSkjhgxb) entry.getKey();
			String value = (String) entry.getValue();
			if("add".equals(value)){
				this.jxSkjhgxbDao.save(skjh);
			}else if("delete".equals(value)){
				this.jxSkjhgxbDao.delete(skjh);
			}
		}
		return false;
	}
}
