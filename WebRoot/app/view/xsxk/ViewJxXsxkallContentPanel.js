Ext.define('App.view.xsxk.ViewJxXsxkallContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewJxXsxkallContentPanel',
	
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
					itemId:'xsJcxxbNav',
					labelText:'选课信息查询'
				}),
    	       Ext.create('App.view.xsxk.ViewJxXsxkallSearchForm',{
    	    	   itemId:'searchForm'
    	       }),
    	       Ext.create('App.view.xsxk.ViewJxXsxkallList',{
    	    	   itemId:'viewJxXsxkallList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});