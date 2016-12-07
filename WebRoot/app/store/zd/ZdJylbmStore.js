Ext.define('App.store.zd.ZdJylbmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdJylbmStore',
            remoteSort: true,
           fields : [{
						name : 'jylbm'
					}, {
						name : 'jylb'
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
					zdName : 'ZdJylbm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'jylbm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
