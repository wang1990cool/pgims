Ext.define('App.store.jxkkjh.KKJHTGStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.jxkkjh.KKJHModel',
            storeId: 'KKJHTGStore',
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
                	operation:'shtg'
                }
            },
            sorters:[{property:'id',direction:'DESC'}]
        }, cfg)]);
    }
});
