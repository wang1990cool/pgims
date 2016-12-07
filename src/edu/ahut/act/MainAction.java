package edu.ahut.act;

import java.util.List;

import net.sf.json.JSONObject;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import edu.ahut.model.TyXnb;
import edu.ahut.model.WebRight;
import edu.ahut.model.WebUser;
import edu.ahut.service.TyXnbService;
import edu.ahut.service.WebUserService;
import edu.ahut.util.JsonResult;
import edu.ahut.util.SpringContextUtil;

public class MainAction extends ActionSupport {
	private static final long serialVersionUID = -6921318706754578655L;
	private List<?> datas;
	private JsonResult result = new JsonResult();
	private WebUserService webUserService;
	private TyXnbService tyXnbService;
	public MainAction(){
		this.setWebUserService((WebUserService) SpringContextUtil.getBean("WebUserServiceImpl"));
		this.setTyXnbService((TyXnbService)SpringContextUtil.getBean("TyXnbServiceImpl"));
	}

	public List<?> getDatas() {
		return datas;
	}

	public void setDatas(List<?> datas) {
		this.datas = datas;
	}
	
	public JsonResult getResult() {
		return result;
	}

	public void setResult(JsonResult result) {
		this.result = result;
	}

	public WebUserService getWebUserService() {
		return webUserService;
	}

	public void setWebUserService(WebUserService webUserService) {
		this.webUserService = webUserService;
	}

	public TyXnbService getTyXnbService() {
		return tyXnbService;
	}

	public void setTyXnbService(TyXnbService tyXnbService) {
		this.tyXnbService = tyXnbService;
	}

	public String index(){
		return "index";
	}
	
	public String main(){
		return "main";
	}
	
	public String exit(){
		ActionContext.getContext().getSession().clear();
		result.setSuccess(true);
		return SUCCESS;
	}

	@SuppressWarnings("unchecked")
	public String login() {
		try {
			JSONObject json = JSONObject.fromObject(datas.get(0));
			String userName = json.getString("userName");
			String userPwd = json.getString("userPwd");
			String validateCode = json.getString("validateCode");
			
			String sysValidCode = (String)ActionContext.getContext().getSession().get("rand");
			if(!sysValidCode.equals(validateCode)){
				result.setSuccess(false);
				result.setMsg("验证码错误！");
			}else{		
				WebUser webUser = null;
				List<TyXnb> tyXnbList = (List<TyXnb> )tyXnbService.Query("sfyx = '1'",null);
					String xn = tyXnbList.get(0).getXn();
					String xq = tyXnbList.get(0).getXq();
					if(tyXnbList.size() > 1){
						for(int i = 1;i < tyXnbList.size();i++){
							xn += "," +  tyXnbList.get(i).getXn();
							xq += "," +  tyXnbList.get(i).getXq();
						}
					}
				try {
					webUser = webUserService.findByUserName(userName);
				} catch (Exception e) {
					e.printStackTrace();
				}
				if(webUser == null || !webUser.getUserPwd().equals(userPwd)){
					result.setSuccess(false);
					result.setMsg("用户名或密码错误！");
				}
				else{
					ActionContext.getContext().getSession().put("webUser", webUser);
					ActionContext.getContext().getSession().put("userName",webUser.getUserName());
					ActionContext.getContext().getSession().put("userCName",webUser.getUserCName());
					List<WebRight> webRights = (List<WebRight>) webUser.getWebRole().getWebRights();
					ActionContext.getContext().getSession().put("isSuperRight", this.isSuperRight(webRights));
					ActionContext.getContext().getSession().put("xn", xn);
					ActionContext.getContext().getSession().put("xq", xq);
					result.setSuccess(true);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			return LOGIN;
		}
		return SUCCESS;
	}
	
	public boolean isSuperRight(List<WebRight> webRights){
		boolean flag = false;
		for(WebRight webRight : webRights){
			if("SuperRight".equals(webRight.getRightCode())){
				flag = true;
				break;
			}
		}
		return flag;
	}
}