Ext.define('App.store.cjcx.CjcxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
           	model: 'App.model.cjcx.ViewJxCjcxModel',
            storeId: 'cjcxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewJxCjcxList1.action',
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
