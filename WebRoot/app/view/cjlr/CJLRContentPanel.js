Ext.define('App.view.cjlr.CJLRContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cJLRContentPanel',
	
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
    	    	   itemId:'cjlrNav',
    	    	   labelText:'成绩录入'
    	       }),
    	       Ext.create('App.view.cjlr.CJLRForm',{
    	    	   itemId:'cjlrForm',
    	    	   layout:'auto'
        	})
        		]
        });
                	
        me.callParent(arguments);
    }
});