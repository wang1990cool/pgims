Ext.define('App.store.jxkkjh.XSLXStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            model: 'App.model.jxkkjh.XSLXModel',
            storeId: 'XSLXStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'xslxList.action',
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
            }
        }, cfg)]);
    }
});
