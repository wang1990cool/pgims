Ext.define('App.store.main.MenuViewStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            model: 'App.model.main.MainTreeModel',
            storeId: 'ViewStore',
            proxy: {
                type: 'ajax',
                url: 'getMenus.action',
                actionMethods: 'post',
                reader: {type: 'json'},
                extraParams:{node:10000}
            }
        }, cfg)]);
    }
});
