Ext.define('App.store.cjlr.JxKcztStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
           	model: 'App.model.cjlr.KcztModel',
            storeId: 'jxKcztStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewJxCjjlztlist.action',
                actionMethods: 'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'total'
                },
                simpleSortMode: true,
                extraParams:{ params:''}
            },
            sorters:[{property:"kkkh",direction:"DESC"}]
        }, cfg)]);
    }
});
