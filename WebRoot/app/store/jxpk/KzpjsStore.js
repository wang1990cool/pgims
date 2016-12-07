Ext.define('App.store.jxpk.KzpjsStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxpk.KzpjsModel',
            storeId: 'KzpjsStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'kzpjsList.action',
                actionMethods:'post',
                reader: {
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
