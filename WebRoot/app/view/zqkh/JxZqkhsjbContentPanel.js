Ext.define('App.view.zqkh.JxZqkhsjbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jxZqkhsjbContentPanel',
	
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
					itemId:'jxZqkhsjbNav',
					labelText:'中期考核时间'
				}),
    	       Ext.create('App.view.zqkh.JxZqkhsjbList',{
    	    	   itemId:'jxZqkhsjbList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});