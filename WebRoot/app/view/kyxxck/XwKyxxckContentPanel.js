Ext.define('App.view.kyxxck.XwKyxxckContentPanel', {
	extend: 'Ext.panel.Panel',
//	alias: 'widget.PKContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	autoScroll:true,
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.kyxxck.XwKyxxckSearchForm',{
    	    	   itemId:'xwKyxxckSearchForm'
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.kyxxck.XwKyxxckoneContentPanel',{
//    	    	   itemId:'content'
        	}), Ext.create('App.view.kyxxck.XwKyxxcktwoContentPanel',{
//    	    	   itemId:'content'
        	})]
        });
        me.callParent(arguments);
        
    }
});