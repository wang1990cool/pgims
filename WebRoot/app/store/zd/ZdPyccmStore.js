Ext.define('App.store.zd.ZdPyccmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdPyccmStore',
            remoteSort: true,
            fields : [{
						name : 'pyccm'
					}, {
						name : "pycc"
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
					zdName : 'ZdPyccm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'pyccm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
