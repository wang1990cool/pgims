Ext.define('App.store.yx.YxSjkzbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.yx.YxSjkzbModel',
            storeId: 'YxSjkzbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'yxSjkzList.action',
                actionMethods:'post',
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
