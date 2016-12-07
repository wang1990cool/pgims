Ext.define('App.store.rs.XsdsgxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.rs.XsdsgxModel',
            storeId: 'XsdsgxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xsdsgxList.action',
                actionMethods: 'POST',
                reader: {
                	idProperty: 'iid',
                    root: 'list',
                    totalProperty: 'total'
                },
                simpleSortMode: true,
                extraParams:{params:''}
            },
            sorters:[{property:"id",direction:"DESC"}]
        }, cfg)]);
    }
});
