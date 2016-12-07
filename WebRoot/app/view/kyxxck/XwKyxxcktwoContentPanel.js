Ext.define('App.view.kyxxck.XwKyxxcktwoContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.xwKyxxcktwoContentPanel',
	itemId: 'xwKyxxcktwoContentPanel',
	
	config: { parentId: 0 },
	border: false,
	defaults:{
		split: true
	},
	layout: 'border',
	height:document.body.clientHeight-300,
	width:document.body.clientWidth-210,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items:[
	       			Ext.create('App.view.kyxxck.XwKyzzbList',{
		    			itemId:'xwKyzzbList',
		    			title:'科研著作信息',
		    			region : 'west',
		    			width : 550,
		    			minWidth: 200		    			
		    		}),
//		    		
		    		Ext.create('App.view.kyxxck.XwKyjlbList',{
						itemId:'xwKyjlbList',
				    	title:'科技获奖信息',
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