package edu.ahut.service;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import jxl.read.biff.BiffException;
import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxbH;

public interface YxXsjbxxbHService {
	public boolean deleteByIds(String ids);
	
	public boolean add(YxXsjbxxbH instance);

	public boolean delete(YxXsjbxxbH instance);

	public boolean update(YxXsjbxxbH instance);

	public List<YxXsjbxxbH> Query(String filters, String orders, Object... values);

	public Page<YxXsjbxxbH> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	
	public boolean insert(File upExcle, String dataTable)throws BiffException, IOException, SQLException;
	
	public boolean truncate(String dataTable);
	
	public boolean backup(String dataTable, String dataTableHistory);
	
	
}
