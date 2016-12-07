Ext.define('App.view.search.KKJHAllContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.kkjhAllContentPanel',
	
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
    	    	   labelText:'开课计划查询'
    	       }),
    	       Ext.create('App.view.search.KKJHAllSearchForm',{
    	       		itemId:'kkjhAllSearchForm'
//    	       		,
//    	       		hidden:true
    	       }),
    	       Ext.create('App.view.search.KKJHList',{
    	    	   itemId:'kkjhAllList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});