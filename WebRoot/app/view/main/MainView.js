Ext.define('App.view.main.MainView', {
    extend: 'Ext.container.Viewport',

	requires: ['Ext.ux.TabCloseMenu'],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
	            Ext.create('App.view.main.HeaderPanel',{
	            	id:'headerPanel',
	                region : 'north',
	            	height : 65
	            }),
	            Ext.create('App.view.main.CenterPanel',{
	            	id:'centerPanel',
	                region: 'center',
	                layout:'fit',
	                flex: 1
	            })
            ]
        });

        me.callParent(arguments);
    }
});