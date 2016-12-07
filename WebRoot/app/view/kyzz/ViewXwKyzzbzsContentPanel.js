Ext.define('App.view.kyzz.ViewXwKyzzbzsContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKyzzbzsContentPanel',
	
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
					itemId:'viewXwKyzzbzsNav',
					labelText:'科研著作登记信息'
				}),
//    	       Ext.create('App.view.kyzz.ViewXwKyzzbSearchForm',{
//    	    	   itemId:'searchForm',
//    	    	   hidden:true
//    	       }),
    	       Ext.create('App.view.kyzz.ViewXwKyzzbzsList',{
    	    	   itemId:'viewXwKyzzbzsList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});