package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKtbgzb;
import edu.ahut.service.XwKtbgzbService;

public class XwKtbgzbServiceImpl implements XwKtbgzbService{

	private BaseDAO<XwKtbgzb,String> xwKtbgzbDao;
	
	public BaseDAO<XwKtbgzb, String> getXwKtbgzbDao() {
		return xwKtbgzbDao;
	}

	public void setXwKtbgzbDao(BaseDAO<XwKtbgzb, String> xwKtbgzbDao) {
		this.xwKtbgzbDao = xwKtbgzbDao;
	}

	
	public boolean add(XwKtbgzb instance) {
		try {
			xwKtbgzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(XwKtbgzb instance){
		try {
			xwKtbgzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(XwKtbgzb instance){
		try {
			xwKtbgzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<XwKtbgzb> Query(String filters, String orders, Object... values){
		String hql = "from XwKtbgzb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKtbgzbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKtbgzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKtbgzb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKtbgzbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKtbgzbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwKtbgzbDao.hqlExcute(hql, values);
	}
	
	public List<XwKtbgzb> hqlQuery(String hql, Object...values){
		return xwKtbgzbDao.hqlQuery(hql, values);
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
	public boolean updateZtm(String xh, String shztm, String shzt,String dsshyj) {
	    try {
	    	String zbHql = "update XwKtbgzb as model  set model.shzt = '"+shzt +"', model.shztm = '"
					+ shztm +"', model.dsshyj = '"+ dsshyj +"' where model.xh = '" + xh + "'";
	    	this.xwKtbgzbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		}
	    return true;
	}
}
