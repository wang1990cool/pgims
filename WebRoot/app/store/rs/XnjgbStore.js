Ext.define('App.store.rs.XnjgbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.rs.XnjgbModel',
            storeId: 'XnjgbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xnjgbList.action',
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
