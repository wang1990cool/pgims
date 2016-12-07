Ext.define('App.store.zd.ZdHyzkmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdHyzkmStore',
            remoteSort: true,
           	fields : [
           		{name : 'hyzkm'}, {name : "hyzk"}],
			proxy : {
				type : 'ajax',
				url : 'zdGetZD.action',
			    actionMethods : 'post',
			    reader : {
							root : 'result.list',
							totalProperty : 'totalProperty'
				},
				extraParams : {
					zdName : 'ZdHyzkm'
				},
				simpleSortMode : true
			},
			sorters : [{
							property : 'hyzkm',
							direction : 'ASC'
			}]
        }, cfg)]);
    }
});
