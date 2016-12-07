Ext.define('App.store.rs.XsdsgxJgxxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.rs.JgxxModel',
            storeId: 'XsdsgxJgxxStore',
            remoteSort: true,
            proxy: {                type: 'ajax',
                url: 'xsDsGxList.action',
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
