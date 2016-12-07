package edu.ahut.util;

import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class BaseDAO extends HibernateDaoSupport {

	protected void initDao() {
	}

	public Query createQuery(String hql, Object... values) {
		Query query = this.getSession(false).createQuery(hql);
		if (values != null) {
			for (int i = 0; i < values.length; i++) {
				query.setParameter(i, values[i]);
			}
		}
		return query;
	}

	public static String removeOrders(String hql) {
		Pattern p = Pattern.compile("order\\s*by[\\w|\\W|\\s|\\S]*",
				Pattern.CASE_INSENSITIVE);
		Matcher m = p.matcher(hql);
		StringBuffer sb = new StringBuffer();
		while (m.find()) {
			m.appendReplacement(sb, "");
		}
		m.appendTail(sb);
		return sb.toString();
	}

	public static String removeSelect(String hql) {
		int beginPos = hql.toLowerCase().indexOf("from");
		return hql.substring(beginPos);
	}

	public boolean hqlExcute(String hql, Object... values) {
		Query query = this.createQuery(hql, values);
		if (query.executeUpdate() > 0)
			return true;
		else
			return false;
	}

	public List<?> hqlQuery(String hql, Object... values) {
		Query query = this.createQuery(hql, values);
		List<?> list = query.list();
		return list;
	}
	
	public List<?> SqlQuery(String sql) {
		SQLQuery query = this.getSession().createSQLQuery(sql);
		List<?> list = query.list();
		return list;
	}
	
	public Iterator<?> SqlQueryIter(String sql) {
		SQLQuery query = this.getSession().createSQLQuery(sql);
		return query.iterate();
	}

	public List<?> findByNamedParams(String hql, String[] paramNames,
			Object... values) {
		return this.getHibernateTemplate().findByNamedParam(hql, paramNames,
				values);
	}
}