Ext.define('App.view.system.SystemMainPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.systemMainPanel',

	config: { parentId: 0 },
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [Ext.create('App.view.main.ContentMenuTree',{
            		itemId:'contentMenuTree',
	            	parentId:me.getParentId()
	            }),
	            Ext.create('App.view.main.DefaultContentPanel',{
	            	itemId:'content'
	            })
            ],
		    reload: function(){
		    	var me = this;
		    	
		    	grid = me.down('grid');
		    	if(grid)
		    		grid.getStore().reload();
		    }
        });

        me.callParent(arguments);
    }
});