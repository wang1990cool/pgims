Ext.define('App.view.skxx.SKXXContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.skxxContentPanel',
	
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
    	    	   itemId:'pyfaNav',
    	    	   labelText:'授课信息管理'
    	       }),
    	       Ext.create('App.view.skxx.SKXXSearchForm',{
    	       		itemId:'skxxSearchForm',
    	       		hidden:true
    	       }),
    	       Ext.create('App.view.skxx.SKXXList',{
    	    	   itemId:'skxxList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});