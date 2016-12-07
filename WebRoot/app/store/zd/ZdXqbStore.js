Ext.define('App.store.zd.ZdXqbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdXqbStore',
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
						zdName : 'ZdXqb'
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
