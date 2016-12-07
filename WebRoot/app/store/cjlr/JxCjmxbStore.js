//Ext.define('App.store.cjlr.JxCjmxbStore', {
//    extend: 'Ext.data.Store',
//    
//    constructor: function(cfg) {
//        var me = this;
//        cfg = cfg || {};
//        me.callParent([Ext.applyIf({
//        	autoLoad:false,
////        	pageSize: pSize,
//            model: 'App.model.cjlr.JxCjmxbModel',
//            storeId: 'JxCjmxbStore',
//            remoteSort: true,
//            proxy: {
//                type: 'ajax',
//                url: 'jxCjmxgetCjmx.action',
//                actionMethod: 'POST',
//                reader: {
//                	idProperty:'iid',
//                    root: 'result.list',
//                    totalProperty: 'result.total'
//                },
//                simpleSortMode: true,
//                extraParams:{
//                	params:''
//                }
//            },
//            sorters:[{property:'xh',direction:'DESC'}]
//        }, cfg)]);
//    }
//});

Ext.define('App.store.cjlr.JxCjmxbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
//        	pageSize: pSize,
            model: 'App.model.cjlr.JxCjmxbModel',
            storeId: 'JxCjmxbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxCjmxgetCjmx.action',
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

