Ext.define('App.store.pygrjh.PYGRJHKCStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.pygrjh.PYGRJHKCModel',
            storeId: 'PYGRJHKCStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'grjhkcList.action',
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
