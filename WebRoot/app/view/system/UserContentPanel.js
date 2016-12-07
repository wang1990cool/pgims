Ext.define('App.view.system.UserContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.userContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId: 'userNav',
    	    	   labelText: '用户管理'
    	       }),
    	       Ext.create('App.view.system.UserSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.system.UserList',{
    	    	   itemId:'userList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});