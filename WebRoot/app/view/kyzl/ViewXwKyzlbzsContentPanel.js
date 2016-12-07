Ext.define('App.view.kyzl.ViewXwKyzlbzsContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKyzlbzsContentPanel',
	
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
					itemId:'viewXwKyzlbzsNav',
					labelText:'著作专利登记信息'
				}),
//    	       Ext.create('App.view.kyzl.ViewXwKyzlbSearchForm',{
//    	    	   itemId:'searchForm',
//    	    	   hidden:true
//    	       }),
    	       Ext.create('App.view.kyzl.ViewXwKyzlbzsList',{
    	    	   itemId:'viewXwKyzlbzsList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});