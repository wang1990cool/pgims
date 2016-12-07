package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyxmb;
import edu.ahut.service.XwKyxmbService;

public class XwKyxmbServiceImpl implements XwKyxmbService{

	private BaseDAO<XwKyxmb,String> xwKyxmbDao;
	
	public BaseDAO<XwKyxmb, String> getXwKyxmbDao() {
		return xwKyxmbDao;
	}

	public void setXwKyxmbDao(BaseDAO<XwKyxmb, String> xwKyxmbDao) {
		this.xwKyxmbDao = xwKyxmbDao;
	}

	
	public boolean add(XwKyxmb instance) {
		try {
			xwKyxmbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(XwKyxmb instance){
		try {
			xwKyxmbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean updateZtm(String xh, String shztm, String shzt,String shyj,String shr) {
	    try {
	    	String zbHql = "update XwKyxmb as model  set model.shzt = '"+shzt +"', model.shztm = '"
					+ shztm +"', model.shyj = '"+ shyj +"', model.shr = '"+shr + "' where model.xh = '" + xh + "'";
	    	this.xwKyxmbDao.hqlExecute(zbHql);
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		}
	    return true;
	}
	public boolean update(XwKyxmb instance){
		try {
			xwKyxmbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<XwKyxmb> Query(String filters, String orders, Object... values){
		String hql = "from XwKyxmb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKyxmbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKyxmb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKyxmb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKyxmbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKyxmbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwKyxmbDao.hqlExcute(hql, values);
	}
	
	public List<XwKyxmb> hqlQuery(String hql, Object...values){
		return xwKyxmbDao.hqlQuery(hql, values);
	}

//	public String isConflict(String kkkh, String kksj, String kkkhs){
//		String kcmh = "";
//		XkCtjc selCou = new XkCtjc();
//		String[] str1  = this.getSj(kksj);
//		selCou.setKczs(str1[0]);
//		selCou.setKcjc(str1[1]);
//		selCou.setKcsjm(str1[2]);
//		selCou.setKkkh(kkkh);
//		selCou.initTimeFlag();
//		
//		JSONObject khs = JSONObject.fromObject(kkkhs);	
//		@SuppressWarnings("unchecked")
//		List<JSONObject> xkxxs = (List<JSONObject>)khs.getJSONArray("xkxxs");
//		for(JSONObject xkxx : xkxxs){
//			XkCtjc myCou = new XkCtjc();
//			myCou.setKczs(xkxx.getString("kczs"));
//			myCou.setKcjc(xkxx.getString("kcjc"));
//			myCou.setKcsjm(xkxx.getString("kcsjm"));
//			myCou.setKkkh(kkkh);
//			myCou.initTimeFlag();
//			if(myCou.isConflict(selCou)){
//				kcmh = xkxx.getString("kch")+ " "+xkxx.getString("kcmc");
//				break;
//			}
//		}
//		
//		return kcmh;
//	}
	
	public String[] getSj(String kksj){
		String[]  sj = new String[3];
		int n1 = kksj.indexOf("|");
		int n2 = kksj.substring(n1+1, kksj.length()).indexOf("|");
		sj[0] = kksj.substring(0, n1);
		sj[1] = kksj.substring(n1+1, kksj.length()).substring(0,n2);
		sj[2] = kksj.substring(kksj.length()-1,kksj.length());
		
		return sj;
	}

	@Override
	public String isConflict(String kkkh, String kksj, String kkkhs) {
		// TODO Auto-generated method stub
		return null;
	}
}
