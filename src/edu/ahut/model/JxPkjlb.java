package edu.ahut.model;

import java.util.Date;

public class JxPkjlb implements java.io.Serializable {
	private static final long serialVersionUID = -6347146628695001549L;

	private Long id;
	private String xn;
	private String xq;
	private String pydwh;
	private String pydw;
	private String zydm;
	private String zymc;
	private String kkkh;
	private String kch;
	private String kcmc;
	private String kclbm;
	private String kclb;
	private String ggkbzm;
	private String ggkbz;
	private String jsbh;
	private String jsmc;
	private String zjjsh;
	private String zjjs;
	private String dszbzm;
	private String dszbz;
	private String kcsjm;   //课程时间码
	private String kcsj;	//课程时间
	private String kczs;	//课程周数
	private String kcjc;	//课程节次
	private String pkztm;
	private String czrzh;
	private String czr;
	private Date czsj;
	public String getCtid() {
		return ctid;
	}

	public void setCtid(String ctid) {
		this.ctid = ctid;
	}

	private String sjzxapbz;
	private String ddzxapbz;
	private String kksj;
	private String kkdwh;
	private String kkdw;
	private String ctid;
	private int[] timeFlag = new int[64];

	public JxPkjlb() {
	}

	public JxPkjlb(String xn, String xq, String pydwh, String pydw,
			String zydm, String zymc, String kkkh, String kch, String kcmc,
			String kclbm, String kclb, String ggkbzm, String ggkbz,String kkdwh, String kkdw,
			String jsbh, String jsmc, String zjjsh, String zjjs, String dszbzm,String ctid,
			String dszbz, String kcsjm, String kcsj, String kczs, String kcjc,String kksj,
			String pkztm, String czrzh, String czr, Date czsj ,String sjzxapbz,String ddzxapbz) {
		this.xn = xn;
		this.xq = xq;
		this.pydwh = pydwh;
		this.pydw = pydw;
		this.zydm = zydm;
		this.zymc = zymc;
		this.kkkh = kkkh;
		this.kch = kch;
		this.kcmc = kcmc;
		this.kclbm = kclbm;
		this.kclb = kclb;
		this.ggkbzm = ggkbzm;
		this.ggkbz = ggkbz;
		this.jsbh = jsbh;
		this.jsmc = jsmc;
		this.zjjsh = zjjsh;
		this.zjjs = zjjs;
		this.dszbzm = dszbzm;
		this.dszbz = dszbz;
		this.kcsjm = kcsjm;
		this.kcsj = kcsj;
		this.kczs = kczs;
		this.kcjc = kcjc;
		this.pkztm = pkztm;
		this.czrzh = czrzh;
		this.czr = czr;
		this.czsj = czsj;
		this.sjzxapbz = sjzxapbz;
		this.ddzxapbz = ddzxapbz;
		this.kksj = kksj;
		this.kkdwh = kkdwh;
		this.kkdw = kkdw;
		this.ctid = ctid;
		initTimeFlag();
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getXn() {
		return this.xn;
	}

	public void setXn(String xn) {
		this.xn = xn;
	}

	public String getXq() {
		return this.xq;
	}

	public void setXq(String xq) {
		this.xq = xq;
	}

	public String getPydwh() {
		return this.pydwh;
	}

	public void setPydwh(String pydwh) {
		this.pydwh = pydwh;
	}

	public String getPydw() {
		return this.pydw;
	}

	public void setPydw(String pydw) {
		this.pydw = pydw;
	}

	public String getZydm() {
		return this.zydm;
	}

	public void setZydm(String zydm) {
		this.zydm = zydm;
	}

	public String getZymc() {
		return this.zymc;
	}

	public void setZymc(String zymc) {
		this.zymc = zymc;
	}

	public String getKkkh() {
		return this.kkkh;
	}

	public void setKkkh(String kkkh) {
		this.kkkh = kkkh;
	}

	public String getKch() {
		return this.kch;
	}

	public void setKch(String kch) {
		this.kch = kch;
	}

	public String getKcmc() {
		return this.kcmc;
	}

	public void setKcmc(String kcmc) {
		this.kcmc = kcmc;
	}

	public String getKclbm() {
		return this.kclbm;
	}

	public void setKclbm(String kclbm) {
		this.kclbm = kclbm;
	}

	public String getKclb() {
		return this.kclb;
	}

	public void setKclb(String kclb) {
		this.kclb = kclb;
	}

	public String getGgkbzm() {
		return this.ggkbzm;
	}

	public void setGgkbzm(String ggkbzm) {
		this.ggkbzm = ggkbzm;
	}

	public String getGgkbz() {
		return this.ggkbz;
	}

	public void setGgkbz(String ggkbz) {
		this.ggkbz = ggkbz;
	}

	public String getJsbh() {
		return this.jsbh;
	}

	public void setJsbh(String jsbh) {
		this.jsbh = jsbh;
	}

	public String getJsmc() {
		return this.jsmc;
	}

	public void setJsmc(String jsmc) {
		this.jsmc = jsmc;
	}

	public String getZjjsh() {
		return this.zjjsh;
	}

	public void setZjjsh(String zjjsh) {
		this.zjjsh = zjjsh;
	}

	public String getZjjs() {
		return this.zjjs;
	}

	public void setZjjs(String zjjs) {
		this.zjjs = zjjs;
	}

	public String getDszbzm() {
		return this.dszbzm;
	}

	public void setDszbzm(String dszbzm) {
		this.dszbzm = dszbzm;
	}

	public String getDszbz() {
		return this.dszbz;
	}

	public void setDszbz(String dszbz) {
		this.dszbz = dszbz;
	}

	public String getKcsjm() {
		return this.kcsjm;
	}

	public void setKcsjm(String kcsjm) {
		this.kcsjm = kcsjm;
	}

	public String getKcsj() {
		return this.kcsj;
	}

	public void setKcsj(String kcsj) {
		this.kcsj = kcsj;
	}

	public String getKczs() {
		return this.kczs;
	}

	public void setKczs(String kczs) {
		this.kczs = kczs;
	}

	public String getKcjc() {
		return this.kcjc;
	}

	public void setKcjc(String kcjc) {
		this.kcjc = kcjc;
	}

	public String getPkztm() {
		return this.pkztm;
	}

	public void setPkztm(String pkztm) {
		this.pkztm = pkztm;
	}

	public String getCzrzh() {
		return this.czrzh;
	}

	public void setCzrzh(String czrzh) {
		this.czrzh = czrzh;
	}

	public String getCzr() {
		return this.czr;
	}

	public void setCzr(String czr) {
		this.czr = czr;
	}

	public Date getCzsj() {
		return this.czsj;
	}

	public void setCzsj(Date czsj) {
		this.czsj = czsj;
	}
	
	public String getSjzxapbz() {
		return sjzxapbz;
	}

	public void setSjzxapbz(String sjzxapbz) {
		this.sjzxapbz = sjzxapbz;
	}

	public String getDdzxapbz() {
		return ddzxapbz;
	}

	public void setDdzxapbz(String ddzxapbz) {
		this.ddzxapbz = ddzxapbz;
	}

	public int[] getTimeFlag() {
		return timeFlag;
	}

	public void setTimeFlag(int[] timeFlag) {
		this.timeFlag = timeFlag;
	}
	
	public String getKksj() {
		return kksj;
	}

	public void setKksj(String kksj) {
		this.kksj = kksj;
	}
	
	public String getKkdwh() {
		return kkdwh;
	}

	public void setKkdwh(String kkdwh) {
		this.kkdwh = kkdwh;
	}

	public String getKkdw() {
		return kkdw;
	}

	public void setKkdw(String kkdw) {
		this.kkdw = kkdw;
	}

	public void initTimeFlag(){
			String[] kczsArr = kczs.split("/");
			String[] kcjcArr = kcjc.split("/");
			if(kczsArr.length > 0 && !"".equals(kcsjm) && kcsjm != null && kcjcArr.length > 0){
				//根据课程周次、节次置整数数组
				for(int i = 0; i<kczsArr.length; i++){
					for(int j = 0; j < kcjcArr.length; j++){
						int jc = (Integer.parseInt(kczsArr[i])-1)*77 + (Integer.parseInt(kcsjm)-1)*11 + Integer.parseInt(kcjcArr[j]);
						int pos = jc/32;
						int mod = jc%32;
						timeFlag[pos] |= (int)1<<mod;
					}	
				}
			}
	}
	
	//判断排课对象是否存在时间/教室/教师的冲突
	public boolean isConflict(JxPkjlb jxPkjlb){
		boolean tc = false;
		for(int i=0; i<this.timeFlag.length; i++){
			if((this.timeFlag[i]&jxPkjlb.timeFlag[i])!=0){
				tc = true;
				break;
			}
		}
		boolean isConflict = false;
			if(tc){
				if(!this.jsbh.equals(jxPkjlb.jsbh)){
					if(!this.zjjsh.equals(jxPkjlb.zjjsh)){
						isConflict =  false;
					}else{
						isConflict =  true;
					}
				}else{
					isConflict =  true;
				}
			}else{
				isConflict =  false;
			}
//		if(tc && (this.jsmc==jxPkjlb.jsmc ||this.zjjs==jxPkjlb.zjjs))
//			return true;
//		else
//			return false;
		return isConflict;
	}
	 
	public static void main(String[] args){
		JxPkjlb pk = new JxPkjlb();
		pk.initTimeFlag();
		
		for(int i = 0; i < pk.getTimeFlag().length ;i++){
			System.out.println(pk.getTimeFlag()[i]);
		}
	}
}