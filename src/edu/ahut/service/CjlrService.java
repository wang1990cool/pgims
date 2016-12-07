package edu.ahut.service;

import edu.ahut.model.CjdData;
import edu.ahut.model.CjxxData;


public interface CjlrService {
	
	public void saveCjxxData(String cjxxData,String flag) throws Exception;
	
	public CjxxData getCjxxData(String kkkh) throws Exception;
	
	public CjdData getCjdData(String kkkh) throws Exception;
	
	public void genCjmx(String kkkh,String kch, String xn, String xq) throws Exception;
	
	public void reback(String kkkh) throws Exception;
	
	public void callback(String kkkh) throws Exception;
	
	public void pass(String kkkh) throws Exception;

}
