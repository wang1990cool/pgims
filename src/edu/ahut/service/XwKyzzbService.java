package edu.ahut.service;

import java.util.Date;
import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.XwKyzzb;

public interface XwKyzzbService {

	public boolean add(XwKyzzb instance);
	
	public boolean delete(XwKyzzb instance);
	
	public boolean update(XwKyzzb instance);
	
	public List<XwKyzzb> Query(String filters, String orders, Object... values);
	
	public Page<XwKyzzb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	public Boolean changeFlowFlag(String xh,String kyuuid,String ztm,String zt,String shrgh,String shr,Date shsj,String shyj
			,String shjgm,String shjg) throws Exception;
	public List<XwKyzzb> hqlQuery(String hql, Object...values);
	public Boolean changeFlowFlagg(String xh,String kyuuid,String ztm,String zt,String zsrgh,String zsr,Date zssj,String zsyj
			,String shjgm,String shjg) throws Exception;
	public String getKyuuid(String KYUUID);

	public boolean deleteByIds(String ids);
}
