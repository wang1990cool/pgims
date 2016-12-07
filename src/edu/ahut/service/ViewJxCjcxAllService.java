package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxCjcxAll;

public interface ViewJxCjcxAllService {

	public ViewJxCjcxAll findbyFyh(String fyh);
   	public ViewJxCjcxAll findbyFymc(String fymc);
   	public ViewJxCjcxAll findbyZydm(String zydm);
   	public ViewJxCjcxAll findbyZymc(String zymc);
   	public ViewJxCjcxAll findbyXslxm(String xslxm);
   	public ViewJxCjcxAll findbyXslx(String xslx);
   
	
	public List<ViewJxCjcxAll> Query(String filters, String orders, Object... values);
	
	public Page<ViewJxCjcxAll> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<ViewJxCjcxAll> getCjcxXwk(String xh)throws Exception;
	public List<ViewJxCjcxAll> getCjcxFxwk(String xh)throws Exception;
	
	public List<ViewJxCjcxAll> getAll();
	
	public boolean hqlExcute(String hql, Object...values);
	
	public List<ViewJxCjcxAll> hqlQuery(String hql, Object...values);
	
	public List<?> getAll(String filter,String order);
	public List<?> getByModelName(String modelName);
	ViewJxCjcxAll findbyXm(String xm);
	ViewJxCjcxAll findbyXh(String xh);
	ViewJxCjcxAll findbyId(Long id);

}
