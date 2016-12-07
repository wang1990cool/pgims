Ext.define('App.store.zd.ZdRxfsmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdRxfsmStore',
            remoteSort: true,
	        fields : [
	        	{name : 'rxfsm'}, {name : 'rxfs'}],
			proxy : {
					type : 'ajax',
					url : 'zdGetZD.action',
					actionMethods : 'post',
					reader : {
						root : 'result.list',
						totalProperty : 'totalProperty'
					},
					extraParams : {
						zdName : 'ZdRxfsm'
					},
					simpleSortMode : true
			},
			sorters : [{
							property : 'rxfsm',
							direction : 'ASC'
			}]
        }, cfg)]);
    }
});
