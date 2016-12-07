Ext.define('App.store.zd.ZdWjlxmStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ZdWjlxmStore',
            remoteSort: true,
            fields : [{
						name : 'wjlxm'
					}, {
						name : "wjlx"
					}, {
						name : "wjlxfjd"
					}, {
						name : "wjml"
					}, {
						name : "pxh"
					} ,{
						name : "sfyx"
					}, {
						name : "bz"
					}, {
						name : "wjlb"
					}],
			proxy : {
				type : 'ajax',
				url : 'zdGetZD.action',
				actionMethods : 'post',
				reader : {
					root : 'result.list',
					totalProperty : 'totalProperty'
				},
				extraParams : {
					zdName : 'ZdWjlxm'
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
