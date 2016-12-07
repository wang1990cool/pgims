Ext.define('App.store.zqkh.XwZqkhzlbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.zqkh.XwZqkhzlbModel',
            storeId: 'XwZqkhzlbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'zlzqkhGetAll.action',
                actionMethod: 'POST',
                reader: {
                	idProperty:'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            },
            sorters:[{property:'id',direction:'ASC'}]
        }, cfg)]);
    }
});
