package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.RsJgxxb;

public interface RsJgxxbService {
	public RsJgxxb findByGh(String gh);
	
	public boolean checkIsExistByGh(String gh);
	
	public RsJgxxb findbyId(Long id);

	public boolean add(RsJgxxb instance);
	
	public boolean deleteByIds(String ids);
	
	public boolean delete(RsJgxxb instance);
	
	public boolean update(RsJgxxb instance);	

	public List<RsJgxxb> Query(String filters, String orders, Object... values);	

	public Page<RsJgxxb> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<?> hqlQuery(String hql, Object...values);

}
