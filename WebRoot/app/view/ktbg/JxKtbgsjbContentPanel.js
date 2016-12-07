Ext.define('App.view.ktbg.JxKtbgsjbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jxKtbgsjbContentPanel',
	
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
					itemId:'jxKtbgsjbNav',
					labelText:'开题申请时间'
				}),
    	       Ext.create('App.view.ktbg.JxKtbgsjbList',{
    	    	   itemId:'jxKtbgsjbList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});