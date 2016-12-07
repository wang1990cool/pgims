Ext.define('App.view.kyxxck.XwKyxxckoneContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.xwKyxxckoneContentPanel',
	itemId: 'xwKyxxckoneContentPanel',
	
	config: { parentId: 0 },
	border: false,
	defaults:{
		split: true
	},
	layout: 'border',
	height:document.body.clientHeight-300,//193
	width:document.body.clientWidth-210,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items:[
	       			Ext.create('App.view.kyxxck.XwKylwbList',{
		    			itemId:'xwKylwbList',
		    			title:'科研论文信息',
		    			region : 'west',
		    			width : 550,
		    			minWidth: 200		    			
		    		}),
//		    		
		    		Ext.create('App.view.kyxxck.XwKyzlbList',{
						itemId:'xwKyzlbList',
				    	title:'著作专利信息',
				        region:'center'				        
		    		})
		    	]
		    });
        me.callParent(arguments);
    	Ext.EventManager.onWindowResize(function(){ 
				me.setHeight(document.body.clientHeight-193)
  				me.setWidth(document.body.clientWidth-210)
			}) 
    	}
});