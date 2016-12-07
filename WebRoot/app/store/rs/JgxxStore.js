Ext.define('App.store.rs.JgxxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.rs.JgxxModel',
            storeId: 'JgxxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jgxxList.action',
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
