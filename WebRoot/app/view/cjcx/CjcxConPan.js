Ext.define('App.view.cjcx.CjcxConPan', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cjcxConPan',
	
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
    	    	   labelText:'成绩查询(任课教师)'
    	       }),
    	       
    	       Ext.create('App.view.cjcx.CjcxSearchForm',{
	    	       itemId:'searchForm',
	    	       hidden:true
	    	   }),
    	       
	    	   Ext.create('App.view.cjcx.CjcxList',{
					itemId:'cjcxList',				
					layout:'auto'
				})
    	       
        	]
        });
                	
        me.callParent(arguments);
    }
});