Ext.define('App.store.audit.AuditFlowLinkStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.audit.AuditFlowLinkModel',
            storeId: 'AuditFlowLinkStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'flowLinkGetAll.action',
                actionMethods: 'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{ params:''}
            },
            sorters:[{property:"oid",direction:"ASC"}]
        }, cfg)]);
    }
});
