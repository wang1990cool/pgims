Ext.define('App.store.zd.ZdGjdqmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,      
            storeId: 'ZdGjdqmStore',
            remoteSort: true,
            fields : [
            	{name : 'gjdqm'},{name : "gjdqmc"},{name : "pxh"}
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
					zdName : 'ZdGjdqm'
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
