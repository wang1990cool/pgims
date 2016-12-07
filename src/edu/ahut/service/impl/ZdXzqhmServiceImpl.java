package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.TreeNode;
import edu.ahut.model.ZdXzqhm;
import edu.ahut.service.ZdXzqhmService;
import edu.ahut.util.CommonUtil;

public class ZdXzqhmServiceImpl implements ZdXzqhmService {
	
	private BaseDAO<ZdXzqhm, String> zdXzqhmDao;

	public BaseDAO<ZdXzqhm, String> getZdXzqhmDao() {
		return zdXzqhmDao;
	}

	public void setZdXzqhmDao(BaseDAO<ZdXzqhm, String> zdXzqhmDao) {
		this.zdXzqhmDao = zdXzqhmDao;
	}

	public TreeNode getTreeData(String dicTabName){
        TreeNode root = new TreeNode();
        root.setChildren(new ArrayList<TreeNode>());
        root.setId(0); root.setText(""); root.setParentid(0);
        String sql = " select * from " + dicTabName + " where SFYX=1 order by XZQHM";
		try {
		
			List<?> list = this.zdXzqhmDao.nativeSqlQuery(sql, true).list();
			for(Iterator<?> iter=list.iterator();iter.hasNext();)
			{
				Object[] obj=(Object[])iter.next(); 
				TreeNode node = new TreeNode();
				node.setChildren(new ArrayList<TreeNode>());
				node.setId(Integer.parseInt(obj[1].toString()));
				node.setText(obj[2].toString());
				node.setQtip(obj[2].toString());
				node.setParentid(Integer.parseInt(obj[4].toString()));
				node.setLeaf("1".equals(obj[6].toString())?true:false);			
				CommonUtil.addNode(root, node);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return root;
	}
	
}