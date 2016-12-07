
package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.XsJcxxb;
import edu.ahut.model.ViewJxCjcxAll;
import edu.ahut.service.CjdyService;

public class CjdyServiceImpl implements CjdyService{

	
	private BaseDAO<ViewJxCjcxAll,String> viewJxCjcxAllDao;
	
	
	public BaseDAO<ViewJxCjcxAll, String> getViewJxCjcxAllDao() {
		return viewJxCjcxAllDao;
	}

	public void setViewJxCjcxAllDao(BaseDAO<ViewJxCjcxAll, String> viewJxCjcxAllDao) {
		this.viewJxCjcxAllDao = viewJxCjcxAllDao;
	}

	

	
	public List<List<ViewJxCjcxAll>> getXscj(String xh) throws Exception{
		List<List<ViewJxCjcxAll>> list = new ArrayList<List<ViewJxCjcxAll>>();
		try{
			
			String[] xhArray = xh.split(",");
			for(int i= 0;i < xhArray.length;i++){
				String hql = "from ViewJxCjcxAll where xh='" + xhArray[i] + "' order by kclbm asc";
				List<ViewJxCjcxAll> xscjList = viewJxCjcxAllDao.find(hql);
				list.add(xscjList);
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return list;
	}

	@Override
	public List<ViewJxCjcxAll> getAll() {
		String hql = "from ViewJxCjcxAll";
		return viewJxCjcxAllDao.find(hql);
	}

	@Override
	public List<List<ViewJxCjcxAll>> getXscj(XsJcxxb[] xsxxArr)throws Exception {
		List<List<ViewJxCjcxAll>> list = new ArrayList<List<ViewJxCjcxAll>>();
		try{
			for(int i= 0;i < xsxxArr.length;i++){
				String hql = "from ViewJxCjcxAll where xh='" + xsxxArr[i].getXh() + "' order by kclbm asc";
				List<ViewJxCjcxAll> xscjList = viewJxCjcxAllDao.find(hql);
				list.add(xscjList);
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return list;
	}

	@Override
	public List<ViewJxCjcxAll> getCj(String xh) {
		String hql = "from ViewJxCjcxAll where xh = '" + xh + "' and sjzt = '1' order by kclbm,kch asc";
		return viewJxCjcxAllDao.find(hql);
	}
	
	@Override
	public List<ViewJxCjcxAll> getZcj(String xh) {
		String hql = "from ViewJxCjcxAll a where kccj = (select max(kccj) from ViewJxCjcxAll b where b.kch = a.kch and xh = '" + xh + "' and sjzt = '1') and xh = '" + xh + "' order by kclbm,kch asc";
		return viewJxCjcxAllDao.find(hql);
	}
	
	

	
	
}
