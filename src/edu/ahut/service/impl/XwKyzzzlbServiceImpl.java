package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyzzzlb;
import edu.ahut.service.XwKyzzzlbService;

public class XwKyzzzlbServiceImpl implements XwKyzzzlbService{

	private BaseDAO<XwKyzzzlb,String> xwKyzzzlbDao;
	
	public BaseDAO<XwKyzzzlb, String> getXwKyzzzlbDao() {
		return xwKyzzzlbDao;
	}

	public void setXwKyzzzlbDao(BaseDAO<XwKyzzzlb, String> xwKyzzzlbDao) {
		this.xwKyzzzlbDao = xwKyzzzlbDao;
	}

	
	public boolean add(XwKyzzzlb instance) {
		try {
			xwKyzzzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(XwKyzzzlb instance){
		try {
			xwKyzzzlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(XwKyzzzlb instance){
		try {
			xwKyzzzlbDao.merge(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}	
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKyzzzlb where id in (" + ids + ")";
		return this.xwKyzzzlbDao.hqlExcute(hql);
	}
	public boolean deleteByIds1(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKyzzzlb where kyuuid in (" + ids + ")";
		return this.xwKyzzzlbDao.hqlExcute(hql);
	}
	public List<XwKyzzzlb> Query(String filters, String orders, Object... values){
		String hql = "from XwKyzzzlb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKyzzzlbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKyzzzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKyzzzlb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKyzzzlbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKyzzzlbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwKyzzzlbDao.hqlExcute(hql, values);
	}
	
	public List<XwKyzzzlb> hqlQuery(String hql, Object...values){
		return xwKyzzzlbDao.hqlQuery(hql, values);
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

//	@Override
//	public boolean updateZtm(String xh, String shztm, String shzt, String shyj) {
//		// TODO Auto-generated method stub
//		return false;
//	}
}
