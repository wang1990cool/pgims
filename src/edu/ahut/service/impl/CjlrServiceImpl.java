
package edu.ahut.service.impl;

import java.util.List;

import net.sf.json.JSONObject;
import edu.ahut.dao.base.BaseDAO;
import edu.ahut.model.CjdData;
import edu.ahut.model.CjxxData;
import edu.ahut.model.JxCjjlb;
import edu.ahut.model.JxCjmxb;
import edu.ahut.model.JxSkxxb;
import edu.ahut.model.ViewJxCjmxb;
import edu.ahut.model.ZdCjdjm;
import edu.ahut.model.ZdKsxzm;
import edu.ahut.service.CjlrService;

public class CjlrServiceImpl implements CjlrService{

	private BaseDAO<JxCjjlb, String> jxCjjlbDao;
	
	private BaseDAO<JxSkxxb, String> jxSkxxbDao;
	
	private BaseDAO<JxCjmxb, String> jxCjmxbDao;
	
	private BaseDAO<ZdCjdjm, String> zdCjdjmDao;
	
	private BaseDAO<ZdKsxzm, String> zdKsxzmDao;
	
	private  BaseDAO< ViewJxCjmxb, String>  viewJxCjmxbDao; 
	
	public BaseDAO<ViewJxCjmxb, String> getViewJxCjmxbDao() {
		return viewJxCjmxbDao;
	}

	public void setViewJxCjmxbDao(BaseDAO<ViewJxCjmxb, String> viewJxCjmxbDao) {
		this.viewJxCjmxbDao = viewJxCjmxbDao;
	}
	
	
	public void setJxCjjlbDao(BaseDAO<JxCjjlb, String> jxCjjlbDao) {
		this.jxCjjlbDao = jxCjjlbDao;
	}
	
	public BaseDAO<JxCjjlb, String> getJxCjjlbDao() {
		return jxCjjlbDao;
	}
	
	public void setJxSkxxbDao(BaseDAO<JxSkxxb, String> jxSkxxbDao) {
		this.jxSkxxbDao = jxSkxxbDao;
	}
	
	public BaseDAO<JxSkxxb, String> getJxSkxxbDao() {
		return jxSkxxbDao;
	}
	
	public void setJxCjmxbDao(BaseDAO<JxCjmxb, String> jxCjmxbDao) {
		this.jxCjmxbDao = jxCjmxbDao;
	}
	
	public BaseDAO<JxCjmxb, String> getJxCjmxbDao() {
		return jxCjmxbDao;
	}
	
	public void setZdKsxzmDao(BaseDAO<ZdKsxzm, String> zdKsxzmDao) {
		this.zdKsxzmDao = zdKsxzmDao;
	}
	
	public BaseDAO<ZdKsxzm, String> getZdKsxzmDao() {
		return zdKsxzmDao;
	}
	
	public void setZdCjdjmDao(BaseDAO<ZdCjdjm, String> zdCjdjmDao) {
		this.zdCjdjmDao = zdCjdjmDao;
	}
	
	public BaseDAO<ZdCjdjm, String> getZdCjdjmDao() {
		return zdCjdjmDao;
	}
	
	public void saveCjxxData(String cjxxData,String flag) throws Exception{
		JSONObject jCjxxData = null;
		try{
			jCjxxData = JSONObject.fromObject(cjxxData);
			JSONObject jxCjjl = jCjxxData.getJSONObject("jxCjjlbData");
			String cjlxm = jxCjjl.getString("cjlxm");
			String cjbl = "";
			if(!jxCjjl.getString("pscjbl").equals("")){
				 cjbl = jxCjjl.getString("pscjbl");
			}
			@SuppressWarnings("unchecked")
			List<JSONObject> jxCjmx = (List<JSONObject>)jCjxxData.getJSONArray("jxCjmxbData");
			System.err.println("save cjjl");
			this.saveCjjl(jxCjjl);
			System.err.println("save cjmx");
			this.saveCjmx(jxCjmx,cjbl,cjlxm,flag);
		
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
		
	}
	
	public void saveCjjl(JSONObject jxCjjl)throws Exception{
		try{
			String kkkh = jxCjjl.getString("kkkh");
			JxCjjlb jxCjjlb = new JxCjjlb();
			jxCjjlb.setKkkh(kkkh);
			jxCjjlb.setXn(jxCjjl.getString("xn"));
			jxCjjlb.setXq(jxCjjl.getString("xq"));
			jxCjjlb.setKch(jxCjjl.getString("kch"));
			jxCjjlb.setKcmc(jxCjjl.getString("kcmc"));
			jxCjjlb.setZjjsh(jxCjjl.getString("zjjsh"));
			jxCjjlb.setZjjs(jxCjjl.getString("zjjs"));
//			jxCjjlb.setKsxsm(jxCjjl.getString("ksxsm"));
//			jxCjjlb.setKsxs(jxCjjl.getString("ksxs"));
			jxCjjlb.setKsrq(jxCjjl.getString("ksrq"));
			jxCjjlb.setKsfsm(jxCjjl.getString("ksfsm"));
			jxCjjlb.setKsfs(jxCjjl.getString("ksfs"));
			jxCjjlb.setKcxf(jxCjjl.getDouble("kcxf"));
			jxCjjlb.setCjlxm(jxCjjl.getString("cjlxm"));
			jxCjjlb.setCjlx(jxCjjl.getString("cjlx"));
			jxCjjlb.setCjlrrgh(jxCjjl.getString("cjlrrgh"));
			jxCjjlb.setSjzt(jxCjjl.getString("sjzt"));
			jxCjjlb.setKsdd(jxCjjl.getString("ksdd"));
			if(!jxCjjl.getString("ywpscj").equals("")){
				jxCjjlb.setYwpscj(jxCjjl.getInt("ywpscj"));
			}
			if(!jxCjjl.getString("pscjbl").equals("")){
				jxCjjlb.setPscjbl(jxCjjl.getInt("pscjbl"));
			}
			jxCjjlb.setCjlrsj(new java.util.Date());
			
			List<JxCjjlb> cjjl = jxCjjlbDao.find("from JxCjjlb as model where kkkh='" + kkkh + "'" );
			if( cjjl.size() == 0){
				jxCjjlbDao.save(jxCjjlb);
			}else{
				Long id  = cjjl.get(0).getId();
				jxCjjlb.setId(id);
				jxCjjlbDao.merge(jxCjjlb);
			}
			
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
	}
	
	public void saveCjmx(List<JSONObject> jxCjmx, String cjbl,String cjlxm,String flag) throws Exception{
		try{
			for(JSONObject cjmx : jxCjmx){
				JxCjmxb jxCjmxb = new JxCjmxb();
				String jpscj = cjmx.getString("pscj");
				Double pscj = 0.00;
				Double kccj = 0.00;
				Double fslkscj = 0.00;
				String djlkscj = "E";
//				String kcdjcjm = "25";
				String kkkh = cjmx.getString("kkkh");
				String xh = cjmx.getString("xh");
				jxCjmxb.setKkkh(kkkh);
				jxCjmxb.setXh(xh);
				jxCjmxb.setXm(cjmx.getString("xm"));
				if(!cjmx.getString("bz").equals("null")){
					jxCjmxb.setBz(cjmx.getString("bz"));
				}
				if(!cjmx.getString("ksxz").equals("null")){
					jxCjmxb.setKsxz(cjmx.getString("ksxz"));
					String ksxzm = zdKsxzmDao.find("from ZdKsxzm as model where mc='" + cjmx.getString("ksxz") + "'" ).get(0).getBm();
					jxCjmxb.setKsxzm(ksxzm);
				}
				if(!jpscj.equals("null"))
				{	
					pscj = cjmx.getDouble("pscj");
					jxCjmxb.setPscj(pscj);
				}
				
				if(!cjbl.equals("")){
					//分数类
					if(cjlxm.equals("1")){
						if(!cjmx.getString("fslkscj").equals("null"))
						{	
							fslkscj = cjmx.getDouble("fslkscj");
							jxCjmxb.setFslkscj(fslkscj);
						}
						kccj = pscj*(Double.parseDouble(cjbl)/100) + fslkscj*(1-Double.parseDouble(cjbl)/100);
					//等级类	
					}else if(cjlxm.equals("2")){
						if(!cjmx.getString("djlkscj").equals("null")){
							djlkscj = cjmx.getString("djlkscj");
							jxCjmxb.setDjlkscj(djlkscj);
						}
						ZdCjdjm cjdj = zdCjdjmDao.find("from ZdCjdjm as model where mc='" + djlkscj + "'" ).get(0);
						Double djcj = (Double)cjdj.getHsfs();
						String bm = cjdj.getBm();
						jxCjmxb.setKcdjcjm(bm);
						kccj = pscj*Double.parseDouble(cjbl)/100 + djcj*(1-Double.parseDouble(cjbl)/100);
						
					}
				}else{
					if(cjlxm.equals("1")){
						if(!cjmx.getString("fslkscj").equals("null"))
						{ 
							fslkscj = cjmx.getDouble("fslkscj");
						    jxCjmxb.setFslkscj(fslkscj);
						}
						kccj = fslkscj;
					}else if(cjlxm.equals("2")){
						if(!cjmx.getString("djlkscj").equals("null")){
							djlkscj = cjmx.getString("djlkscj");
							jxCjmxb.setDjlkscj(djlkscj);
						}
						ZdCjdjm cjdj = zdCjdjmDao.find("from ZdCjdjm as model where mc='" + djlkscj + "'" ).get(0);
						String bm = cjdj.getBm();
						Double djcj = (Double)cjdj.getHsfs();
						jxCjmxb.setKcdjcjm(bm);
						kccj = djcj;
					}
				}
//				if(flag.equals("1"))
//				{
					jxCjmxb.setDjlkscj(djlkscj);
					jxCjmxb.setFslkscj(fslkscj);
					jxCjmxb.setPscj(pscj);
					jxCjmxb.setKccj(kccj);
					if(jxCjmxb.getKsxzm().equals("14")){
						jxCjmxb.setFslkscj(null);
						jxCjmxb.setDjlkscj(null);
						jxCjmxb.setKcdjcjm(null);
						jxCjmxb.setPscj(null);
						jxCjmxb.setKccj(75.0);
					}
					else if(jxCjmxb.getKsxzm().equals("02") || jxCjmxb.getKsxzm().equals("20") || jxCjmxb.getKsxzm().equals("30")){
						jxCjmxb.setFslkscj(null);
						jxCjmxb.setDjlkscj(null);
						jxCjmxb.setKcdjcjm(null);
						jxCjmxb.setPscj(null);
						jxCjmxb.setKccj(null);
					}
//				}
				
				List<JxCjmxb> cjmxList = jxCjmxbDao.find("from JxCjmxb as model where kkkh='" + kkkh + "' and xh='"+ xh +"'" );
				if(cjmxList.size() == 0){
					jxCjmxbDao.save(jxCjmxb);
				}else{
					Long id = cjmxList.get(0).getId();
					jxCjmxb.setId(id);
					jxCjmxbDao.merge(jxCjmxb);
					
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
	}
	
	public CjdData getCjdData(String kkkh) throws Exception{
		CjdData cjdData = new CjdData();

		try {
			if(kkkh != null){
				cjdData.setJxCjjlbData((this.getCjjl(kkkh)));
				cjdData.setJxSkxxbData(this.getSkxx(kkkh));
				cjdData.setJxCjmxbData(this.getCjmx(kkkh));
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}	
		return cjdData;
	}
	
	public CjxxData getCjxxData(String kkkh) throws Exception{
		CjxxData cjxxData = new CjxxData();

		try {
			if(kkkh != null){
				cjxxData.setJxCjjlbData((this.getCjjl(kkkh)));
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}	
		return cjxxData;
	}
	
	public JxCjjlb getCjjl(String kkkh) throws Exception{
		JxCjjlb cjjl = null;
		try{
				if(kkkh != null){
					List<JxCjjlb> cjjlList = jxCjjlbDao.find("from JxCjjlb as model where kkkh='" + kkkh + "'");
					if(cjjlList.size() == 0){
						cjjl = new JxCjjlb();
						return cjjl;
					}
					cjjl = cjjlList.get(0);
				}
			}catch(Exception e){
			e.printStackTrace();
			throw e;
		} 
		return cjjl;
	}
	
	public JxSkxxb getSkxx(String kkkh) throws Exception{
		JxSkxxb skxx = null;
		try{
			if(kkkh != null){
				List<JxSkxxb> skxxList = jxSkxxbDao.find("from JxSkxxb as model where kkkh='" + kkkh + "'");
				if(skxxList.size() == 0){
					skxx = new JxSkxxb();
					return skxx;
				}
				skxx = skxxList.get(0);
			  }
			}catch(Exception e){
				e.printStackTrace();
				throw e;
		}
		return skxx;
	}
	
	public List<JxCjmxb> getCjmx(String kkkh) throws Exception{
		List<JxCjmxb> cjmxList = null;
		try{
			if(kkkh != null)
				cjmxList = jxCjmxbDao.find("from JxCjmxb as model where kkkh='" + kkkh + "' order by xh ASC");
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return cjmxList;
	}
	
	public void genCjmx(String kkkh,String kch,String xn,String xq) throws Exception{
		try{
			JxCjjlb cjjl = new JxCjjlb();
			cjjl.setKkkh(kkkh);
			cjjl.setKch(kch);
			cjjl.setXn(xn);
			cjjl.setXq(xq);
			cjjl.setSjzt("0");
			this.jxCjjlbDao.save(cjjl);
			List<ViewJxCjmxb> cjmxList = viewJxCjmxbDao.find("from ViewJxCjmxb as model where kkkh='" + kkkh + "'");
			for(int i = 0; i< cjmxList.size(); i++){
				JxCjmxb cjmx = new JxCjmxb();
				cjmx.setXh(cjmxList.get(i).getXh());
				cjmx.setXm(cjmxList.get(i).getXm());
				cjmx.setKkkh(kkkh);
				cjmx.setKsxzm("1");
				cjmx.setKsxz("正常考试");
				this.jxCjmxbDao.save(cjmx);
			}
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
	}
	
	public void reback(String kkkh) throws Exception{
		JxCjjlb cjjl = null;
		try{
				if(kkkh != null){
					List<JxCjjlb> cjjlList = jxCjjlbDao.find("from JxCjjlb as model where kkkh='" + kkkh + "'");
					cjjl = cjjlList.get(0);
					cjjl.setSjzt("0");
					jxCjjlbDao.merge(cjjl);
				}
			}catch(Exception e){
			e.printStackTrace();
			throw e;
		} 
	}
	
	public void callback(String kkkh) throws Exception{
		JxCjjlb cjjl = null;
		try{
				if(kkkh != null){
					List<JxCjjlb> cjjlList = jxCjjlbDao.find("from JxCjjlb as model where kkkh='" + kkkh + "'");
					cjjl = cjjlList.get(0);
					cjjl.setSjzt("0");
					jxCjjlbDao.merge(cjjl);
				}
			}catch(Exception e){
				e.printStackTrace();
				throw e;
		} 
	}
	
	public void pass(String kkkh) throws Exception{
		JxCjjlb cjjl = null;
		try{
				if(kkkh != null){
					List<JxCjjlb> cjjlList = jxCjjlbDao.find("from JxCjjlb as model where kkkh='" + kkkh + "'");
					cjjl = cjjlList.get(0);
					cjjl.setSjzt("2");
					jxCjjlbDao.merge(cjjl);
				}
			}catch(Exception e){
				e.printStackTrace();
				throw e;
		} 
	}
	
}
