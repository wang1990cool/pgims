<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>  
<%@ page import="edu.ahut.model.WebUser"%>
<%@ page import="edu.ahut.model.WebUser"%>
<script type="text/javascript">	
	var pSize = 15;
	var userCName = null,userName = null,dept=null,szdwh=null,szdw=null,roleCode=null,gh=null,xm=null,xn=null,xq=null;
</script>
<%
	WebUser user = (WebUser)request.getSession().getAttribute("webUser");
	Object userName = request.getSession().getAttribute("userName");
	Object userCName = request.getSession().getAttribute("userCName");
	Object isSuperRight = request.getSession().getAttribute("isSuperRight"); 
	Object xn = request.getSession().getAttribute("xn");
	Object xq = request.getSession().getAttribute("xq");

	if(userName == null){
	%>
	<script type="text/javascript">
 		Ext.onReady(function() {
	        var theme = getTheme();
		    Ext.Msg.show({title:'提示', msg:'当前页面已过期，请重新登陆！',buttons: Ext.Msg.OK, 
		    	fn:function(){window.location.href='index.action' + (theme === 'classic'?'':'?theme='+ theme);},icon: Ext.Msg.WARNING});
			return false;
		}); 
	</script>
	<%
	}
	else{
		String szdw =  user.getSzdw();
		String szdwh =  user.getSzdwh();
		String gh = user.getGh();
		String xm = user.getXm();
		String roleCode = 	user.getWebRole().getRoleCode();
	%>
	<script type="text/javascript">		
		userName = "<%= userName %>";
		userCName = "<%= userCName %>";
		isSuperRight = <%=isSuperRight%>
		roleCode = "<%=roleCode%>"
		xn = "<%=xn%>"
		xq = "<%=xq%>"
		gh = "<%=gh%>"
		szdwh = "<%=szdwh%>"
		if(userName == 'admin'){
			dept = "研究生院";
			xm = "超用户"
		}else{
			dept = "<%=szdw%>";
			xm = "<%=xm%>"
		}
	</script>
	<%
	}
%>
 