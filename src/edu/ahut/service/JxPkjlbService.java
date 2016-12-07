package edu.ahut.service;

import java.util.List;

import net.sf.json.JSONObject;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.JxPkkzb;
import edu.ahut.model.JxPksjb;

public interface JxPkjlbService {
	public void updateSkzl(JxPkjlb jxPkjl);
	
	public void deleteByIds(String ids);
	
	/**
	 * 获取教学排课控制信息
	 * @param nj 学年
	 * @param xq 学期
	 * @return
	 */
	public JxPkkzb getJxPkkzb(String nj, String xq);
	
	/**
	 * 获取教学排课时间
	 * @param nj 学年
	 * @param xq 学期
	 * @return
	 */
	public JxPksjb getJxPksjb(String nj, String xq);
	
	/**
	 * 获取教学排课记录
	 * @param xn 学年
	 * @param xq 学期
	 * @return
	 */
	public List<?> getJxPkjlbAll(String filter,String xn, String xq);
	
	/**
	 * 检测当前排课与已排课程是否冲突
	 * @param nPkjlb
	 * @param jxPkjlbLst
	 * @return 是否冲突
	 */
	public List<JxPkjlb> isConflict(JxPkjlb nPkjlb, List<JxPkjlb> jxPkjlbLst);

	/**
	 * 
	 * @param id
	 * @return 
	 */
	public JxPkjlb findById(Long id);

	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean add(JxPkjlb instance,List<JxPkjlb> ctKcList, JSONObject otherData);

	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean delete(JxPkjlb instance);

	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean update(JxPkjlb instance,List<JxPkjlb> ctKcList,JSONObject otherData);

	/**
	 * 
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public List<JxPkjlb> Query(String filters, String orders, Object... values);

	/**
	 * 
	 * @param startNo
	 * @param pageSize
	 * @param filters
	 * @param orders
	 * @param values
	 * @return
	 */
	public Page<JxPkjlb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	/**
	 * 
	 * @return
	 */
	public List<?> getAll();

	public boolean hqlExecute(String hql, Object... values);

	public List<?> hqlQuery(String hql, Object... values);
	
	public List<?> getSkxxAll(String filters,String orders);
	public List<?> getPkjlAll(String filters,String orders);
	
	public String getOccupied(String kczs,String jsbh,String filter);
	
	public void tbkDelete(String ids);
}
