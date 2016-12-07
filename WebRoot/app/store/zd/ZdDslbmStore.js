Ext.define('App.store.zd.ZdDslbmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,      
            storeId: 'ZdDslbmStore',
            remoteSort: true,
            fields : [
            	{name : 'dslbm'},{name : "dslb"},{name : "pxh"}
            ],
		   	proxy : {
		   		type : 'ajax',
		   		url : 'zdGetZD.action',
		   		actionMethods : 'post',
		   		reader : {
		   			idProperty:'iid',
		   			root : 'result.list',
		   			totalProperty : 'totalProperty'
		   		},
		   		extraParams : {
					zdName : 'ZdDslbm'
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
