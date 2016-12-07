Ext.define('App.view.xs.XsJcxxbContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.xsJcxxContentPanel',
	
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
					itemId:'xsJcxxbNav',
					labelText:'学生基本信息'
				}),
				Ext.create('App.view.xs.XsJcxxbSearchForm',{
	    	    	   itemId:'searchForm',
	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.xs.XsJcxxbList',{
					itemId:'xsJcxxbList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});