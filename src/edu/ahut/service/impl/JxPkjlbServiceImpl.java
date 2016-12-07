package edu.ahut.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;
import edu.ahut.dao.base.BaseDAO;
import edu.ahut.dao.support.Page;
import edu.ahut.model.JxPkjlb;
import edu.ahut.model.JxPkkzb;
import edu.ahut.model.JxPksjb;
import edu.ahut.model.JxSkjhgxb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.JxSkzlb;
import edu.ahut.model.ViewPkjlPk;
import edu.ahut.model.ViewSkxxPk;
import edu.ahut.service.JxPkjlbService;

public class JxPkjlbServiceImpl implements JxPkjlbService {
	private BaseDAO<JxPkjlb, String> jxPkjlbDao;
	private BaseDAO<JxPkkzb, String> jxPkkzbDao;
	private BaseDAO<JxPksjb, String> jxPksjbDao;
	private BaseDAO<JxSkxxb,String> jxSkxxbDao;
	private BaseDAO<ViewSkxxPk,String> viewSkxxPkDao;
	private BaseDAO<ViewPkjlPk,String> viewPkjlPkDao;
	private BaseDAO<JxSkzlb,String> jxSkzlbDao;
	private BaseDAO<JxSkjhgxb,String> jxSkjhgxbDao;
	
	
	public BaseDAO<JxSkzlb, String> getJxSkzlbDao() {
		return jxSkzlbDao;
	}

	public void setJxSkzlbDao(BaseDAO<JxSkzlb, String> jxSkzlbDao) {
		this.jxSkzlbDao = jxSkzlbDao;
	}

	public BaseDAO<JxPkjlb, String> getJxPkjlbDao() {
		return jxPkjlbDao;
	}

	public void setJxPkjlbDao(BaseDAO<JxPkjlb, String> jxPkjlbDao) {
		this.jxPkjlbDao = jxPkjlbDao;
	}

	public BaseDAO<JxPkkzb, String> getJxPkkzbDao() {
		return jxPkkzbDao;
	}

	public void setJxPkkzbDao(BaseDAO<JxPkkzb, String> jxPkkzbDao) {
		this.jxPkkzbDao = jxPkkzbDao;
	}

	public BaseDAO<JxPksjb, String> getJxPksjbDao() {
		return jxPksjbDao;
	}

	public void setJxPksjbDao(BaseDAO<JxPksjb, String> jxPksjbDao) {
		this.jxPksjbDao = jxPksjbDao;
	}
	
	public BaseDAO<JxSkxxb, String> getJxSkxxbDao() {
		return jxSkxxbDao;
	}

	public void setJxSkxxbDao(BaseDAO<JxSkxxb, String> jxSkxxbDao) {
		this.jxSkxxbDao = jxSkxxbDao;
	}

	public BaseDAO<ViewSkxxPk, String> getViewSkxxPkDao() {
		return viewSkxxPkDao;
	}

	public void setViewSkxxPkDao(BaseDAO<ViewSkxxPk, String> viewSkxxPkDao) {
		this.viewSkxxPkDao = viewSkxxPkDao;
	}

	public BaseDAO<ViewPkjlPk, String> getViewPkjlPkDao() {
		return viewPkjlPkDao;
	}

	public void setViewPkjlPkDao(BaseDAO<ViewPkjlPk, String> viewPkjlPkDao) {
		this.viewPkjlPkDao = viewPkjlPkDao;
	}
	

	public BaseDAO<JxSkjhgxb, String> getJxSkjhgxbDao() {
		return jxSkjhgxbDao;
	}

	public void setJxSkjhgxbDao(BaseDAO<JxSkjhgxb, String> jxSkjhgxbDao) {
		this.jxSkjhgxbDao = jxSkjhgxbDao;
	}

	public JxPkkzb getJxPkkzb(String xn, String xq){
		String hql = "from JxPkkzb where xn=? and xq=?";
		List<JxPkkzb> lst = jxPkkzbDao.hqlQuery(hql, new Object[]{xn,xq});
		if(lst.size()>0) 
			return lst.get(0);
		else
			return null;
	}
	
	public JxPksjb getJxPksjb(String xn, String xq){
		String hql = "from JxPksjb where xn=? and xq=?";
		List<JxPksjb> lst = jxPksjbDao.hqlQuery(hql, new Object[]{xn,xq});
		if(lst.size()>0) 
			return lst.get(0);
		else
			return null;
	}
	
	public List<?> getJxPkjlbAll(String filter,String xn, String xq){
		String hql = "from JxPkjlb where " + filter;
		return jxPkjlbDao.hqlQuery(hql);
	}
	
	public List<JxPkjlb> isConflict(JxPkjlb nPkjlb, List<JxPkjlb> jxPkjlbList){
		List<JxPkjlb> pkjlList = new ArrayList<JxPkjlb>();
		if(nPkjlb.getId() == null){
			for(JxPkjlb jxPkjlb : jxPkjlbList){ // 增加时
				if("0".equals(jxPkjlb.getSjzxapbz()))
					if(nPkjlb.isConflict(jxPkjlb)){
						pkjlList.add(jxPkjlb);
					}	
			}
		}else{
			for(JxPkjlb jxPkjlb : jxPkjlbList){ // 修改时不和自己比较
				if(!nPkjlb.getId().equals(jxPkjlb.getId())){
					if("0".equals(jxPkjlb.getSjzxapbz()))
						if(nPkjlb.isConflict(jxPkjlb)){
							pkjlList.add(jxPkjlb);
						}	
				}
			}
		}
		return pkjlList;
	}
	
	
	
	public JxPkjlb findById(Long id) {
		return this.jxPkjlbDao.findById(JxPkjlb.class,id);
	}

	public boolean add(JxPkjlb pkjl,List<JxPkjlb> ctKcList, JSONObject otherData) {
		try {
			List<JxPkjlb> pkjlList = this.jxPkjlbDao.find("from JxPkjlb where kkkh=?",
					new Object[]{pkjl.getKkkh()}); // 获得相同开课课号的排课记录
			String kkdd = ""; // 存放开课地点
			String kksj = "";// 存放开课时间

			if(pkjlList.size() > 0){
					for(int i = 0; i < pkjlList.size();i++){
						if(!pkjlList.get(i).getKksj().isEmpty() || pkjlList.get(i).getKksj() != null){
							kksj +=  pkjlList.get(i).getKksj() + "|"; // 若开课时间为空时
							if(pkjlList.get(i).getKcsj() != null 
									&& !"1".equals(pkjlList.get(i).getDdzxapbz())) // 若开课地点不是自行安排
								kkdd +=  pkjlList.get(i).getKcsj() + pkjlList.get(i).getJsmc() + "|";
							else{
								kkdd +=  pkjlList.get(i).getJsmc() + "|";
							}
						}		
					}
			}
			kksj += pkjl.getKksj();
			if(pkjlList.size() == 0){
				kkdd += pkjl.getJsmc();
			}else {
				if("1".equals(pkjl.getDdzxapbz())){
					kkdd += pkjl.getJsmc();
				}else{
					kkdd += pkjl.getKcsj() + pkjl.getJsmc();
				}
			}
			this.jxPkjlbDao.save(pkjl);
			List<JxSkxxb> skxxList = this.jxSkxxbDao.find("from JxSkxxb where kkkh=?",
					new Object[]{pkjl.getKkkh()}); 
			if(skxxList.size() > 0){
				JxSkxxb skxx = skxxList.get(0);
				skxx.setKkdd(kkdd);
				skxx.setKksj(kksj);
				skxx.setZjjs(pkjl.getZjjs());
				skxx.setZjjsh(pkjl.getZjjsh());
				skxx.setZkjsh(otherData.get("zkjsh").toString());
				skxx.setZkjs(otherData.getString("zkjs"));
				skxx.setSyjsh(otherData.getString("syjsh"));
				skxx.setSyjs(otherData.getString("syjs"));
				if(kkdd.indexOf("自行安排") != -1){
					skxx.setDdzxapbz("1");
				}else{
					skxx.setDdzxapbz("0");
				}
				if(kksj.indexOf("自行安排") != -1){
					skxx.setSjzxapbz("1");
				}else{
					skxx.setSjzxapbz("0");
				}
				
				this.jxSkxxbDao.merge(skxx);
				if(ctKcList != null){
					for(int i = 0; i < ctKcList.size(); i++){
						JxPkjlb ctKc = ctKcList.get(i);
						String ctid = ctKc.getCtid();
						if(ctid == null || ctid.isEmpty()){
							ctKc.setCtid(pkjl.getId().toString());
						}else{
							ctid += "," + pkjl.getId().toString();
							ctKc.setCtid(ctid);
						}
						this.jxPkjlbDao.merge(ctKc);
					}
				}
			}
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public void updateSkxx(JxPkjlb pkjl){
		
	}
	
	public boolean delete(JxPkjlb instance) {
		try {
			this.jxPkjlbDao.delete(instance);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public boolean update(JxPkjlb pkjl,List<JxPkjlb> ctKcList,JSONObject otherData) {
		try {
			this.jxPkjlbDao.merge(pkjl);
			List<JxPkjlb> pkjlList = this.jxPkjlbDao.find("from JxPkjlb where kkkh=?",
					new Object[]{pkjl.getKkkh()});
			String kkdd = "";
			String kksj = "";
			
			if(pkjlList.size() > 0){
					for(int i = 0; i < pkjlList.size();i++){// 更新开课地点和开课时间
						if(!pkjl.getId().equals(pkjlList.get(i).getId().toString())){
							if(!pkjlList.get(i).getKksj().isEmpty() || pkjlList.get(i).getKksj() != null){
								kksj +=  pkjlList.get(i).getKksj() + "|";
								if(pkjlList.get(i).getKcsj() != null 
										&& !"1".equals(pkjlList.get(i).getDdzxapbz()))
									kkdd +=  pkjlList.get(i).getKcsj() + pkjlList.get(i).getJsmc() + "|";
								else{
									kkdd +=  pkjlList.get(i).getJsmc() + "|";
								}
							}
						}
					}
			}
			
			kksj = kksj.substring(0,kksj.length()-1);
			kkdd = kkdd.substring(0,kkdd.length()-1);
			List<JxSkxxb> skxxList = this.jxSkxxbDao.find("from JxSkxxb where kkkh=?",
					new Object[]{pkjl.getKkkh()});
			if(skxxList.size() > 0){
				JxSkxxb skxx = skxxList.get(0);
				skxx.setKkdd(kkdd);
				skxx.setKksj(kksj);
				skxx.setZjjs(pkjl.getZjjs());
				skxx.setZjjsh(pkjl.getZjjsh());
//				skxx.setZkjsh(otherData.get("zkjsh").toString());
//				skxx.setZkjs(otherData.getString("zkjs"));
//				skxx.setSyjsh(otherData.getString("syjsh"));
//				skxx.setSyjs(otherData.getString("syjs"));
				if(kkdd.indexOf("自行安排") != -1){
					skxx.setDdzxapbz("1");
				}else{
					skxx.setDdzxapbz("0");
				}
				if(kksj.indexOf("自行安排") != -1){
					skxx.setSjzxapbz("1");
				}else{
					skxx.setSjzxapbz("0");
				}
				this.jxSkxxbDao.merge(skxx);
				String kkdwh = pkjl.getKkdwh();
				String xn = pkjl.getXn();
				String xq = pkjl.getXq();
				String ctHql = "";
//				if("1".equals(ggkbzm)){
					 ctHql = "from JxPkjlb where kkdwh='" + kkdwh +  "' and xn='" + xn + "' and xq='" + xq +
							 "' or ggkbzm='1' and xn='" + xn + "' and xq='" + xq + "'";//公共课
//				}else{
//					 ctHql = "from JxPkjlb where kkdwh='" + kkdwh +  "' or ggkbzm='1'" + 
//							 " and xn='" + xn + "'and xq='" + xq + "'";//公共课
//				}
				List<JxPkjlb> preCtList = this.jxPkjlbDao.hqlQuery(ctHql);
				if(preCtList.size() > 0){
					for(int j = 0 ;j < preCtList.size() ;j++){
						if(!preCtList.get(j).equals(pkjl.getId().toString())){
						JxPkjlb preCtKc = preCtList.get(j);
						String ctid = preCtKc.getCtid();
						if(ctid == null || ctid.isEmpty()){
							continue;
						}else{
							String[] preCtidArr = ctid.split(",");
							String newCtid = "";
								for(String ctidTemp : preCtidArr){
									if(!ctidTemp.equals(pkjl.getId().toString())){
										newCtid += ctidTemp + ",";
									}
								}
								if(!newCtid.isEmpty())
									newCtid = newCtid.substring(0,newCtid.length()-1);
								preCtKc.setCtid(newCtid);
								this.jxPkjlbDao.merge(preCtKc);
							}
						}
					}
				}
				
				if(ctKcList != null){// 更新与该课程冲突的ctid
						for(int i = 0; i < ctKcList.size(); i++){
							JxPkjlb ctKc = ctKcList.get(i);
							String ctid = ctKc.getCtid();
							if(ctid == null || ctid.isEmpty()){
								ctKc.setCtid(pkjl.getId().toString());
							}else{
								String[] ctidArr = ctid.split(",");
								for(String ctidTemp : ctidArr){
									if(!ctidTemp.equals(pkjl.getId().toString())){
										ctid += "," + pkjl.getId().toString();
										break;
									}
								}
								ctKc.setCtid(ctid);
							}
							this.jxPkjlbDao.merge(ctKc);
						}
				}
			}
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	
	
	public List<JxPkjlb> Query(String filters, String orders, Object... values) {
		String hql = "from JxPkjlb as model";

		if (filters != null && filters != "")
			hql += " where " + filters;

		if (orders != null && orders != "")
			hql += " order by " + orders;

		return (List<JxPkjlb>) jxPkjlbDao.hqlQuery(hql, values);

	}

	public Page<JxPkjlb> pageQuery(int startNo, int pageSize, String filters,
			String orders, Object... values) {
		String hql = "from JxPkjlb as model";

		if (filters != null)
			hql += " where " + filters;

		if (orders != null)
			hql += " order by " + orders;

		return jxPkjlbDao.pagedQueryByStartNo(hql, startNo, pageSize, values);
	}

	public List<?> getAll() {
		return jxPkjlbDao.getAll();
	}

	public boolean hqlExecute(String hql, Object... values) {
		return jxPkjlbDao.hqlExecute(hql, values);
	}

	public List<?> hqlQuery(String hql, Object... values) {
		return jxPkjlbDao.hqlQuery(hql, values);
	}


	@Override
	public List<?> getSkxxAll(String filters, String orders) {
		return this.viewSkxxPkDao.findAll("ViewSkxxPk", filters, orders);
	}

	@Override
	public List<?> getPkjlAll(String filters, String orders) {
		return this.viewPkjlPkDao.findAll("ViewPkjlPk", filters, orders);
	}
	
	@Override
	public void deleteByIds(String ids){
		String[] idArray = ids.split(",");
		for(int i = 0; i < idArray.length;i++){
			String kkdd = "";
			String kksj = "";
			String hqlQuery = "from JxPkjlb where id = " + idArray[i];
			List<JxPkjlb> pkjlList = this.jxPkjlbDao.hqlQuery(hqlQuery); //获得要删除的记录
			String kkkh = pkjlList.get(0).getKkkh();//获得要删除记录的kkkh
			String kkkhHql = "from JxPkjlb where kkkh = '" + kkkh + "'";
			List<JxPkjlb> list = this.jxPkjlbDao.hqlQuery(kkkhHql);//获得与删除记录一样的kkkh的记录
			if(list.size() == 1){
				kkdd = "";
				kksj = "";
			}else{
				for(int j = 0; j <list.size();j++){
					if(!idArray[i].equals(list.get(j).getId().toString())){
							kksj += list.get(j).getKksj() + "|";
							if(list.size() > 2){ //相同的KKKH记录大于2时
								if(list.get(j).getKcsj() != null && !list.get(j).getKcsj().isEmpty() 
										&& !"1".equals(list.get(j).getDdzxapbz()))
									kkdd += list.get(j).getKcsj() +  list.get(j).getJsmc() + "|";
								else
									kkdd += list.get(j).getJsmc() + "|";
							}else if(list.size() == 2){
								kkdd += list.get(j).getJsmc() + "|";
							}
						}
					}
				kksj = kksj.substring(0, kksj.length()-1);
				kkdd = kkdd.substring(0, kkdd.length()-1);
			}
			String kkdwh = pkjlList.get(0).getKkdwh();
//			String ggkbzm = pkjlList.get(0).getGgkbzm();
			String xn = pkjlList.get(0).getXn();
			String xq = pkjlList.get(0).getXq();
//			String ctHql = "";
			
			String ctHql = "from JxPkjlb where kkdwh='" + kkdwh +  "' and xn='" + xn + "' and xq='" + xq +
					 "' or ggkbzm='1' and xn='" + xn + "' and xq='" + xq + "'";
//			if("1".equals(ggkbzm)){
//				 ctHql = "from JxPkjlb where xn='" + xn + "' and xq='" + xq + "'";//公共课
//			}else{
//				ctHql = "from JxPkjlb where kkdwh='" + kkdwh + "' and xn='" + xn + "' and xq='" + xq + "'"; //非公共课
//			}
			List<JxPkjlb> preCtList = this.jxPkjlbDao.hqlQuery(ctHql);
			if(pkjlList != null){
			if(pkjlList.get(0).getCtid() !=null){
				if(preCtList.size() > 0){
					for(int j = 0 ;j < preCtList.size() ;j++){
						JxPkjlb preCtKc = preCtList.get(j);
						String ctid = preCtKc.getCtid();
						if(ctid == null || ctid.isEmpty()){
							continue;
						}else{
							String[] preCtidArr = ctid.split(",");
							String newCtid = "";
								for(String ctidTemp : preCtidArr){
									if(!ctidTemp.equals(idArray[i])){
										newCtid += ctidTemp + ",";
									}
								}
								if(!newCtid.isEmpty())
									newCtid = newCtid.substring(0,newCtid.length()-1);
								preCtKc.setCtid(newCtid);
								this.jxPkjlbDao.merge(preCtKc);
							}
					}
				}
			}
			}
			
			String hql = "delete JxPkjlb where id = " + idArray[i];
			this.jxPkjlbDao.hqlExecute(hql);
			String ddzxapbz = "0";
			String sjzxapbz = "0";
			if(kkdd.indexOf("自行安排") != -1){
				ddzxapbz = "1";
			}else{
				ddzxapbz = "0";
			}
			if(kksj.indexOf("自行安排") != -1){
				sjzxapbz = "1";
			}else{
				sjzxapbz = "0";
			}
			String skxxHql = "update JxSkxxb as model set model.kksj='" + kksj +
					"', model.kkdd='" + kkdd + "', model.ddzxapbz='" + ddzxapbz + 
							 "', sjzxapbz='" + sjzxapbz +
							 "' where model.kkkh='" + kkkh + "'";
			this.jxSkxxbDao.hqlExecute(skxxHql);
		}
	}
	
	@Override
	public String getOccupied(String kczs, String jsbh,String filter) {
		List<JxPkjlb> pkjlList = this.jxPkjlbDao.hqlQuery("from JxPkjlb where " + filter );
		String[] kczsArray = kczs.split("/");
		
		String[][] pksjArray = new String[11][7];// 定义数组
		for(int i = 0;i < pksjArray.length;i++){// 给数组初始化
			for(int j = 0 ;j < pksjArray[i].length;j++){
				pksjArray[i][j] = "";
			}
		}
		
		Map<String,String> compareMap = new HashMap<String,String>();
		for(JxPkjlb pkjl : pkjlList){
			compareMap.put(pkjl.getId().toString(), "0"); // 给list初始化
		}
		
		for(int k = 0;k < pkjlList.size();k++){ //遍历list进行比较
			JxPkjlb pkjl = pkjlList.get(k); 
			if("1".equals(pkjl.getSjzxapbz()) || "1".equals(pkjl.getDdzxapbz())){
				continue;
			}else{
				if(jsbh.equals(pkjl.getJsbh())){ // 若教室号相同
					String existId = pkjl.getId().toString();
					String existKczs = pkjl.getKczs(); // 存在的课程周数
					String[] existKczsArray = existKczs.split("/");
					for(int i = 0 ; i < kczsArray.length; i++){ 
						for(int j = 0; j < existKczsArray.length;j++){
							if(kczsArray[i].equals(existKczsArray[j]) && "0".equals(compareMap.get(existId))){
								String kcmc = pkjl.getKcmc(); //课程名称
								String existKcsjm = pkjl.getKcsjm(); // 课程时间码
								String dszbzm  = pkjl.getDszbzm();//单双周标志码
								String existKcjc = pkjl.getKcjc();// 存在的课程节次
								String[] existsKcjcArray = existKcjc.split("/");
								for(int p = 0 ; p < existsKcjcArray.length; p++){
									int row = Integer.parseInt(existsKcjcArray[p]) - 1;//行
									int col = Integer.parseInt(existKcsjm) - 1;//列
									pksjArray[row][col] += this.getSj(dszbzm, existKczs, kcmc) + ",";
								}
								compareMap.put(existId, "1");
								break;
							}
						}
					}
				}
			}
		}
		
		
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		for(int i = 0;i < pksjArray.length;i++){// 给数组初始化
			sb.append("{");
			for(int j = 1 ;j <= pksjArray[i].length;j++){
				if("".equals(pksjArray[i][j-1])){
					sb.append("'" + j + "':null");
				}else{
					sb.append("'" + j + "':'" +  pksjArray[i][j-1].substring(0, pksjArray[i][j-1].length()-1)+ "'");
				}
				if(j != pksjArray[i].length){
					sb.append(",");
				}
			}
			if(i != pksjArray.length-1)
				sb.append("},");
			else
				sb.append("}");
		}
		sb.append("]");
		
		return sb.toString();
	}
	
	public String getSj(String dszbzm,String kczs,String kcmc){
		String sjStr = "";
		if("0".equals(dszbzm)){
			String[] kczsArray = kczs.split("/");
			if(kczsArray.length > 1)
				sjStr =kcmc +  "(" + kczsArray[0] + "-" + kczsArray[kczsArray.length-1]  + ")";
			else
				sjStr = kcmc + "(" + kczsArray[0] + ")";
		}else{
			sjStr =kcmc + "(" + kczs + ")";
		}
		return sjStr;
	}

	@Override
	public void updateSkzl(JxPkjlb jxPkjl) { 
	 	String hql = "update JxSkzlb as model  set model.zjjsh = '"+ jxPkjl.getZjjsh() +"', model.zjjs = '"
				+ jxPkjl.getZjjs() + "' where model.kkkh = '" + jxPkjl.getKkkh() + "'";
		this.jxSkzlbDao.hqlExcute(hql);
	}

	@Override
	public void tbkDelete(String ids) {
		String[] idArray = ids.split(",");
		for(int i = 0; i < idArray.length;i++){
			String hqlQuery = "from JxPkjlb where id = " + idArray[i];
			List<JxPkjlb> pkjlList = this.jxPkjlbDao.hqlQuery(hqlQuery); //获得要删除的记录
			
			String kkkh = pkjlList.get(0).getKkkh();//获得要删除记录的kkkh
			String kkkhHql = "from JxPkjlb where kkkh = '" + kkkh + "'";
			List<JxPkjlb> list = this.jxPkjlbDao.hqlQuery(kkkhHql);//获得与删除记录一样的kkkh的记录
			
			String skxxgxHql = "from JxSkjhgxb where kkkh = '" + kkkh + "'";// 获得该kkkh的授课关系记录
			List<JxSkjhgxb> skjhgxlist = this.jxSkjhgxbDao.hqlQuery(skxxgxHql);
			
			if(skjhgxlist.size() > 1){//表示合班
				for(int j = 0;j < list.size();j++){
					if(list.get(j).getCtid() !=null){
						updateCt(pkjlList,idArray[i]);
					}
				}
				String skxxDelHql = "delete JxSkxxb where kkkh = '" + kkkh + "'";
				this.jxSkxxbDao.hqlExcute(skxxDelHql);
				
				String pkjlDelhql = "delete JxPkjlb where kkkh = '" + list.get(0).getKkkh() + "'";
				this.jxPkjlbDao.hqlExecute(pkjlDelhql);
				
				String skjhgxDelHql = "delete JxSkjhgxb where kkkh = '"  + list.get(0).getKkkh() + "'";
				this.jxSkjhgxbDao.hqlExcute(skjhgxDelHql);
				
			}else if(skjhgxlist.size() == 1){
				String skxxgxFbHql = "from JxSkjhgxb where kkjhh = '" + skjhgxlist.get(0).getKkjhh()
						+ "' and kch = '" + skjhgxlist.get(0).getKch() + "'"; //查询是否为分班
				List<JxSkjhgxb> skjhgxFblist = this.jxSkjhgxbDao.hqlQuery(skxxgxFbHql);
				
				if(skjhgxFblist.size() > 1){//表示分班
					for(JxSkjhgxb JxSkjhgxb : skjhgxFblist){
						String kkkhFbHql = "from JxPkjlb where kkkh = '" + JxSkjhgxb.getKkkh() + "'";
						List<JxPkjlb> pkjlFbList = this.jxPkjlbDao.hqlQuery(kkkhFbHql);//获得与删除记录一样的kkkh的记录
						
						for(int j = 0;j < pkjlFbList.size();j++){
							if(list.get(j).getCtid() !=null){
								updateCt(pkjlList,idArray[i]);
							}
						}
						String skxxDelHql = "delete JxSkxxb where kkkh = '" + JxSkjhgxb.getKkkh() + "'";
						this.jxSkxxbDao.hqlExcute(skxxDelHql);
						
						String pkjlDelhql = "delete JxPkjlb where kkkh = '" +  JxSkjhgxb.getKkkh() + "'";
						this.jxPkjlbDao.hqlExecute(pkjlDelhql);
						
						String skjhgxDelHql = "delete JxSkjhgxb where kkkh = '"  + JxSkjhgxb.getKkkh() + "'";
						this.jxSkjhgxbDao.hqlExcute(skjhgxDelHql);
					}
				}else {//表示独立
					for(int j = 0;j < list.size();j++){
						if(list.get(j).getCtid() !=null){
							updateCt(pkjlList,idArray[i]);
						}
					}
					String skxxDelHql = "delete JxSkxxb where kkkh = '" + kkkh + "'";
					this.jxSkxxbDao.hqlExcute(skxxDelHql);
					
					String pkjlDelhql = "delete JxPkjlb where kkkh = '" + list.get(0).getKkkh() + "'";
					this.jxPkjlbDao.hqlExecute(pkjlDelhql);
					
					String skjhgxDelHql = "delete JxSkjhgxb where kkkh = '"  + list.get(0).getKkkh() + "'";
					this.jxSkjhgxbDao.hqlExcute(skjhgxDelHql);
				}
			}
		 }
	}
	
	public void updateCt(List<JxPkjlb> pkjlList,String id){
		String kkdwh = pkjlList.get(0).getKkdwh();
		String xn = pkjlList.get(0).getXn();
		String xq = pkjlList.get(0).getXq();
		String ctHql = "from JxPkjlb where kkdwh='" + kkdwh +  "' and xn='" + xn + "' and xq='" + xq +
				 "' or ggkbzm='1' and xn='" + xn + "' and xq='" + xq + "'";
		List<JxPkjlb> preCtList = this.jxPkjlbDao.hqlQuery(ctHql);
				if(preCtList.size() > 0){
					for(int j = 0 ;j < preCtList.size() ;j++){
						JxPkjlb preCtKc = preCtList.get(j);
						String ctid = preCtKc.getCtid();
						if(ctid == null || ctid.isEmpty()){
							continue;
						}else{
							String[] preCtidArr = ctid.split(",");
							String newCtid = "";
								for(String ctidTemp : preCtidArr){
									if(!ctidTemp.equals(id)){
										newCtid += ctidTemp + ",";
									}
								}
								if(!newCtid.isEmpty())
									newCtid = newCtid.substring(0,newCtid.length()-1);
								preCtKc.setCtid(newCtid);
								this.jxPkjlbDao.merge(preCtKc);
							}
						}
				  }
			}
		}
