Ext.define('App.store.zd.ZdSfzxmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdSfzxmStore',
            remoteSort: true,
           fields : [{
						name : 'sfzxm'
					}, {
						name : "sfzx"
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
					zdName : 'ZdSfzxm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'sfzxm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
