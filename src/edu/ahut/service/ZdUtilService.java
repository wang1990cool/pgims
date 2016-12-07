package edu.ahut.service;

import java.util.List;

public interface ZdUtilService {
		public List<?> getByModelName(String modelName,String orders);
		
		public boolean hqlExcute(String hql, Object...values);
		
		public List<?> hqlQuery(String hql, Object...values);

		public List<?> getByModelNameXW(String modelName);
}
