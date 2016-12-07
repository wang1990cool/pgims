Ext.define('App.view.yx.XsbdCxContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.xsbdCxContentPanel',
	
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
					itemId:'xsbdCxNav',
					labelText:'新生报到信息'
				}),
				Ext.create('App.view.yx.XsbdCxSearchForm',{
	    	    	   itemId:'searchForm'
//	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.XsbdCxList',{
					itemId:'xsbdCxList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});