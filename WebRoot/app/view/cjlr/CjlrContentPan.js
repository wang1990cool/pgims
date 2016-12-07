Ext.define('App.view.cjlr.CjlrContentPan', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cjlrContentPan',
	
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
    	       
    	       
    	       Ext.create('App.view.cjlr.KcztList',{
    	       	   itemId: 'kcztList',
    	       	   labelText: '课程列表'
    	       })
        	]
        });
                	
        me.callParent(arguments);
    }
});