Ext.define('App.store.pyfa.FAKCAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.pyfa.FAKCModel',
            storeId: 'FAKCAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'fakcGetAll.action',
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
            sorters:[{property:'kch',direction:'ASC'}]
        }, cfg)]);
    }
});
