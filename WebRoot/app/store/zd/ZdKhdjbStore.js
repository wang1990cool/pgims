Ext.define('App.store.zd.ZdKhdjbStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
        	pageSize: pSize,           
            storeId: 'ZdKhdjbStore',
            remoteSort: true,
	        fields : [
	        	{name : 'bm'}, {name : 'mc'},{name :'pxh'}],
			proxy : {
					type : 'ajax',
					url : 'zdGetZD.action',
					actionMethods : 'post',
					reader : {
						root : 'result.list',
						totalProperty : 'totalProperty'
					},
					extraParams : {
						zdName : 'ZdKhdjb'
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
