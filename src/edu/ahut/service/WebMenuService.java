package edu.ahut.service;

import edu.ahut.model.WebMenu;
import java.util.List;

public interface WebMenuService {
	
	/**
	 * 
	 * @param menuId
	 * @return
	 */
	public WebMenu getWebMenuByMenuId(java.lang.Integer menuId);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean addWebMenu(WebMenu instance);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean deleteWebMenu(WebMenu instance);
	
	/**
	 * 
	 * @param instance
	 * @return
	 */
	public boolean updateWebMenu(WebMenu instance);

	/**
	 * 
	 * @param parentId
	 * @return
	 */
	public List<?> getWebMenusByParentId(java.lang.Integer parentId);
}
