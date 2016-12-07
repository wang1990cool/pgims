Ext.define('App.store.yx.ViewYxJfqkAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.yx.ViewYxJfqkAllModel',
            storeId: 'ViewYxJfqkAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewYxJfqkAllList.action',
                actionMethods:'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{params:''}
            },
            sorters:[{property:"lqxy",direction:"ASC"}]
        }, cfg)]);
    }
});
