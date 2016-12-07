Ext.define('App.store.cjdy.CjdyStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.xs.XsJcxxbModel',
            storeId: 'CjdyStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'cjdyList.action',
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
            sorters:[{property:'xh',direction:'DESC'}]
        }, cfg)]);
    }
});
