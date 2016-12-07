package edu.ahut.dao.base;

import java.util.List;

import org.hibernate.Query;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;


public class ZdUtilDAOImpl extends HibernateDaoSupport implements ZdUtilDAO {
	
	protected void initDao() {
	}
	
	public Query createQuery(String hql,Object... values) {
		Query query = this.getSession(false).createQuery(hql); //这里的false表示不创建session,保证当前操作在spring同一个事务的管理下
		if (values != null) {
			for (int i = 0; i < values.length; i++) {
				query.setParameter(i, values[i]);
			}
		}
		return query;
	}
	
	@Override
	public boolean hqlExcute(String hql, Object... values) {
		Query query = this.createQuery(hql, values);
		if(query.executeUpdate() > 0){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		Query query = this.createQuery(hql, values);
		List<?> list = query.list();
		return list;
	}

	@Override
	public List<?> findByNamedParams(String hql, String[] paramNames,
			Object... values) {
		return this.getHibernateTemplate().findByNamedParam(hql, paramNames, values);
	}

}
