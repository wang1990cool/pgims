Ext.define('App.store.zd.ZdXslxmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdXslxmStore',
            remoteSort: true,
            fields : [
            		{name : 'xslxm'}, {name : "xslx"}
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
						zdName : 'ZdXslxm'
					},
				simpleSortMode : true
		    },
			sorters : [{
				    property : 'xslxm',
					direction : 'ASC'
			}]
        }, cfg)]);
    }
});
