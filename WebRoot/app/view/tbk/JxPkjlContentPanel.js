Ext.define('App.view.tbk.JxPkjlContentPanel', {
	extend: 'Ext.panel.Panel',
	
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
		    		Ext.create('App.view.tbk.JxPkjlList',{
						itemId:'pkjlList',
				    	title:'排课记录',
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