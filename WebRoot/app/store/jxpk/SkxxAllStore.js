Ext.define('App.store.jxpk.SkxxAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.skxx.SKXXModel',
            storeId: 'SkxxAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxPkjlgetSkxxList.action',
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