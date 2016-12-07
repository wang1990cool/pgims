Ext.define('App.view.ktbg.ViewXwKtbgsqContentPanel', {
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
					labelText:'开题申请审核'
				}),
    	       Ext.create('App.view.ktbg.ViewXwKtbgsqSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.ktbg.ViewXwKtbgsqList',{
    	    	   itemId:'viewXwKtbgsqList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});