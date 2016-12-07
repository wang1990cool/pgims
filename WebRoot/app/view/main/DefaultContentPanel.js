Ext.define('App.view.main.DefaultContentPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.contentPanel1',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'fit',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[]
        });
        me.callParent(arguments);
    }
});