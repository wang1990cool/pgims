package edu.ahut.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import org.springframework.orm.hibernate3.SessionFactoryUtils;

import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.YxXsjbxxb;
import edu.ahut.service.YxXsjbxxbService;

public class YxXsjbxxbServiceImpl implements YxXsjbxxbService{

	private BaseDAO<YxXsjbxxb, String> yxXsjbxxbDao;
	
	
	
//	private SessionFactory sessionFactory;
////	public SQLQuery sqlQuery(String sql, Object...values){
////		sql = "select * from ViewYxCw";
////		return sessionFactory.getCurrentSession().createSQLQuery(sql);
////	}
//	
//	@SuppressWarnings("unchecked")
//	public List<Object[]> showList() {
//		  String sql = "select * from ViewYxCw";
//		  return sessionFactory.getCurrentSession().createSQLQuery(sql).list();
//		 }
		
	
	public BaseDAO<YxXsjbxxb, String> getYxXsjbxxbDao() {
		return yxXsjbxxbDao;
	}

	public void setYxXsjbxxbDao(BaseDAO<YxXsjbxxb, String> yxXsjbxxbDao) {
		this.yxXsjbxxbDao = yxXsjbxxbDao;
	}

	public boolean add(YxXsjbxxb instance) {
		try {
			yxXsjbxxbDao.save(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean delete(YxXsjbxxb instance) {
		try {
			yxXsjbxxbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(YxXsjbxxb instance) {
		try {
			yxXsjbxxbDao.merge(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public List<YxXsjbxxb> Query(String filters, String orders, Object... values) {
		String hql = "from YxXsjbxxb as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<YxXsjbxxb>) yxXsjbxxbDao.hqlQuery(hql, values);
	}

	public Page<YxXsjbxxb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from YxXsjbxxb as model";

		if ((filters != null) && (!filters.isEmpty()))
			hql += " where " + filters;

		if ((orders != null) && (orders != ""))
			hql += " order by " + orders;

		return yxXsjbxxbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return yxXsjbxxbDao.getAll();
	}
	
	@Override
	public boolean deleteByIds(String ids){
		ids = "'" + ids.replace(",","','") + "'";
		String hql = "delete YxXsjbxxb where xh in (" + ids + ")";
		return this.yxXsjbxxbDao.hqlExecute(hql);
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
        Connection conn = SessionFactoryUtils.getDataSource(yxXsjbxxbDao.getNativeHibernateSession().getSessionFactory()).getConnection();
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
					yxXsjbxxbDao.getNativeHibernateSession().getSessionFactory())
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
					yxXsjbxxbDao.getNativeHibernateSession().getSessionFactory())
					.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT count(1) FROM (SELECT ZKZH,XM FROM "+ dataTable +" INTERSECT SELECT ZKZH,XM FROM "+ dataTableHistory +")");
			while(rs.next()){ 
				 int comNumber = rs.getInt("count(1)"); 
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
	
	public boolean deleteData(String dataTable, String dataTableHistory) {
		boolean flag = true;
		try {
			Connection conn = SessionFactoryUtils.getDataSource(
					yxXsjbxxbDao.getNativeHibernateSession().getSessionFactory())
					.getConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT count(1) FROM (SELECT ZKZH,XM FROM "+ dataTable +" INTERSECT SELECT ZKZH,XM FROM "+ dataTableHistory +")");
			while(rs.next()){ 
				 int comNumber = rs.getInt("count(1)"); 
//				 System.out.println(comNumber);
				 if(comNumber != 0){
					 	String sql = "truncate table "+ dataTable;
						stmt.addBatch(sql);
						stmt.executeBatch();
				 }else{
					 flag =  false;
				 }
			 }
//			String sql = "truncate table "+ dataTable;
//			stmt.addBatch(sql);
//			stmt.executeBatch();
			rs.close();
			stmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
			flag = false;
		}
		return flag;
	}
	
	public YxXsjbxxb getXsJbxx(String zkzh) throws Exception{
		YxXsjbxxb yxXsjbxxb = null;
		try{
			if(zkzh != null)
				yxXsjbxxb = yxXsjbxxbDao.find("from YxXsjbxxb as model where zkzh='" + zkzh + "'").get(0);
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		return yxXsjbxxb;
	}
	
	
	public List<YxXsjbxxb> getJbxx(String xh){
		String hql = "from YxXsjbxxb where xh = '" + xh + "'";
		return yxXsjbxxbDao.find(hql);
		}
	
	public YxXsjbxxb findById(Long id) {
		return yxXsjbxxbDao.findById(YxXsjbxxb.class,id);
	}
	
	
	@SuppressWarnings({ "resource" })
	public  void ZipContraMultiFile(String path ,String outpath){
    	try {
            File file = new File(path);
            File outFile = null;
            ZipFile zipFile = new ZipFile(file);
            ZipInputStream zipInput = new ZipInputStream(new FileInputStream(file));
            ZipEntry entry = null;
            InputStream input = null;
            OutputStream output = null;
            while((entry = zipInput.getNextEntry()) != null){
//                System.out.println("解压缩" + entry.getName() + "文件");
                outFile = new File(outpath + File.separator + entry.getName());
                if(!outFile.getParentFile().exists()){
                    outFile.getParentFile().mkdir();
                }
                if(!outFile.exists()){
                    outFile.createNewFile();
                }
                input = zipFile.getInputStream(entry);
                output = new FileOutputStream(outFile);
                int temp = 0;
                while((temp = input.read()) != -1){
                    output.write(temp);
                }
               
                FileInputStream fis = new FileInputStream(outFile);
    			byte[] imgBytes = new byte[(int)outFile.length()];
    			fis.read(imgBytes);
    			
    			String zpMc = entry.getName().substring(entry.getName().lastIndexOf('/')+ 1,entry.getName().lastIndexOf('.'));
    			String hql = "from YxXsjbxxb where upper(sfzh) = upper('" + zpMc + "')";
    			List<YxXsjbxxb> xsxxList = yxXsjbxxbDao.find(hql);
    			if(xsxxList.size() != 0)
    			   xsxxList.get(0).setZp(imgBytes);
    			/*else{
//    				JOptionPane.showMessageDialog(null, entry.getName()+"文件与数据库记录不匹配，无法导入，点击确定请继续导入其他照片", "提示", JOptionPane.INFORMATION_MESSAGE);
    			    int n = JOptionPane.showConfirmDialog(null, entry.getName()+"文件与数据库记录不匹配，不能导入，是否继续导入照片?", "提示", JOptionPane.YES_NO_OPTION);  
    	            if (n == JOptionPane.YES_OPTION) {  
    	               continue;
    	            } else if (n == JOptionPane.NO_OPTION) {  
    	                break; 
    	            }  
    			}*/
    			
//              Connection conn = SessionFactoryUtils.getDataSource(yxXsjbxxbDao.getNativeHibernateSession().getSessionFactory()).getConnection();
//        		Statement stat = conn.createStatement();
//        		String zpMc = entry.getName().substring(0,entry.getName().lastIndexOf('.'));
//        		String sql = "UPDATE YX_XSJBXXB SET ZP =" + imgBytes + " WHERE ZKZH = " + zpMc;
//        		stat.executeUpdate(sql);
        		fis.close();
        		input.close();
                output.close();
            }
            
		} catch (Exception e) {
			e.printStackTrace();
		}
    }	
	
//	public  void delFolder(String folderPath) {
//		try {
//		delAllFile(folderPath); //删除完里面所有内容
//		String filePath = folderPath;
//		filePath = filePath.toString();
//		java.io.File myFilePath = new java.io.File(filePath);
//		myFilePath.delete(); //删除空文件夹
//		} catch (Exception e) {
//		e.printStackTrace();
//		}
//		}

	public  boolean delAllFile(String path) {
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
		    return flag;
		}
		if (!file.isDirectory()) {
		    return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		for (int i = 0; i < tempList.length; i++) {
		    if (path.endsWith(File.separator)) {
		         temp = new File(path + tempList[i]);
		    } else {
		         temp = new File(path + File.separator + tempList[i]);
		    }
		    if (temp.isFile()) {
		         temp.delete();
		    }
		    if (temp.isDirectory()) {
		         delAllFile(path + "/" + tempList[i]);//先删除文件夹里面的文件
		         String filePath = path + "/" + tempList[i];
		         filePath = filePath.toString();
		         java.io.File myFilePath = new java.io.File(filePath);
		         myFilePath.delete(); //删除空文件夹
//		         delFolder(path + "/" + tempList[i]);//再删除空文件夹
		         flag = true;
		    }
		 }
		    return flag;
		}
		
	
	public  void ZipMultiFile(String path ,String zippath) {
		try {
	        File file = new File(path);// 要被压缩的文件夹
	        File zipFile = new File(zippath);
	        InputStream input = null;
	        ZipOutputStream zipOut = new ZipOutputStream(new FileOutputStream(zipFile));
	        if(file.isDirectory()){
	            File[] files = file.listFiles();
	            for(int i = 0; i < files.length; ++i){
	                input = new FileInputStream(files[i]);
	                zipOut.putNextEntry(new ZipEntry(file.getName() + File.separator + files[i].getName()));
	                int temp = 0;
	                while((temp = input.read()) != -1){
	                    zipOut.write(temp);
	                }
	                input.close();
	            }
	        }
	        zipOut.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
