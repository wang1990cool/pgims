Ext.define('App.store.cjlr.MsCjqrStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
           	model: 'App.model.cjlr.KcztModel',
            storeId: 'msCjqrStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewJxCjjlztList2.action',
                actionMethods: 'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{ params:''}
            },
            sorters:[{property:"kkkh",direction:"DESC"}]
        }, cfg)]);
    }
});
