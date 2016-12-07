Ext.define('App.store.zd.ZdPyfsmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdPyfsmStore',
            remoteSort: true,
	        fields : [
	        	{name : 'bm'}, {name : 'mc'}],
			proxy : {
					type : 'ajax',
					url : 'zdGetZD.action',
					actionMethods : 'post',
					reader : {
						root : 'result.list',
						totalProperty : 'totalProperty'
					},
					extraParams : {
						zdName : 'ZdPyfsm'
					},
					simpleSortMode : true
			},
			sorters : [{
							property : 'bm',
							direction : 'ASC'
			}]
        }, cfg)]);
    }
});
