Ext.define('App.store.zd.ZdDsztmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,      
            storeId: 'ZdDsztmStore',
            remoteSort: true,
            fields : [
            	{name : 'dsztm'},{name : "dszt"},{name : "pxh"}
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
					zdName : 'ZdDsztm'
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
