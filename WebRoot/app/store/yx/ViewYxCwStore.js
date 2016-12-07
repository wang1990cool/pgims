Ext.define('App.store.yx.ViewYxCwStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.yx.ViewYxCwModel',
            storeId: 'ViewYxCwStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewYxCwList.action',
                actionMethods:'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'total'
                },
                simpleSortMode: true,
                extraParams:{params:''}
            },
            sorters:[{property:"xh",direction:"DESC"}]
        }, cfg)]);
    }
});
