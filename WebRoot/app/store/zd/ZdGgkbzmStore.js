Ext.define('App.store.zd.ZdGgkbzmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,      
            storeId: 'ZdGgkbzmStore',
            remoteSort: true,
            fields : [
            	{name : 'ggkbz'},{name : "ggkbzm"},{name : "pxh"}
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
					zdName : 'ZdGgkbzm'
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
