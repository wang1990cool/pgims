Ext.define('App.view.yx.XsbdContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.xsbdContentPanel',
	
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
					itemId:'xsbdNav',
					labelText:'新生报到信息'
				}),
				Ext.create('App.view.yx.XsbdSubmitForm',{
	    	    	   itemId:'xsbdSubmitForm'
//	    	    	   hidden:true
	    	       }),
				Ext.create('App.view.yx.XsbdForm',{
					itemId:'xsbdForm',				
					layout:'auto'
				})
				
				]
		});
		me.callParent(arguments);
	}
});