Ext.define('App.view.yx.YxXsjbxxContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.yxXsjbxxContentPanel',
	
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
					itemId:'yxXsjbxxNav',
					labelText:'新生基本信息'
				}),
				Ext.create('App.view.yx.YxXsjbxxSearchForm',{
	    	    	   itemId:'searchForm',
	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.YxXsjbxxList',{
					itemId:'yxXsjbxxList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});