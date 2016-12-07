package edu.ahut.dao.base;

import edu.ahut.dao.support.Page;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.StatelessSession;
import org.springframework.orm.hibernate3.HibernateTemplate;

/**
 * @author newman
 * @since  2013-5-20
 * 提供dao的所有操作<br>
 * 实现类由spring注入:<br>
 */
//@Repository("baseDAO") 
@SuppressWarnings("rawtypes")
public class BaseDAOImpl<T,PK extends Serializable> implements BaseDAO<T,PK>{

	protected Class<T> entityClass;// DAO所管理的Entity类型.
	private GenericEntityDAO<T,PK> gedao;
	
	private GenericDAO gdao;
	private SimpleJdbcDAO sjdao;
	
	public Class<T> getEntityClass() {return entityClass;}
	public void setEntityClass(Class<T> entityClass) {
		gedao.setEntityClass(this.entityClass);//手动注入实体类类型
		this.entityClass = entityClass;
	}
	
	public GenericEntityDAO<T, PK> getGedao() {return gedao;}
	public void setGedao(GenericEntityDAO<T, PK> gedao) {
		gedao.setEntityClass(this.entityClass);//在spring注入泛型实体dao时候注入实体类型
		this.gedao = gedao;
	}
	
	public GenericDAO getGdao() {return gdao;}
	public void setGdao(GenericDAO gdao) {this.gdao = gdao;}
	
	public SimpleJdbcDAO getSjdao() {return sjdao;}
	public void setSjdao(SimpleJdbcDAO sjdao) {this.sjdao = sjdao;}

	/**
	 *让spring提供构造函数注入
	 */
	public BaseDAOImpl(Class<T> type) {
		this.entityClass = type;//spring构建时,根据配置文件最先注入实体类型
	}
	
	public BaseDAOImpl(){}
	
	public void clear() {
		gdao.clear();
	}
	
	public Query createQuery(String hql, Object... values) {
		return gdao.createQuery(hql, values);
	}
	
	public void delete(T entityObject) {
		gedao.delete(entityObject);
	}
	
	public void deleteById(PK id) {
		gedao.deleteById(id);
	}
	
	public void evict(T entityObject) {
		gedao.evict(entityObject);
	}

	@SuppressWarnings("unchecked")
	public List<T> find(String hql, Object... values) {
		return gdao.find(hql, values);
	}
	
	@SuppressWarnings("unchecked")
	public T findById(Class<T> entityClass,Object id){
		T temp = (T) gdao.findById(entityClass, id.toString());
		return temp;
	}
	
	@SuppressWarnings("unchecked")
	public List<T> findByNamedParams(String hql, String[] paramNames,
			Object... values) {
		return gdao.findByNamedParams(hql, paramNames, values);
	}
	
	public void flush() {
		gdao.flush();
	}
	
	public List<T> getAll() {
		return gedao.getAll();
	}

	public T getById(PK id) {
		return gedao.getById(id);
	}

	public Session getNativeHibernateSession() {
		return gdao.getNativeHibernateSession();
	}

	public StatelessSession getNativeStatelessHibernateSession() {
		return gdao.getNativeStatelessHibernateSession();
	}

	public HibernateTemplate getHibernateTemplate() {
		return gdao.getHibernateTemplate();
	}

	@SuppressWarnings("unchecked")
	public Iterator<T> iterator(String hql, Object... values) {
		return gdao.iterator(hql, values);
	}

	public SimpleJdbcDAO jdbc() {
		return sjdao;
	}

	public T load(PK id) {
		return gedao.load(id);
	}

	public void load(T entityObject, PK id) {
		gedao.load(entityObject, id);
	}

	public T merge(T entityObject) {
		return gedao.merge(entityObject);
	}

	public SQLQuery nativeSqlQuery(String sql,boolean isBind) {
		return gdao.nativeSqlQuery(sql,isBind); 
	}
	
	public boolean hqlExecute(String hql, Object... values){
		return gdao.hqlExcute(hql, values);
	}
	
	@SuppressWarnings("unchecked")
	public List<T> hqlQuery(String hql, Object... values){
		return gdao.hqlQuery(hql, values);
	}
	
	@SuppressWarnings("unchecked")
	public Page<T> pagedQuery(String hql, int pageNo, int pageSize,Object... values) {
		return gdao.pagedQuery(hql, pageNo, pageSize, values);
	}

	@SuppressWarnings("unchecked")
	public Page<T> pagedQueryByStartNo(String hql, int startNo, int pageSize,Object... values) {
		return gdao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
	
    @SuppressWarnings("unchecked")
	public List<T> nativeList(final String sql, final Object[] values, final int offSet, final int pageSize,  
            final Class<T> beanClass, final List<String> fieldList){
    	return gdao.nativeList(sql, values, offSet, pageSize, beanClass, fieldList);
    }

	public void refresh(T entityObject) {
		gedao.refresh(entityObject);
	}

	public void save(T entityObject) {
		gedao.save(entityObject);
	}
	
	public void changeEntityClass(Class<T> entityClass) {
       gedao.setEntityClass(entityClass);	
	}
	
	public List<?> findAll(String modelName, String filters,String orders) {
		try {
			String queryString = "from " + modelName;
			if(filters != null && filters != "" && filters.length() >0){
				queryString += " where " + filters;
			}
			if(orders != null && orders !=""){
				queryString += " order by " + orders;
			}
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			throw re;
		}
	}
	
	public void saveEntity(Object entity){
		gedao.saveEntity(entity);
	}
	public boolean hqlExcute(String hql, Object... values){
		return gdao.hqlExcute(hql, values);
	}
}