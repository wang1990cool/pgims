Ext.define('App.view.yx.YxXsjbxxHContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.yxXsjbxxHContentPanel',
	
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
					itemId:'yxXsjbxxHNav',
					labelText:'学生基本信息'
				}),
				Ext.create('App.view.yx.YxXsjbxxHSearchForm',{
	    	    	   itemId:'searchForm',
	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.YxXsjbxxHList',{
					itemId:'yxXsjbxxHList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});