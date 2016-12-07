package edu.ahut.service;

import java.util.List;

import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxXsxkall;



public interface PsdmService {
	
	
	public List<List<ViewJxXsxkall>> getXsxk(JxSkxxb[] skxxArr) throws Exception;
	
	public List<ViewJxXsxkall> getXk(String kkkh);

	public List<ViewJxXsxkall> getAll();
}
