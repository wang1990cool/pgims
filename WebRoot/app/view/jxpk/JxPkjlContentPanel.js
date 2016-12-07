Ext.define('App.view.jxpk.JxPkjlContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jxPkjlContentPanel',
	itemId: 'jxPkjlContentPanel',
	
	config: { parentId: 0 },
	border: false,
	defaults:{
		split: true
	},
	layout: 'border',
	height:document.body.clientHeight-193,
	width:document.body.clientWidth-210,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items:[
	       			Ext.create('App.view.jxpk.SkxxList',{
		    			itemId:'skxxList',
		    			title:'课程信息',
		    			region : 'west',
		    			width : 550,
		    			minWidth: 200		    			
		    		}),
//		    		
		    		Ext.create('App.view.jxpk.JxPkjlList',{
						itemId:'jxPkjlList',
				    	title:'排课信息',
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