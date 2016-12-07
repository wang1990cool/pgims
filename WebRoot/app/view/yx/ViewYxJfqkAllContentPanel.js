Ext.define('App.view.yx.ViewYxJfqkAllContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.viewYxJfqkAllContentPanel',
	
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
					itemId:'viewYxJfqkAllNav',
					labelText:'各学院缴费情况'
				}),
				Ext.create('App.view.yx.ViewYxJfqkAllSearchForm',{
	    	    	   itemId:'searchForm'
//	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.ViewYxJfqkAllList',{
					itemId:'viewYxJfqkAllList',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});