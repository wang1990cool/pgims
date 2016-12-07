
package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxXsxkall;
import edu.ahut.service.PsdmService;

public class PsdmServiceImpl implements PsdmService{

	
	private BaseDAO<ViewJxXsxkall,String> viewJxXsxkallDao;
	
	
	public BaseDAO<ViewJxXsxkall, String> getViewJxXsxkallDao() {
		return viewJxXsxkallDao;
	}

	public void setViewJxXsxkallDao(BaseDAO<ViewJxXsxkall, String> viewJxXsxkallDao) {
		this.viewJxXsxkallDao = viewJxXsxkallDao;
	}

	
	public List<List<ViewJxXsxkall>> getXsxk(String kkkh) throws Exception{
		List<List<ViewJxXsxkall>> list = new ArrayList<List<ViewJxXsxkall>>();
		try{
			
			String[] kkkhArray = kkkh.split(",");
			for(int i= 0;i < kkkhArray.length;i++){
				String hql = "from ViewJxXsxkall where kkkh='" + kkkhArray[i] + "'";
				List<ViewJxXsxkall> xsxkList = viewJxXsxkallDao.find(hql);
				list.add(xsxkList);
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return list;
	}
//	public List<ViewJxXsxkall> getXsxk(String kkkh) throws Exception{
//		List<ViewJxXsxkall> xsxkList;
//		try{
//			String hql = "from ViewJxXsxkall where kkkh='" + kkkh + "'";
//			xsxkList = viewJxXsxkallDao.find(hql);
//		}catch(Exception e){
//			e.printStackTrace();
//			throw e;
//		}
//		return xsxkList;
//	}

	@Override
	public List<ViewJxXsxkall> getAll() {
		String hql = "from ViewJxXsxkall";
		return viewJxXsxkallDao.find(hql);
	}

	@Override
	public List<List<ViewJxXsxkall>> getXsxk(JxSkxxb[] skxxArr)
			throws Exception {
		List<List<ViewJxXsxkall>> list = new ArrayList<List<ViewJxXsxkall>>();
		try{
			for(int i= 0;i < skxxArr.length;i++){
				String hql = "from ViewJxXsxkall where kkkh='" + skxxArr[i].getKkkh() + "'";
				List<ViewJxXsxkall> xsxkList = viewJxXsxkallDao.find(hql);
				list.add(xsxkList);
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return list;
	}

	@Override
	public List<ViewJxXsxkall> getXk(String kkkh) {
		String hql = "from ViewJxXsxkall where kkkh = '" + kkkh + "'order by xh asc";
		return viewJxXsxkallDao.find(hql);
	}

}
