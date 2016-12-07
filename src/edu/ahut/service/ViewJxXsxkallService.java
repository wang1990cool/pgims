package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewJxXsxkall;

public interface ViewJxXsxkallService {
	   
	   	public ViewJxXsxkall findbyFyh(String fyh);
	   	public ViewJxXsxkall findbyFymc(String fymc);
	   	public ViewJxXsxkall findbyZydm(String zydm);
	   	public ViewJxXsxkall findbyZymc(String zymc);
	   	public ViewJxXsxkall findbyXslxm(String xslxm);
	   	public ViewJxXsxkall findbyXslx(String xslx);
		public List<ViewJxXsxkall> Query(String filters, String orders, Object... values);	
		
		public Page<ViewJxXsxkall> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		public List<?> getAll(String filter,String order);
		public List<?> getByModelName(String modelName);
		ViewJxXsxkall findbyKcmc(String kcmc);
		ViewJxXsxkall findbyKch(String kch);
		ViewJxXsxkall findbyId(Long id);
}
