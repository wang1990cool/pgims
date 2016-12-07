Ext.define('App.store.cjlr.JxCjtjsjbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.cjlr.JxCjtjsjbModel',
            storeId: 'JxCjtjsjbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxCjtjsjbList.action',
                actionMethod: 'POST',
                reader: {
                	idProperty:'iid',
                    root: 'list',
                    totalProperty: 'total'
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
