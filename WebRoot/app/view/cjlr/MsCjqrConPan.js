Ext.define('App.view.cjlr.MsCjqrConPan', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.msCjqrConPan',
	
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
	    	    	   itemId:'cjqrNav',
	    	    	   labelText:'成绩录入状态查看(教学秘书)'
	    	       }),
	    	       
	    	    Ext.create('App.view.cjlr.CjqrSearchForm',{
    	       	   itemId:'searchForm',
    	    	   hidden:true
    	       	}),
    	       
	    	    Ext.create('App.view.cjlr.MsCjqrList',{
	    	       	   itemId: 'msCjqrList'
	    	    })
        	]
        });
                	
        me.callParent(arguments);
    }
});