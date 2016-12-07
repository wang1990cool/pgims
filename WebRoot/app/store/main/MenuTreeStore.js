Ext.define('App.store.main.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
            model: 'App.model.main.TreeModel',
            storeId: 'TreeStore',
            proxy: {
                type: 'ajax',
                url: 'getMenus.action',
                actionMethods: 'post',
                reader: {type: 'json'}
            }
        }, cfg)]);
    }
});
