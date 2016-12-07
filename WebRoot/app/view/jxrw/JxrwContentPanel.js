Ext.define('App.view.jxrw.JxrwContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jxrwContentPanel',
	
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
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId:'pyfaNav',
    	    	   labelText:'教学任务打印'
    	       }),
    	       Ext.create('App.view.jxrw.JxrwSearchForm',{
    	       		itemId:'jxrwSearchForm',
    	       		hidden:true
    	       }),
    	       Ext.create('App.view.jxrw.JxrwList',{
    	    	   itemId:'jxrwList',
    	    	   layout:'auto'
        	})]
        });
        me.callParent(arguments);
    }
});