Ext.define('App.view.skzl.SKZLSearchContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.skzlSearchContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	autoScroll:true,
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId:'skzlNav',
    	    	   labelText:'资料管理'
    	       }),
    	   		 Ext.create('App.view.skzl.SKZLSearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.skzl.SKZLSearchList',{
    	    	   itemId:'skzlList'
        	})]
        });
        me.callParent(arguments);
    }
});