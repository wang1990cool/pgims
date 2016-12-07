Ext.define('App.store.jxrw.JxrwStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxpk.JxPkjlModel',
            storeId: 'JxrwStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'jxrwList.action',
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
            sorters:[{property:'kkkh',direction:'DESC'},{property:'kkdwh',direction:'DESC'}]
        }, cfg)]);
    }
});
