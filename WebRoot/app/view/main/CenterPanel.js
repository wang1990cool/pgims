Ext.define('App.view.main.CenterPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.centerPanel',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [
		        Ext.create('App.view.main.CenterTabPanel',{
		        	id:'mainContent'
		        })
	        ],
	        dockedItems: [
               Ext.create('App.view.main.MainToolbar',{
    	    	   itemId:'maintoolbar',
    	    	   dock: 'top'
	        })]
        });
        me.callParent(arguments);
    }
});