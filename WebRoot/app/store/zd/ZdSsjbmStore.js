Ext.define('App.store.zd.ZdSsjbmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdSsjbmStore',
            remoteSort: true,
           fields : [{
						name : 'ssjbm'
					}, {
						name : "ssjb"
					}],
			proxy : {
				type : 'ajax',
				url : 'zdGetZD.action',
				actionMethods : 'post',
				reader : {
					root : 'result.list',
					totalProperty : 'totalProperty'
				},
				extraParams : {
					zdName : 'ZdSsjbm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'pxh',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
