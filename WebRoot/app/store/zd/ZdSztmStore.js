Ext.define('App.store.zd.ZdSztmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdSztmStore',
            remoteSort: true,
           fields : [{
						name : 'ztm'
					}, {
						name : "zt"
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
					zdName : 'ZdSztm'
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
