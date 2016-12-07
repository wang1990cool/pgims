Ext.define('App.store.jxkkjh.KKJHStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxkkjh.KKJHModel',
            storeId: 'KKJHStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'kkjhList.action',
                actionMethod: 'POST',
                reader: {
                	idProperty:'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:'',
                	operation:''
                }
            },
            sorters:[{property:'id',direction:'DESC'}]
        }, cfg)]);
    }
});
