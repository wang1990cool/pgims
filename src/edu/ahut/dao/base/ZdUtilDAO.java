package edu.ahut.dao.base;

import java.util.List;

public interface ZdUtilDAO {
	
	public boolean hqlExcute(String hql, Object... values);

	public List<?> hqlQuery(String hql, Object... values);

	public List<?> findByNamedParams(String hql, String[] paramNames,
			Object... values);
}
