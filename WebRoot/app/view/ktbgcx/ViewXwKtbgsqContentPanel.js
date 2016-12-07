Ext.define('App.view.ktbgcx.ViewXwKtbgsqContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKtbgsqContentPanel',
	
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
					labelText:'开题申请查询'
				}),
    	       Ext.create('App.view.ktbgcx.ViewXwKtbgsqSearchForm',{
    	    	   itemId:'searchFormktbgcx',
    	    	   hidden:false
    	       }),
    	       Ext.create('App.view.ktbgcx.ViewXwKtbgsqList',{
    	    	   itemId:'viewXwKtbgsqSearchList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});