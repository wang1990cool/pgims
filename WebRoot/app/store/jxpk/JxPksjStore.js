Ext.define('App.store.jxpk.JxPksjStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxpk.JxPksjModel',
            storeId: 'JxPksjStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxPksjGetAll.action',
                actionMethods:'post',
                reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            }
        }, cfg)]);
    }
});
