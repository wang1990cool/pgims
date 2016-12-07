package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKtbgzlb;
import edu.ahut.service.XwKtbgzlbService;

public class XwKtbgzlbServiceImpl implements XwKtbgzlbService{

	private BaseDAO<XwKtbgzlb,String> xwKtbgzlbDao;
	
	public BaseDAO<XwKtbgzlb, String> getXwKtbgzlbDao() {
		return xwKtbgzlbDao;
	}

	public void setXwKtbgzlbDao(BaseDAO<XwKtbgzlb, String> xwKtbgzlbDao) {
		this.xwKtbgzlbDao = xwKtbgzlbDao;
	}

	
	public boolean add(XwKtbgzlb instance) {
		try {
			xwKtbgzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(XwKtbgzlb instance){
		try {
			xwKtbgzlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(XwKtbgzlb instance){
		try {
			xwKtbgzlbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKtbgzlb where id in (" + ids + ")";
		return this.xwKtbgzlbDao.hqlExcute(hql);
	}
	public List<XwKtbgzlb> Query(String filters, String orders, Object... values){
		String hql = "from XwKtbgzlb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKtbgzlbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKtbgzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKtbgzlb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKtbgzlbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKtbgzlbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwKtbgzlbDao.hqlExcute(hql, values);
	}
	
	public List<XwKtbgzlb> hqlQuery(String hql, Object...values){
		return xwKtbgzlbDao.hqlQuery(hql, values);
	}

	/*public String isConflict(String kkkh, String kksj, String kkkhs){
		String kcmh = "";
		XkCtjc selCou = new XkCtjc();
		String[] str1  = this.getSj(kksj);
		selCou.setKczs(str1[0]);
		selCou.setKcjc(str1[1]);
		selCou.setKcsjm(str1[2]);
		selCou.setKkkh(kkkh);
		selCou.initTimeFlag();
		
		JSONObject khs = JSONObject.fromObject(kkkhs);	
		@SuppressWarnings("unchecked")
		List<JSONObject> xkxxs = (List<JSONObject>)khs.getJSONArray("xkxxs");
		for(JSONObject xkxx : xkxxs){
			XkCtjc myCou = new XkCtjc();
			myCou.setKczs(xkxx.getString("kczs"));
			myCou.setKcjc(xkxx.getString("kcjc"));
			myCou.setKcsjm(xkxx.getString("kcsjm"));
			myCou.setKkkh(kkkh);
			myCou.initTimeFlag();
			if(myCou.isConflict(selCou)){
				kcmh = xkxx.getString("kch")+ " "+xkxx.getString("kcmc");
				break;
			}
		}
		
		return kcmh;
	}*/
	
	public String[] getSj(String kksj){
		String[]  sj = new String[3];
		int n1 = kksj.indexOf("|");
		int n2 = kksj.substring(n1+1, kksj.length()).indexOf("|");
		sj[0] = kksj.substring(0, n1);
		sj[1] = kksj.substring(n1+1, kksj.length()).substring(0,n2);
		sj[2] = kksj.substring(kksj.length()-1,kksj.length());
		
		return sj;
	}
}
