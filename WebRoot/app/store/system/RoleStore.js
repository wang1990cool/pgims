Ext.define('App.store.system.RoleStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.system.RoleModel',
            storeId: 'RoleStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'roleList.action',
                actionMethods:'post',
                reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            }
        }, cfg)]);
    }
});
