Ext.define('App.view.cjdy.CjdyContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cjdyContentPanel',
	
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
    	    	   itemId:'cjdyNav',
    	    	   labelText:''
    	       }),
    	   		 Ext.create('App.view.cjdy.CjdySearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.cjdy.CjdyList',{
    	    	   itemId:'cjdyList'
        	})]
        });
        me.callParent(arguments);
    }
});