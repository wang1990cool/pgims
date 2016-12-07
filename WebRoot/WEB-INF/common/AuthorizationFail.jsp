<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
eval("var theme = getTheme();Ext.Msg.show({title:'提示', msg:'当前页面已过期，请重新登陆！',buttons: Ext.Msg.OK,fn:function(){window.location.href='index.action' + (theme === 'classic'?'':'?theme='+ theme);},icon: Ext.Msg.WARNING});")
