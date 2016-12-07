Ext.define('App.store.rs.ViewRsDsxxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.rs.ViewRsDsxxModel',
            storeId: 'ViewRsDsxxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewRsDsxxList.action',
                actionMethods: 'POST',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{params:''}
            },
            sorters:[{property:"id",direction:"DESC"}]
        }, cfg)]);
    }
});
