Ext.define('App.view.psdm.MsPsdmContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.msPsdmContentPanel',
	
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
    	    	   itemId:'msPsdmNav',
    	    	   labelText:'平时点名册'
    	       }),
    	   		 Ext.create('App.view.psdm.PsdmSearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.psdm.MsPsdmList',{
    	    	   itemId:'msPsdmList'
        	})]
        });
        me.callParent(arguments);
    }
});