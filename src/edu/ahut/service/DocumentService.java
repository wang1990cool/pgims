package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.Document;

public interface DocumentService {

	public boolean add(Document instance);

	public boolean delete(Document instance);

	public boolean update(Document instance);

	public List<?> Query(String filters, String orders, Object... values);

	public List<?> getAll();
	
	public Document findById(String id);
	
	public boolean hqlExecute(String hql, Object... values);

	public List<?> hqlQuery(String hql, Object... values);
	
	public Page<?> pageQuery(int startNo, int pageSize,
			String filters, String orders,Object...values);
	
	public List<?> getFiles(String fileName) throws Exception;
}
