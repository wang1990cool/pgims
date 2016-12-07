Ext.define('App.store.zd.ZdXsdqztmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdXsdqztmStore',
            remoteSort: true,
           fields : [{
						name : 'xsdqztm'
					}, {
						name : "xsdqzt"
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
					zdName : 'ZdXsdqztm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'xsdqztm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
