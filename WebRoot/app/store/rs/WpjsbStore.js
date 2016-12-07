Ext.define('App.store.rs.WpjsbStore', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.rs.WpjsbModel',
            storeId: 'WpjsbStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'wpjsbList.action',
                method: 'POST',
                reader: {
                	idProperty: 'id',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                sorters:[{
                	property:'id',
                	direction:'DESC'
                }],
                extraParams:{
                	params:''
                }
            }
        }, cfg)]);
    }
});
