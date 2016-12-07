package edu.ahut.service;

import java.util.List;

import edu.ahut.dao.support.Page;
import edu.ahut.model.TreeNode;
import edu.ahut.model.ViewXxDwxx;
public interface ViewXxDwxxService {
		public TreeNode getTreeData(String dicTabName);
	
	   	public ViewXxDwxx findbyId(int id);
		
		public List<ViewXxDwxx> Query(String filters, String orders, Object... values);	
	
		public Page<ViewXxDwxx> pageQueryByView(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public Page<ViewXxDwxx> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values);
		
		public List<?> getAll();
		
}
