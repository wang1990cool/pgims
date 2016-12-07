package edu.ahut.service.impl;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import org.springframework.orm.hibernate3.SessionFactoryUtils;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxbH;
import edu.ahut.service.YxXsjbxxbHService;

public class YxXsjbxxbHServiceImpl implements YxXsjbxxbHService{

	private BaseDAO<YxXsjbxxbH, String> yxXsjbxxbHDao;
	
	public BaseDAO<YxXsjbxxbH, String> getYxXsjbxxbHDao() {
		return yxXsjbxxbHDao;
	}

	public void setYxXsjbxxbHDao(BaseDAO<YxXsjbxxbH, String> yxXsjbxxbHDao) {
		this.yxXsjbxxbHDao = yxXsjbxxbHDao;
	}

	public boolean add(YxXsjbxxbH instance) {
		try {
			yxXsjbxxbHDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(YxXsjbxxbH instance) {
		try {
			yxXsjbxxbHDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(YxXsjbxxbH instance) {
		try {
			yxXsjbxxbHDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<YxXsjbxxbH> Query(String filters, String orders, Object... values) {
		String hql = "from YxXsjbxxbH as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<YxXsjbxxbH>) yxXsjbxxbHDao.hqlQuery(hql, values);
	}

	public Page<YxXsjbxxbH> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from YxXsjbxxbH as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return yxXsjbxxbHDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return yxXsjbxxbHDao.getAll();
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete YxXsjbxxbH where xh in (" + ids + ")";
		return this.yxXsjbxxbHDao.hqlExecute(hql);
	}
	
	@Override
	public boolean insert(File upExcle, String dataTable) throws BiffException, IOException, SQLException { 
        File file = upExcle;           
        // 创建新的Excel 工作簿 
        Workbook rwb = null;  
        rwb = Workbook.getWorkbook(file);  
        Sheet sheet = rwb.getSheets()[0]; // 得到工作簿中的第一个表索引即为excel下的sheet1,sheet2,sheet3...  
        int rsColumns = sheet.getColumns();// 列数  
        int rsRows = sheet.getRows();// 行数  
        String simNumber = "" ;//每个单元格中的数据  
        String str="";//拼接要插入的列  
        Connection conn = SessionFactoryUtils.getDataSource(yxXsjbxxbHDao.getNativeHibernateSession().getSessionFactory()).getConnection();
        try {
			Statement stat = conn.createStatement();
			for (int j = 0; j <rsColumns; j++) {  
	            Cell cell = sheet.getCell(j, 0);  
	            simNumber = cell.getContents(); 
	            if(j==rsColumns-1){  
	                str +=  simNumber  ;  
	            }else{  
	                str +=  simNumber+",";  
	            }  
	        }  
			for (int i = 1; i < rsRows; i++) {
//	            String sql = "insert into "+dataTable+"("+str+") values(";//拼接sql  
				String sql = "insert into "+dataTable+" values(";//拼接sql 
				for (int j = 0; j < rsColumns; j++) {
	                Cell cell = sheet.getCell(j, i);  
	                simNumber = cell.getContents();  
	                if(j==rsColumns-1){
                		sql += "'"+ simNumber+"'" ; 
	                }else{  
                		sql +="'"+ simNumber+"',"; 
	                }
	            }
	            	sql += ")";  
	            System.out.println(sql);
	            stat.addBatch(sql);
	        }  
		    stat.executeBatch();
		    stat.close();
		    conn.close();
	        return true;
		} catch (SQLException ex){
		    conn.rollback();
		    ex.printStackTrace();
		    return false;
		}
    }
	
	public boolean truncate(String dataTable){
		boolean flag = true;
		try {
			Connection conn = SessionFactoryUtils.getDataSource(
					yxXsjbxxbHDao.getNativeHibernateSession().getSessionFactory())
					.getConnection();
			Statement stmt = conn.createStatement();
			String sql = "truncate table "+ dataTable;
			stmt.addBatch(sql);
			stmt.executeBatch();
			stmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
			flag = false;
		}
		return flag;
	}
	
	public boolean backup(String dataTable, String dataTableHistory) {
		boolean flag = true;
		try {
			Connection conn = SessionFactoryUtils.getDataSource(
					yxXsjbxxbHDao.getNativeHibernateSession().getSessionFactory())
					.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT count(1) FROM (SELECT ZKZH,XM FROM "+ dataTable +" INTERSECT SELECT ZKZH,XM FROM "+ dataTableHistory +")");
			while(rs.next()){ 
				 int comNumber = rs.getInt("count(1)"); 
//				 System.out.println(comNumber);
				 if(comNumber == 0){
					 String sql = "insert into " + dataTableHistory + " select * from " + dataTable;
						stmt.addBatch(sql);
						stmt.executeBatch();
				 }else{
					 flag =  false;
				 }
			 }
			rs.close();
			stmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
			flag = false;
		}
		return flag;
	}
	
	
	
}
