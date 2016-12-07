Ext.define('App.store.jxpk.JxPkkzStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxpk.JxPkkzModel',
            storeId: 'JxPkkzStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxPkkzList.action',
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
