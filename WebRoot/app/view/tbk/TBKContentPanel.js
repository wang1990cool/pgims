Ext.define('App.view.tbk.TBKContentPanel', {
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
    	       Ext.create('App.view.tbk.TBKSearchForm',{
    	    	   itemId:'tbkSearchForm'
//    	    	   hidden:true
    	       }),
    	       Ext.create('App.view.tbk.JxPkjlContentPanel',{
    	    	   itemId:'content'
        	})]
        });
        me.callParent(arguments);
        
    }
});