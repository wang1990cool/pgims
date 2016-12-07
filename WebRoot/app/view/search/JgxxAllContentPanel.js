Ext.define('App.view.search.JgxxAllContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jbxxAllContentPanel',
	
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
    	    	   labelText:'教师信息查询'
    	       }),
    	       Ext.create('App.view.search.JgxxAllSearchForm',{
    	    	   itemId:'searchForm'
//    	    	   ,
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.search.JgxxList',{
    	    	   itemId:'jgxxAllList',
    	    	   layout:'auto'
        	})
        	]
        });
        me.callParent(arguments);
    }
});