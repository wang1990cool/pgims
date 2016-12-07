Ext.define('App.store.kyjl.XwKyjlzlbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.kyjl.XwKyjlzlbModel',
            storeId: 'XwKyjlzlbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xwKyjlzlbList.action',
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


