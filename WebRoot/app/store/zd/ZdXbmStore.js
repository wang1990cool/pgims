Ext.define('App.store.zd.ZdXbmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
							autoLoad : true,
							storeId : 'ZdXbmStore',
							fields : [{
										name : 'xb'
									}, {
										name : "xbm"
									}],
							remoteSort : true,
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdXbm'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : "xbm",
										direction : "DESC"
									}]
						}, cfg)]);
			}
		});
