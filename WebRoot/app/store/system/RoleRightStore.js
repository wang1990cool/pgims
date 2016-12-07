Ext.define('App.store.system.RoleRightStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.system.RoleRightModel',
            storeId: 'RoleRightStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
               	url : 'zdGetZD.action',
                actionMethods:'post',
                reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
              	extraParams : {
					zdName : 'WebRight'
				}
            }
        }, cfg)]);
    }
});
