package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.WebRight;

public interface WebRightService {

	public WebRight findByRightCode(String rightcode);
	
	public boolean add(WebRight instance);
	
	public boolean delete(WebRight instance);
	
	public boolean update(WebRight instance);
	
	public List<WebRight> Query(String filters, String orders, Object... values);
	
	public Page<WebRight> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
	
	public List<?> getAll();
	
}
