Ext.define('App.store.kylw.ViewXwKylwzbCKStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.kylw.ViewXwKylwzbModel',
            storeId: 'ViewXwKylwzbCKStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewXwKylwzbListCK.action',
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
            sorters:[{property:'id',direction:'DESC'}]
        }, cfg)]);
    }
});


