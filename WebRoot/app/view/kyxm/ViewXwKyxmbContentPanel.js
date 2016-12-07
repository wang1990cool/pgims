Ext.define('App.view.kyxm.ViewXwKyxmbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewXwKyxmbContentPanel',
	
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
					itemId:'viewXwKyxmbNav',
					labelText:'参与科研项目情况查询'
				}),
//    	       Ext.create('App.view.kyxm.ViewXwKyxmbSearchForm',{
//    	    	   itemId:'searchFormkyxm',
//    	    	   hidden:false
//    	       }),
    	       Ext.create('App.view.kyxm.ViewXwKyxmbList',{
    	    	   itemId:'viewXwKyxmbSearchList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});