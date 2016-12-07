Ext.define('App.store.ktbg.XwKtbgsqbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.ktbg.XwKtbgsqbModel',
            storeId: 'XwKtbgsqbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xwKtbgsqbList.action',
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


