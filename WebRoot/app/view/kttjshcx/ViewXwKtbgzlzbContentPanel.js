Ext.define('App.view.kttjshcx.ViewXwKtbgzlzbContentPanel', {
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
					itemId:'viewXwKtbgzlzbNav',
					labelText:'开题报告查询'
				}),
    	       Ext.create('App.view.kttjshcx.ViewXwKtbgzlzbSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:false
    	       }),
    	       Ext.create('App.view.kttjshcx.ViewXwKtbgzlzbList',{
    	    	   itemId:'viewXwKtbgzlzbList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});