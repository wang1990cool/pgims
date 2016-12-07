Ext.define('App.store.cjlr.ViewJxCjmxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
//        	pageSize: pSize,
            model: 'App.model.cjlr.ViewJxCjmxModel',
            storeId: 'ViewJxCjmxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewJxCjmxbgetCjmx.action',
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
