Ext.define('App.store.zd.ZdFwqbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdFwqbStore',
            remoteSort: true,
      	    fields : [{
						name : 'fwqmc'
					}, {
						name : 'fwqip'
					}, {
						name : 'username'
					}, {
						name : 'password'
					},{
						name : 'port'
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
					zdName : 'ZdFwqb'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'id',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
