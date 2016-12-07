Ext.define('App.store.rs.XsdsgxXsJcxxStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.pygrjh.ViewXsJcxxModel',
            storeId: 'XsdsgxXsJcxxStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewXsjcxxList.action',
                actionMethod: 'POST',
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
            sorters:[{property:'dsh',direction:'DESC, xh DESC'}]
        }, cfg)]);
    }
});
