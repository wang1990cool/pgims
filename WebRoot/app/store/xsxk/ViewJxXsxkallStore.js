Ext.define('App.store.xsxk.ViewJxXsxkallStore', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.xsxk.ViewJxXsxkallModel',
            storeId: 'ViewJxXsxkallStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewJxXsxkallList.action',
                actionMethods: 'post',
                reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            },
             sorters:[{property:'xh',direction:'ASC'}]
        }, cfg)]);
    }
});
