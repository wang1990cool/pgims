Ext.define('App.store.zd.TyXnbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,      
            storeId: 'TyXnbStore',
            remoteSort: true,
            fields : [
            	{name : 'xn'},{name : "xq"},{name : "pxh"},{name:'pkbz'}
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
					zdName : 'TyXnb'
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
