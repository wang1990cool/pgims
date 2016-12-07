Ext.define('App.view.kttjsh.ViewXwKtbgzlzbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKtbgzlzbContentPanel',
	
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
					itemId:'viewXwKtbgsqNav',
					labelText:'开题报告审核'
				}),
    	       Ext.create('App.view.kttjsh.ViewXwKtbgzlzbSearchForm',{
    	    	   itemId:'searchFormzl',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.kttjsh.ViewXwKtbgzlzbList',{
    	    	   itemId:'viewXwKtbgzlzbSeachList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});