Ext.define('App.view.search.PYFAAllContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.pYFAAllContentPanel',
	
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
    	    	   labelText:'培养方案查询'
    	       }),
    	       Ext.create('App.view.search.PYFAAllSearchForm',{
    	       		 itemId:'pyfaAllSearchForm'
//    	       		 ,
//    	    	     hidden:true
    	       }),
    	       Ext.create('App.view.search.PYFAList',{
    	    	   itemId:'pyfaAllList',
    	    	   layout:'auto'
        	})
        	]
        });
                	
        me.callParent(arguments);
    }
});