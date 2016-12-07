Ext.define('App.view.jxpk.PKContentPanel', {
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
    	       Ext.create('App.view.jxpk.PKSearchForm',{
    	    	   itemId:'pkSearchForm'
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.jxpk.JxPkjlContentPanel',{
    	    	   itemId:'content'
        	})]
        });
        me.callParent(arguments);
        
    }
});