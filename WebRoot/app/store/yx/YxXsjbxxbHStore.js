Ext.define('App.store.yx.YxXsjbxxbHStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.yx.YxXsjbxxbHModel',
            storeId: 'YxXsjbxxbHStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'lsXsjbxxList.action',
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
