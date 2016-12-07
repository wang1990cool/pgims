Ext.define('App.store.zd.ZdXwlbmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdXwlbmStore',
            remoteSort: true,
      	    fields : [{
						name : 'xwlbm'
					}, {
						name : 'xwlb'
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
					zdName : 'ZdXwlbm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'xwlbm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
