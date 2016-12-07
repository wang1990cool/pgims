
package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.ViewPkJxrw;
import edu.ahut.service.JxrwService;

public class JxrwServiceImpl implements JxrwService{

	
	private BaseDAO<ViewPkJxrw,String> viewPkJxrwDao;
	
	
	public BaseDAO<ViewPkJxrw, String> getViewPkJxrwDao() {
		return viewPkJxrwDao;
	}

	public void setViewPkJxrwDao(BaseDAO<ViewPkJxrw, String> viewPkJxrwDao) {
		this.viewPkJxrwDao = viewPkJxrwDao;
	}

	public List<ViewPkJxrw> getSkxx(String kkkh) throws Exception{
		List<ViewPkJxrw> skxxList;
		try{
			String kkkhs = "'" + kkkh.replace(",", "','") + "'";
			String hql = "from ViewPkJxrw where kkkh in (" + kkkhs + ")";
			skxxList = viewPkJxrwDao.find(hql);
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return skxxList;
	}

	@Override
	public List<ViewPkJxrw> getAll() {
		String hql = "from ViewPkJxrw";
		return viewPkJxrwDao.find(hql);
	}
	
	
	
}
