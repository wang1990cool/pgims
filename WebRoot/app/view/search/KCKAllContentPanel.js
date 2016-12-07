Ext.define('App.view.search.KCKAllContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.kckAllContentPanel',
	
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
    	    	   itemId:'kckNav',
    	    	   labelText:'课程查询'
    	       }),
    	       Ext.create('App.view.search.KCKAllSearchForm',{
    	    	   itemId:'searchForm'
//    	    	   ,
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.search.KCKList',{
    	    	   itemId:'kckAllList'
        	})]
        });
        me.callParent(arguments);
    }
});