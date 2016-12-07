Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/ux/');
Ext.Loader.setPath('App', 'app/');

Ext.require([
    'Ext.tab.*',
    'Ext.ux.extend.*',
    'Ext.window.*',
    'Ext.tip.*',
    'Ext.layout.container.Border'
]);

Ext.onReady(function() {
	Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    Ext.create('App.view.login.LoginDialog',{
    	itemId:'loginDialog',
    	title:'系统登录',
    	url:'main.action',
    	layout : 'fit',
    	width : 450,
    	height : 235,
    	closable:false,
    	closeAction : 'hide',
    	plain : true,
    	maximizable : false,
    	draggable : true,
    	resizable : false,
    	renderTo : Ext.getBody(),
    	autoShow:true
    });
});


