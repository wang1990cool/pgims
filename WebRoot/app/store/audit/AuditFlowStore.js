Ext.define('App.store.audit.AuditFlowStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model:'App.model.audit.AuditFlowModel',
            storeId: 'AuditFlowStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'auditFlowList.action',
                actionMethods: 'post',
                reader: {
                	idProperty: 'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{ params:''}
            },
            sorters:[{property:"id",direction:"ASC"}]
        }, cfg)]);
    }
});
