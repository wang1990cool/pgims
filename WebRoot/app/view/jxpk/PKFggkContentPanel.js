Ext.define('App.view.jxpk.PKFggkContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.PKFggkContentPanel',
	
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
    	    	   itemId:'pkFggkSearchForm'
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.jxpk.JxPkjlFggkContentPanel',{
    	    	   itemId:'content'
        	})]
        });
        me.callParent(arguments);
        
    }
});