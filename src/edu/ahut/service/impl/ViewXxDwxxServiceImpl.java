package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.TreeNode;
import edu.ahut.model.ViewXxDwxx;
import edu.ahut.service.ViewXxDwxxService;
import edu.ahut.util.CommonUtil;

public class ViewXxDwxxServiceImpl implements ViewXxDwxxService {
	private BaseDAO<ViewXxDwxx, String> viewXxDwxxDao;
	
	public BaseDAO<ViewXxDwxx, String> getViewXxDwxxDao() {
		return viewXxDwxxDao;
	}

	public void setViewXxDwxxDao(BaseDAO<ViewXxDwxx, String> viewXxDwxxDao) {
		this.viewXxDwxxDao = viewXxDwxxDao;
	}

	@Override
	public ViewXxDwxx findbyId(int id) {
		return this.viewXxDwxxDao.findById(ViewXxDwxx.class,id) ;
	}

	@Override
	public List<ViewXxDwxx> Query(String filters, String orders, Object... values) {
		String queryString = "from ViewXxDwxx as model";
		if(filters != null && filters != ""){
			queryString += " where " + filters;
		}
		if(orders != null && orders !=""){
			queryString += " order by " + orders;
		}
		return (List<ViewXxDwxx>) this.viewXxDwxxDao.hqlQuery(queryString, values);
	}

	public Page<ViewXxDwxx> pageQueryByView(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewFakcKck as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewXxDwxxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
	@Override
	public Page<ViewXxDwxx> pageQuery(int startNo, int pageSize, String filters,String orders, Object... values) {
		String hql = "from ViewXxDwxx as model";
		if(filters != null && filters != ""){
			hql += " where " + filters;
		}
		if(orders != null && orders !=""){
			hql += " where " + orders;
		}
		return this.viewXxDwxxDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	@Override
	public List<?> getAll() {
		return this.viewXxDwxxDao.getAll();
	}

	@Override
	public TreeNode getTreeData(String dicTabName) {
        TreeNode root = new TreeNode();
        root.setChildren(new ArrayList<TreeNode>());
        root.setId(0); root.setText(""); root.setParentid(0);
        String sql = " select * from " + dicTabName + " where SFYX=1 order by DWLBM";
		try {
		
//			List<?> list = this.viewXxDwxxDao.nativeSqlQuery(sql, true).list();
//			for(int i = 0;i < list.size();i++){
//				ViewXxDwxx 
//				TreeNode node = new TreeNode();
//			}
//			
//			for(Iterator<?> iter=list.iterator();iter.hasNext();)
//			{
//				 ViewXxDwxx[] dwxx=( ViewXxDwxx[])iter.next(); 
//				TreeNode node = new TreeNode();
//				node.setChildren(new ArrayList<TreeNode>());
//				node.setId(dwxx[i]);
//				node.setId(Integer.parseInt(obj[1].toString()));
//				node.setText(obj[2].toString());
//				node.setQtip(obj[2].toString());
//				node.setParentid(Integer.parseInt(obj[4].toString()));
//				node.setLeaf("1".equals(obj[6].toString())?true:false);			
//				CommonUtil.addNode(root, node);
//			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return root;
	}

}
