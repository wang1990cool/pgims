Ext.define('App.store.system.UserStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.system.UserModel',
            storeId: 'UserStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'userList.action',
                actionMethods:'post',
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
          sorters:[{property:'userName',direction:'DESC'}]
        }, cfg)]);
    }
});
