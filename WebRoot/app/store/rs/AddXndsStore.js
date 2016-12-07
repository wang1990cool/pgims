Ext.define('App.store.rs.AddXndsStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	pageSize: pSize,
            model: 'App.model.rs.AddXndsModel',
            storeId: 'AddXndsStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'dsxxbList.action',
                actionMethods: 'POST',
                reader: {
                	idProperty: 'iid',
                    root: 'list',
                    totalProperty: 'total'
                },
                simpleSortMode: true,
                extraParams:{params:''}
            },
            sorters:[{property:"id",direction:"DESC"}]
        }, cfg)]);
    }
});
