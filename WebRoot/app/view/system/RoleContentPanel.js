Ext.define('App.view.system.RoleContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.roleContentPanel',
	
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
    	    	   itemId:'roleNav',
    	    	   labelText:'角色管理'
    	       }),
    	       Ext.create('App.view.system.RoleSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.system.RoleList',{
    	    	   itemId:'roleList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});