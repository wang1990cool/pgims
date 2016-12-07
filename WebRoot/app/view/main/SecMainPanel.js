Ext.define('App.view.main.SecMainPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.secMainPanel',

	config: { parentId: 0 },
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
	            Ext.create('App.view.main.SecMenuTree',{
	            	itemId:'secMenuTree',
	            	parentId:me.getParentId()
	            }),
	            Ext.create('App.view.main.SecMenuPanel',{
	            	itemId:'content',
	            	parentId:me.getParentId(),
	            	navTitle:me.title
	            })
            ],
		    reload: function(){
		    	var me = this;
		    	
		    	content = me.down('secMenuView');
		    	content.getStore().reload();
		    }
        });

        me.callParent(arguments);
    }
});