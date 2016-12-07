package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxBdqk;

public interface ViewYxBdqkService {

	public List<ViewYxBdqk> Query(String filters, String orders, Object... values);

	public Page<ViewYxBdqk> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	

	
}
