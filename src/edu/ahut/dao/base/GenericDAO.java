package edu.ahut.dao.base;

import edu.ahut.dao.support.AddScalar;
import edu.ahut.dao.support.Page;

import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.StatelessSession;
import org.hibernate.transform.Transformers;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
//import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Repository;

/**
 * 继承自spring的HibernateDaoSupport<br>
 * 提供了和具体实体类无关的数据库操作
 * @author newman
 * @param <T>
 * @since  2013-5-20
 * 
 */
//@Repository("gdao") 
public class GenericDAO<T> extends HibernateDaoSupport {   

	/**
	 * 根据hql查询,直接使用HibernateTemplate的find函数.
	 * @param <T>
	 * @param hql
	 * @param values
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "hiding" })
	public <T> List<T> find(String hql, Object... values) {
		return this.getHibernateTemplate().find(hql, values);
	}
	
	/**
	 * 根据id查询,直接使用HibernateTemplate的find函数.
	 * @param id
	 * @return 
	 * @return
	 */
	public T findById(Class<T> entityClass,java.io.Serializable id){
		
		System.out.println(entityClass.getName());
		System.out.println(id.getClass().getName());
		@SuppressWarnings("unchecked")
		T temp = (T)this.getHibernateTemplate().get(entityClass.getName(), id);
		return temp;
	}
	
	/**
	 * 根据命名参数查询
	 * @param <T>
	 * @param hql 带有命名参数的hql语句
	 * @param paramNames 命名参数的名字
	 * @param values  命名参数的值<br>
	 * <b>例如:</b><br>
	 * findByNamedParams("from Test where t1 = :t",new String[]{"t"},tValue);
	 * @return 
	 */
	@SuppressWarnings({ "unchecked", "hiding" })
	public <T> List<T> findByNamedParams(String hql,String[] paramNames,Object...values){
		return this.getHibernateTemplate().findByNamedParam(hql, paramNames, values);
	}

	/**
	 * 创建Query对象.<br>
	 * 对于需要first,max,fetchsize,cache,cacheRegion等诸多设置的函数,可以在返回Query后自行设置.
	 * @param hql
	 * @param values
	 * @return
	 */
	public Query createQuery(String hql,Object... values) {
		//这里的false表示不创建session,保证当前操作在spring同一个事务的管理下
		Query query = this.getSession(false).createQuery(hql);
		if (values != null) {
			for (int i = 0; i < values.length; i++) {
				query.setParameter(i, values[i]);
			}
		}
		return query;
	}

	/**
	 * 执行一些必须的sql语句把内存中的对象同步到数据库中
	 */
	public void flush() {
		this.getHibernateTemplate().flush();
	}
    
	/**
	 * 清除对象缓存
	 */
	public void clear() {
		this.getHibernateTemplate().clear();
	}

	/**
	 * 返回iterator接口类型的结果
	 * @param <T>
	 * @param hql
	 * @param values
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "hiding" })
	public <T> Iterator<T> iterator(String hql,Object...values){
	   return	this.getHibernateTemplate().iterate(hql, values);
	}

	/**
	 * @return 当前上下文的原生Hibernate session对象,依然受到spring事务管理不需要手动close
	 */
	public Session getNativeHibernateSession(){
		return this.getSessionFactory().getCurrentSession();
	}

	/**
	 * @return 当前上下文的原生Hibernate StatelessSession对象<br>
	 * 此对象不级联关联实例,忽略集合不触发Hibernate事件模型和拦截器,没有一级缓存,没有持久化上下文,接近JDBC.
	 */
	public StatelessSession getNativeStatelessHibernateSession(){
		return this.getSessionFactory().openStatelessSession();
	}

	/**
	 * 执行本地查询获得SQLQuery对象<br>
	 * 可以调用addEntity(*.class).list();获得对应实体list集合<br>
	 * addEntity.add(*.class).addJoin(*.class).list();获得一对多代理对象<br>
	 * 更多用法见google
	 * @param sql
	 * @param isBind 表示底层使用的session是否与当前线程绑定,如果绑定则受到spring管理生命周期
	 * @return
	 */
	public SQLQuery nativeSqlQuery(String sql,boolean isBind){
		return this.getSession(isBind).createSQLQuery(sql);
	}
	
	public boolean hqlExcute(String hql, Object...values){
		Query query = this.createQuery(hql, values);
		if(query.executeUpdate()>0)
			return true;
		else
			return false;
	}

	@SuppressWarnings("hiding")
	public <T> List<T> hqlQuery(String hql, Object... values){
		Query query = this.createQuery(hql, values);
		@SuppressWarnings("unchecked")
		List<T> list = query.list();
		return list;
	}
	
	/**
	 * @param <T>
	 * @param hql
	 * @param pageNo 页面号
	 * @param pageSize 页面容量
	 * @param values
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "hiding" })
	public <T> Page<T> pagedQuery(String hql, int pageNo, int pageSize, Object... values) {
		// Count查询
		String countQueryString = " select count (*) " + removeSelect(removeOrders(hql));
		List<T> countlist = this.getHibernateTemplate().find(countQueryString, values);
		long totalCount = (Long) countlist.get(0);

		if (totalCount < 1)
			return new Page<T>();
		// 当前页的开始数据索引
		long startIndex = Page.getStartOfPage(pageNo, pageSize);
		Query query = this.createQuery(hql, values);
		List<T> list = query.setFirstResult((int) startIndex).setMaxResults(pageSize).list();

		return new Page<T>(startIndex, totalCount, pageSize, list);
	}

    /**
     * @param <T>
     * @param hql
     * @param startNo 分页从哪一条数据开始
     * @param pageSize 页面容量
     * @param values
     * @return
     */
    @SuppressWarnings({ "unchecked", "hiding" })
	public <T> Page<T> pagedQueryByStartNo(String hql, int startNo, int pageSize, Object... values){
    	// Count查询
 		String countQueryString = " select count (*) " + removeSelect(removeOrders(hql));
 		List<T> countlist = getHibernateTemplate().find(countQueryString, values);
 		long totalCount = (Long) countlist.get(0);

 		if (totalCount < 1)
 			return new Page<T>();
 		 
 		int startIndex = startNo;
 		Query query = createQuery(hql, values);
 		List<T> list = query.setFirstResult(startIndex).setMaxResults(pageSize).list();

 		return new Page<T>(startIndex, totalCount, pageSize, list);
     }
	
	/**
	 * 去除hql的select 子句,未考虑union的情况,用于pagedQuery.
	 */
	private static String removeSelect(String hql) {
		int beginPos = hql.toLowerCase().indexOf("from");
		return hql.substring(beginPos);
	}
	
	/**
	 * 去除hql的orderby 子句，用于pagedQuery.
	 */
	private static String removeOrders(String hql) {
		Pattern p = Pattern.compile("order\\s*by[\\w|\\W|\\s|\\S]*", Pattern.CASE_INSENSITIVE);
		Matcher m = p.matcher(hql);
		StringBuffer sb = new StringBuffer();
		while (m.find()) {
			m.appendReplacement(sb, "");
		}
		m.appendTail(sb);
		return sb.toString();
	}
	
    public List<T> nativeList(final String sql, final Object[] values, final int offSet, final int pageSize,  
            final Class<T> beanClass, final List<String> fieldList) {  
        @SuppressWarnings({ "unchecked", "rawtypes" })
		List<T> list = getHibernateTemplate().executeFind(new HibernateCallback() {  
            public Object doInHibernate(Session session) throws HibernateException, SQLException {  
                SQLQuery sqlQuery = session.createSQLQuery(sql);  
  
                // 添加要查询字段的标量  
                AddScalar.addSclar(sqlQuery, beanClass, fieldList);  
  
                Query query = sqlQuery;  
  
                // 转换查询结果为T  
                if (beanClass != null) {  
                    query.setResultTransformer(Transformers.aliasToBean(beanClass));  
                }  
  
                if ((values != null) && values.length > 0) {  
                    int i = 0;  
                    for (Object obj : values) {  
                        query.setParameter(i++, obj);  
                    }  
                }  
  
                if (offSet > -1) {  
                    query.setFirstResult(offSet);  
                }  
  
                if (pageSize > 0) {  
                    query.setMaxResults(pageSize);  
                }  
                return query.list();  
            }  
        });  
        return list;  
    }
}