package edu.ahut.service.impl;

import java.util.List;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.Document;
import edu.ahut.service.DocumentService;

public class DocumentServiceImpl implements DocumentService {
	private BaseDAO<Document,String> documentDao;

	public BaseDAO<Document, String> getDocumentDao() {
		return documentDao;
	}

	public void setDocumentDao(BaseDAO<Document, String> documentDao) {
		this.documentDao = documentDao;
	}

	public boolean add(Document instance) {
		try {
			documentDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(Document instance) {
		try {
			documentDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(Document instance) {
		try {
			documentDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<Document> Query(String filters, String orders, Object... values) {
		String hql = "from Document as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<Document>) documentDao.hqlQuery(hql, values);
	}

	public List<?> getAll() {
		return documentDao.getAll();
	}
	
	public Document findById(String id) {
		return documentDao.findById(Document.class, id);
	}
	
	
	public List<Document> getFiles(String fileName) throws Exception{
		List<Document> fileLst = null;
		try{
			if(fileName != null){
				String hql="from Document as model where fileName=?";
				fileLst = (List<Document>) documentDao.find(hql,new Object[]{fileName});
			}
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return fileLst;
	}

	@Override
	public boolean hqlExecute(String hql, Object... values) {
		return documentDao.hqlExecute(hql, values);
	}

	@Override
	public List<?> hqlQuery(String hql, Object... values) {
		return (List<?>) documentDao.hqlQuery(hql, values);
	}

	@Override
	public Page<Document> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from Document as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return documentDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}
}
