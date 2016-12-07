Ext.define('App.store.rs.XsdsgxXsGrxxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.xs.XsJcxxbModel',
            storeId: 'XsdsgxXsGrxxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xsJcxxbList.action',
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
