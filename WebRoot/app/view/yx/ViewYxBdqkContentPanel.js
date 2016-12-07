Ext.define('App.view.yx.ViewYxBdqkContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewYxBdqkContentPanel',
	
	config: { parentId: 0},
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	autoScroll:true,
	
	
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
			items:[
				
				Ext.create('App.view.main.NavBar',{
					itemId:'viewYxBdqkNav',
					labelText:'各学院报到情况'
				}),
				Ext.create('App.view.yx.ViewYxBdqkSearchForm',{
	    	    	   itemId:'searchForm'
//	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.ViewYxBdqkList',{
					itemId:'viewYxBdqkList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});