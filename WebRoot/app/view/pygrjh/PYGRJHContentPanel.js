Ext.define('App.view.pygrjh.PYGRJHContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.pYGRJHContentPanel',
	config: { parentId: 0 },
	region: 'center',
	split: true,
	layout: 'auto',
	autoScroll:true,
	border:'0 0 0 0',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId:'pyfaNav',
    	    	   labelText:'个人计划'
    	       }),
    	       Ext.create('App.view.pygrjh.PYGRJHSearchForm',{
    	       		 itemId:'searchForm',
    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.pygrjh.PYGRJHList',{
    	    	   itemId:'pygrjhList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});