Ext.define('App.view.cjcx.MsCjcxConPan', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.msCjcxConPan',
	
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
    	    	   itemId:'cjcxNav',
    	    	   labelText:'成绩查询(教学秘书)'
    	       }),
    	       
    	       Ext.create('App.view.cjcx.CjcxSearchForm',{
	    	       itemId:'searchForm',
	    	       hidden:true
	    	   }),
    	       
	    	   Ext.create('App.view.cjcx.MsCjcxList',{
					itemId:'msCjcxList',				
					layout:'auto'
				})
    	       
        	]
        });
                	
        me.callParent(arguments);
    }
});