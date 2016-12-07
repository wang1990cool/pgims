Ext.define('App.store.audit.ViewUserRoleStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.audit.ViewUserRoleModel',
            storeId: 'ViewUserRoleStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewUserRolegetAll.action',
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
