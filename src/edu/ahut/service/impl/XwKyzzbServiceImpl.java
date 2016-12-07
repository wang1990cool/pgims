package edu.ahut.service.impl;

import java.util.Date;
import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyzzb;
import edu.ahut.service.XwKyzzbService;

public class XwKyzzbServiceImpl implements XwKyzzbService{

	private BaseDAO<XwKyzzb,String> xwKyzzbDao;
	
	public BaseDAO<XwKyzzb, String> getXwKyzzbDao() {
		return xwKyzzbDao;
	}

	public void setXwKyzzbDao(BaseDAO<XwKyzzb, String> xwKyzzbDao) {
		this.xwKyzzbDao = xwKyzzbDao;
	}

	
	public boolean add(XwKyzzb instance) {
		try {
			xwKyzzbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete XwKylwzlb where kyuuid in (" + ids + ")";
		return this.xwKyzzbDao.hqlExcute(hql);
	}
	public boolean delete(XwKyzzb instance){
		try {
			xwKyzzbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(XwKyzzb instance){
		try {
			xwKyzzbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<XwKyzzb> Query(String filters, String orders, Object... values){
		String hql = "from XwKyzzb as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return xwKyzzbDao.hqlQuery(hql, values);
	}
	
	public Page<XwKyzzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from XwKyzzb as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return xwKyzzbDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return xwKyzzbDao.getAll();
	}

//	public boolean hqlExcute(String hql, Object...values){
//		return xwKyzzbDao.hqlExecute(hql, values);
//	}
	
	public List<XwKyzzb> hqlQuery(String hql, Object...values){
		return xwKyzzbDao.hqlQuery(hql, values);
	}
//	public Boolean changeFlowFlag(String sznj,String xn,String xq,String fyh,String zydm,String xslxm,String sfyx) throws Exception{
//	     try{
//	    	 XwKyzzb billInstance =  xwKyzzbDao.find("from XwKyzzb as model where sznj='" + sznj + "'and xn='" + xn + "'"
//	    	 		+ "and xq='" + xq + "'and fyh='" + fyh + "'and zydm='" + zydm + "'"
//	    	 				+ "and xslxm='" + xslxm + "'").get(0);
//	    	billInstance.setSfyx(sfyx);
////	    	billInstance.setZt(zt);
//	    	xwKyzzbDao.merge(billInstance);
//	     }catch(Exception e){
//	    	 e.printStackTrace();
//	    	 return false;
//	     }
//	     return true;
//	}

	@Override
	public boolean hqlExcute(String hql, Object... values) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public Boolean changeFlowFlag(String xh,String kyuuid,String ztm,String zt,String shrgh,String shr,Date shsj,String shyj
			,String shjgm,String shjg) throws Exception{
	     try{
	    	 XwKyzzb billInstance = xwKyzzbDao.find("from XwKyzzb as model where xh='" + xh + "'and "
	    	 		+ "kyuuid='" + kyuuid + "'").get(0);
	    	billInstance.setZtm(ztm);
	    	billInstance.setZt(zt);
	    	billInstance.setShrgh(shrgh);
	    	billInstance.setShr(shr);
	    	billInstance.setShyj(shyj);
	    	billInstance.setShjgm(shjgm);
	    	billInstance.setShjg(shjg);
	    	billInstance.setShsj(shsj);
	    	xwKyzzbDao.merge(billInstance);
	     }catch(Exception e){
	    	 e.printStackTrace();
	    	 return false;
	     }
	     return true;
	}
	@Override
	public Boolean changeFlowFlagg(String xh,String kyuuid,String ztm,String zt,String zsrgh,String zsr,Date zssj,String zsyj
			,String shjgm,String shjg) throws Exception{
	     try{
	    	 XwKyzzb billInstance = xwKyzzbDao.find("from XwKyzzb as model where xh='" + xh + "'and "
	    	 		+ "kyuuid='" + kyuuid + "'").get(0);
	    	billInstance.setZtm(ztm);
	    	billInstance.setZt(zt);
	    	billInstance.setZsrgh(zsrgh);
	    	billInstance.setZsr(zsr);
	    	billInstance.setZsyj(zsyj);
	    	billInstance.setShjgm(shjgm);
	    	billInstance.setShjg(shjg);
	    	billInstance.setZssj(zssj);
	    	xwKyzzbDao.merge(billInstance);
	     }catch(Exception e){
	    	 e.printStackTrace();
	    	 return false;
	     }
	     return true;
	}
@Override
public String getKyuuid(String KYUUID) {
	String hql = "from XwKyzzb as model where model.kyuuid like '" + KYUUID + "%'";
	List<XwKyzzb> list = xwKyzzbDao.hqlQuery(hql);
	String [] pyfahArray = new String[list.size()]; //保存已经存在的培养方案号
	if(list.size() > 0){
		for(int i = 0;i < list.size(); i++){
			pyfahArray[i] = list.get(i).getKyuuid();
		}
	}
	String SerialNum = createSerialNum(pyfahArray, 3);// 创建后3位
	String kyuuid = KYUUID + SerialNum;
	return kyuuid;
}
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


}
