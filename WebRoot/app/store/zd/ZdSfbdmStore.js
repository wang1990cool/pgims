Ext.define('App.store.zd.ZdSfbdmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdSfbdmStore',
            remoteSort: true,
           fields : [{
						name : 'sfbdm'
					}, {
						name : "sfbd"
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
					zdName : 'ZdSfbdm'
				},
				simpleSortMode : true
			},
			sorters : [{
						property : 'sfbdm',
						direction : 'ASC'
			}]
        }, cfg)]);
    }
});
