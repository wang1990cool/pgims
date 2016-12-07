

package edu.ahut.service;

import java.util.List;

import edu.ahut.model.XsJcxxb;
import edu.ahut.model.ViewJxCjcxAll;


public interface CjdyService{
	
	
	public List<List<ViewJxCjcxAll>> getXscj(XsJcxxb[] xsxxArr)throws Exception;
	
	public List<ViewJxCjcxAll> getCj(String xh);
	
	public List<ViewJxCjcxAll> getZcj(String xh);
	
	public List<ViewJxCjcxAll> getAll();
}
