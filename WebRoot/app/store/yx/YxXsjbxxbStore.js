Ext.define('App.store.yx.YxXsjbxxbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.yx.YxXsjbxxbModel',
            storeId: 'YxXsjbxxbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'yxXsjbxxList.action',
                actionMethod: 'POST',
                reader: {
                	idProperty:'iid',
//                    root: 'result.list',
//                    totalProperty: 'result.total'
                    root: 'list',
                    totalProperty: 'total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            },
            sorters:[{property:'zkzh',direction:'ASC'}]
        }, cfg)]);
    }
});
