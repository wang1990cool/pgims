package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.WebMenu;
import edu.ahut.service.WebMenuService;

public class WebMenuServiceImpl implements WebMenuService{
   private BaseDAO<WebMenu, String> webMenuDao;
   
	public BaseDAO<WebMenu, String> getWebMenuDao() {
		return webMenuDao;
	}

	public void setWebMenuDao(BaseDAO<WebMenu, String> webMenuDao) {
		this.webMenuDao = webMenuDao;
	}

	public boolean addWebMenu(WebMenu instance) {
		try {
			webMenuDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean deleteWebMenu(WebMenu instance){
		try {
			webMenuDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean updateWebMenu(WebMenu instance){
		try {
			webMenuDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<?> getWebMenusByParentId(java.lang.Integer parentId){
		String hql = "from WebMenu as model where model.parentid = ?";
		return webMenuDao.find(hql, new Object[]{parentId});
	}

	public WebMenu getWebMenuByMenuId(Integer menuId) {
		String hql = "from WebMenu as model where model.id=" + menuId;
		return webMenuDao.hqlQuery(hql).get(0);
	}
}
