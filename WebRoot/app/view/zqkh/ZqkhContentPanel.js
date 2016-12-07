Ext.define('App.view.zqkh.ZqkhContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.zqkhContentPanel',
	
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
    	    	   itemId:'zqkhNav',
    	    	   labelText:'中期考核'
    	       }),
    	       Ext.create('App.view.zqkh.ZqkhSearchForm',{
    	       		itemId:'searchForm',
    	       		hidden:true
    	       }),
    	       Ext.create('App.view.zqkh.ZqkhList',{
    	    	   itemId:'zqkhList',
    	    	   layout:'auto'
        	})

        		]
        });
        me.callParent(arguments);
    }
});