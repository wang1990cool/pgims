Ext.define('App.store.rs.JgxxAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model:'App.model.rs.JgxxModel',
            storeId: 'JgxxAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jgxxGetAll.action',
                actionMethods: 'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{ params:''}
            },
            sorters:[{property:"id",direction:"ASC"}]
        }, cfg)]);
    }
});
