Ext.define('App.store.zd.ZdYxdmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdYxdmStore',
            remoteSort: true,
            fields : [
           	
           		{name : 'yxmc'}, {name : "yxdm"}
            ],
		    proxy : {
				type : 'ajax',
				url : 'zdGetZD.action',
				actionMethods : 'post',
				reader : {
							root : 'result.list',
						    totalProperty : 'totalProperty'
		       			 },
       			 extraParams : {
							zdName : 'ZdYxdm'
						},
    			simpleSortMode : true
			},
			sorters : [{
						    property : 'yxdm',
							direction : 'ASC'
			}]
        }, cfg)]);
    }
});
