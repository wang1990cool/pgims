package edu.ahut.service;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import jxl.read.biff.BiffException;
import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxb;

public interface YxXsjbxxbService {
	public boolean deleteByIds(String ids);
	
	public boolean add(YxXsjbxxb instance);

	public boolean delete(YxXsjbxxb instance);

	public boolean update(YxXsjbxxb instance);

	public List<YxXsjbxxb> Query(String filters, String orders, Object... values);

	public Page<YxXsjbxxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values);

	public List<?> getAll();
	
	public boolean insert(File upExcle, String dataTable)throws BiffException, IOException, SQLException;
	
	public boolean truncate(String dataTable);
	
	public boolean backup(String dataTable, String dataTableHistory);
	
	public boolean deleteData(String dataTable, String dataTableHistory);
	
	public YxXsjbxxb getXsJbxx(String zkzh) throws Exception;
	
	public List<YxXsjbxxb> getJbxx(String xh);
	
	public YxXsjbxxb findById(Long id);
	
	public void ZipContraMultiFile(String path ,String outpath);
	
//	public void delFolder(String folderPath);
	
	public  boolean delAllFile(String path);
	
	public void ZipMultiFile(String path ,String zippath);
	
}
