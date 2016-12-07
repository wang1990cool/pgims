<%@ page language="java" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="Shortcut icon" href="<%=basePath%>/styles/images/system/favicon.ico" type="image/x-icon">
<script type="text/javascript" src="<%=basePath%>/extjs/json2.js"></script>
<script type="text/javascript" src="<%=basePath%>/extjs/include-ext.js"></script>
<script type="text/javascript" src="<%=basePath%>/extjs/local/ext-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=basePath%>/extjs/ux/extend/Util.js"></script>