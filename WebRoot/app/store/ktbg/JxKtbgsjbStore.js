Ext.define('App.store.ktbg.JxKtbgsjbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.ktbg.JxKtbgsjbModel',
            storeId: 'JxKtbgsjbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxKtbgsjbList.action',
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
            sorters:[{property:'id',direction:'DESC'}]
        }, cfg)]);
    }
});


