package edu.ahut.service.impl;

import java.util.HashMap;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.WebUser;
import edu.ahut.service.WebUserService;

public class WebUserServiceImpl implements WebUserService{
	private BaseDAO<WebUser, String> webUserDao;

	public BaseDAO<WebUser, String> getWebUserDao() {
		return webUserDao;
	}

	public void setWebUserDao(BaseDAO<WebUser, String> webUserDao) {
		this.webUserDao = webUserDao;
	}

	public HashMap<String, String> login(String userName,String password,String validCode) {
		HashMap<String, String> result = new HashMap<String, String>();
		
		String sysValidCode = (String)ActionContext.getContext().getSession().get("rand");
		if(!sysValidCode.equals(validCode)){
			result.put("failure", "failure");
			result.put("msg", "验证码错误！");
			return result;
		}
		
		WebUser webUser = null;
		try {
			webUser = this.findByUserName(userName);
		} catch (Exception e) {
			e.printStackTrace();
		}

		if(webUser == null || !webUser.getUserPwd().equals(password)){
			result.put("failure", "failure");
			result.put("msg", "用户名或密码错误！");
			return result;
		}
		else{
			ActionContext.getContext().getSession().put("webUser", webUser);
			ActionContext.getContext().getSession().put("userName",webUser.getUserName());
			ActionContext.getContext().getSession().put("userCname",webUser.getUserCName());
			result.put("success", "success");
			return result;
		}
	}
	
	public List<WebUser> findByNamedParams(String hql, String[] paramNames,Object... values){
		return webUserDao.findByNamedParams(hql, paramNames, values);
	}
	
	public boolean add(WebUser instance) {
		try {
			webUserDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean delete(WebUser instance){
		try {
			webUserDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public boolean update(WebUser instance){
		try {
			webUserDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}	
	
	public List<WebUser> Query(String filters, String orders, Object... values){
		String hql = "from WebUser as model";
		
		if(filters != null && filters !="")
			hql += " where " + filters;
		
		if(orders != null && orders !="")
			hql += " order by " + orders;
		
		return webUserDao.hqlQuery(hql, values);
	}
	
	public Page<WebUser> pageQuery(int startNo, int pageSize,String filters, String orders, Object... values){
		String hql = "from WebUser as model";
		
		if((filters != null)&&(!filters.isEmpty()))
			hql += " where " + filters;
		
		if((orders != null)&&(orders!=""))
			hql += " order by " + orders;
	
		return webUserDao.pagedQueryByStartNo(hql, startNo, pageSize,values);
	}
	
	public List<?> getAll(){
		return webUserDao.getAll();
	}

	public WebUser findByUserName(String userName) {
		String hql = "from WebUser where userName='" + userName + "'";
		List<?> webUserList= this.webUserDao.hqlQuery(hql);
		if(webUserList.isEmpty()){
			return null;
		}else{
			return (WebUser)webUserList.get(0);
		}
	}

	@Override
	public boolean deleteByIds(String ids) {
		ids = "'" + ids.replace(",", "','") + "'";
		String hql = "delete WebUser where id in (" + ids + ")";
		return this.webUserDao.hqlExecute(hql);
	}

	@Override
	public boolean checkIsExistByName(String name) {
		String hql = "from WebUser where userName=?";
		List <WebUser> list = this.webUserDao.hqlQuery(hql, new Object[]{name});
		return list.size()>0 ? true : false;
	}
	
}
