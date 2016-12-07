Ext.define('App.view.cjlr.CjqrConPan', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cjqrConPan',
	
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
	    	    	   labelText:'成绩确认(研究生院)'
	    	       }),
	    	       
	    	    Ext.create('App.view.cjlr.CjqrSearchForm',{
    	       	   itemId:'searchForm',
    	    	   hidden:true
    	       	}),
    	       
	    	    Ext.create('App.view.cjlr.CjqrList',{
	    	       	   itemId: 'cjqrList'
	    	    })
        	]
        });
                	
        me.callParent(arguments);
    }
});