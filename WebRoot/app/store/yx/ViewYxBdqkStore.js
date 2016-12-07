Ext.define('App.store.yx.ViewYxBdqkStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.yx.ViewYxBdqkModel',
            storeId: 'ViewYxBdqkStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewYxBdqkList.action',
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
