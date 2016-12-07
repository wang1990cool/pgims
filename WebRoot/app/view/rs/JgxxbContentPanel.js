Ext.define('App.view.rs.JgxxbContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jbxxbContentPanel',
	
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
    	    	   itemId:'jgxxNav',
    	    	   labelText:'教师信息管理'
    	       }),
    	       Ext.create('App.view.rs.JgxxSearchForm',{
    	    	   itemId:'searchForm',
    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.rs.JgxxList',{
    	    	   itemId:'jgxxList',
    	    	   layout:'auto'
        	})
        	]
        });
        me.callParent(arguments);
    }
});