package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.ViewYxJfqkAll;

public interface ViewYxJfqkAllService {

	public List<ViewYxJfqkAll> Query(String filters, String orders, Object... values);

	public Page<ViewYxJfqkAll> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	

	
}
