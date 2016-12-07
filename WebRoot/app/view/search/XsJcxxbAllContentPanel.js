Ext.define('App.view.search.XsJcxxbAllContentPanel',{
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
					labelText:'学生信息查询'
				}),
				Ext.create('App.view.search.XsJcxxbAllSearchForm',{
	    	    	   itemId:'searchForm'
	    	       }),
				Ext.create('App.view.search.XsJcxxbList',{
					itemId:'xsJcxxbAllList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});