Ext.define('App.view.main.ContentMenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.contentMenuTree',

	config: { parentId: 0 },
	border: false,
	split: true,
	region: 'west',
	width: 200,
	rootVisible: false,
    lines: false,
    autoScroll: true,
    collapsible: true,
	
    initComponent: function() {
        var me = this;
        
        me.store = Ext.create('App.store.main.MenuTreeStore',{
			root: {id: me.getParentId(),expanded: false}
		});

        Ext.applyIf(me, {
        });
        
        me.callParent(arguments);
    }
});