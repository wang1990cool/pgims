Ext.define('App.view.main.ContentMainPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.contentMainPanel',

	config: { parentId: 0 },
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [Ext.create('App.view.main.ContentMenuTree',{
            		itemId:'contentMenuTree',
	            	parentId:me.getParentId()
	            }),
	            Ext.create('App.view.main.ContentPanel',{
	            	itemId:'content',
	            	parentId:me.getParentId()
	            })
            ],
		    reload: function(){
		    	var me = this;
		    	
		    	content = me.down('contentPanel');
		    	content.getStore().reload();
		    }
        });

        me.callParent(arguments);
    }
});