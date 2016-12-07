Ext.define('App.store.zqkh.ViewXwZqkhStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.zqkh.ViewXwZqkhModel',
            storeId: 'ViewXwZqkhStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewxwzqkhList.action',
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


