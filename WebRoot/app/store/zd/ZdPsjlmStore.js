Ext.define('App.store.zd.ZdPsjlmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdPsjlmStore',
            remoteSort: true,
           fields : [{
						name : 'psjlm'
					}, {
						name : "psjl"
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
					zdName : 'ZdPsjlm'
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
