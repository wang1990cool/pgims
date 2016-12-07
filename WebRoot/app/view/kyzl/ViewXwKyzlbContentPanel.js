Ext.define('App.view.kyzl.ViewXwKyzlbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKyzlbContentPanel',
	
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
					itemId:'viewXwKyzlbNav',
					labelText:'著作专利登记信息'
				}),
//    	       Ext.create('App.view.kyzl.ViewXwKyzlbSearchForm',{
//    	    	   itemId:'searchForm',
//    	    	   hidden:true
//    	       }),
    	       Ext.create('App.view.kyzl.ViewXwKyzlbList',{
    	    	   itemId:'viewXwKyzlbList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});