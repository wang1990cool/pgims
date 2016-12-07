Ext.define('App.view.search.ZqkhAllContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.zqkhAllContentPanel',
	
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
    	    	   itemId:'zqkhCxNav',
    	    	   labelText:'中期考核查询'
    	       }),
    	       Ext.create('App.view.search.ZqkhAllSearchForm',{
    	       		itemId:'zqkhAllSearchForm'
//    	       		hidden:true
    	       }),
    	       Ext.create('App.view.search.ZqkhAllList',{
    	    	   itemId:'zqkhAllList',
    	    	   layout:'auto'
        	})

        		]
        });
        me.callParent(arguments);
    }
});