Ext.define('App.store.jxpk.JxPkjlCtStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
            model: 'App.model.jxpk.JxPkjlModel',
            storeId: 'JxPkjlCtStore',
            sorters:[{property:'kch',direction:'ASC,zjjsh ASC'}]
        }, cfg)]);
    }
});
