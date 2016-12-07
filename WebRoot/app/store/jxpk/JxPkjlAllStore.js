Ext.define('App.store.jxpk.JxPkjlAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxpk.JxPkjlModel',
            storeId: 'JxPkjlAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxPkjlgetPkjlList.action',
                actionMethods:'post',
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
           sorters:[{property:'kch',direction:'ASC,zjjsh ASC'}]
        }, cfg)]);
    }
});
