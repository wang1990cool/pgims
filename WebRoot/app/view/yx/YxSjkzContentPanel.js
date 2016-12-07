Ext.define('App.view.yx.YxSjkzContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.yxSjkzContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId:'yxSjkzNav',
    	    	   labelText:'迎新时间控制'
    	       }),
    	       Ext.create('App.view.yx.YxSjkzList',{
    	    	   itemId:'yxSjkzList',
    	    	   layout:'auto'
        	})
        	]
        });
        me.callParent(arguments);
    }
});