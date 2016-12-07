Ext.define('App.view.psdm.PsdmContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.psdmContentPanel',
	
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
    	    	   itemId:'psdmNav',
    	    	   labelText:'平时点名册'
    	       }),
    	   		 Ext.create('App.view.psdm.PsdmSearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.psdm.PsdmList',{
    	    	   itemId:'psdmList'
        	})]
        });
        me.callParent(arguments);
    }
});