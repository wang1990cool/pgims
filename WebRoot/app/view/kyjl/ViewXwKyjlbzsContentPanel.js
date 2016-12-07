Ext.define('App.view.kyjl.ViewXwKyjlbzsContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKyjlbzsContentPanel',
	
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
					itemId:'viewXwKyjlbNav',
					labelText:'科技获奖登记信息'
				}),
//    	       Ext.create('App.view.kyjl.ViewXwKyjlbSearchForm',{
//    	    	   itemId:'searchForm',
//    	    	   hidden:true
//    	       }),
    	       Ext.create('App.view.kyjl.ViewXwKyjlbzsList',{
    	    	   itemId:'viewXwKyjlbzsList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});