Ext.define('App.store.zd.ZdShmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdShmStore',
            remoteSort: true,
           fields : [{
						name : 'shztm'
					}, {
						name : "shzt"
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
					zdName : 'ZdShm'
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
