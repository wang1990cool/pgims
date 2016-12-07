Ext.define('App.view.main.SecMenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.secMenuTree',

	config: { parentId: 0 },
	region: 'west',
	border: false,
	split: true,
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