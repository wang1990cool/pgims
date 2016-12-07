Ext.define('App.store.jxpk.PksjStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	fields:['1', '2', '3','4','5','6','7'],
            storeId: 'PksjStore',
            proxy: {
                type: 'ajax',
                url: 'jxPkkzgetOccupied.action',
                actionMethods:'post',
                reader: {
                    root: 'isOccupied'
                }
            }
        }, cfg)]);
    }
});
