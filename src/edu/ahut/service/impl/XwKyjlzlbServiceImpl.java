package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyjlzlb;
import edu.ahut.service.XwKyjlzlbService;

public class XwKyjlzlbServiceImpl implements XwKyjlzlbService{

	private BaseDAO<XwKyjlzlb,String> xwKyjlzlbDao;
	
	public BaseDAO<XwKyjlzlb, String> getXwKyjlzlbDao() {
		return xwKyjlzlbDao;
	}

	public void setXwKyjlzlbDao(BaseDAO<XwKyjlzlb, String> xwKyjlzlbDao) {
		this.xwKyjlzlbDao = xwKyjlzlbDao;
	}

	
	public boolean add(XwKyjlzlb instance) {
		try {
			xwKyjlzlbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(XwKyjlzlb instance){
		try {
			xwKyjlzlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(XwKyjlzlb instance){
		try {
			xwKyjlzlbDao.merge(instance);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}	
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKyjlzlb where id in (" + ids + ")";
		return this.xwKyjlzlbDao.hqlExcute(hql);
	}
	public boolean deleteByIds1(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKyjlzlb where kyuuid in (" + ids + ")";
		return this.xwKyjlzlbDao.hqlExcute(hql);
	}
	public List<XwKyjlzlb> Query(String filters, String orders, Object... values){
		String hql = "from XwKyjlzlb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKyjlzlbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKyjlzlb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKyjlzlb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKyjlzlbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKyjlzlbDao.getAll();
	}

	public boolean hqlExcute(String hql, Object...values){
		return xwKyjlzlbDao.hqlExcute(hql, values);
	}
	
	public List<XwKyjlzlb> hqlQuery(String hql, Object...values){
		return xwKyjlzlbDao.hqlQuery(hql, values);
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
