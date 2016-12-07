Ext.define('App.store.zd.ZdZzmmmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
							autoLoad : true,
							storeId : 'ZdZzmmmStore',
							fields : [{
										name : 'zzmmm'
									}, {
										name : "zzmm"
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
									zdName : 'ZdZzmmm'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'zzmmm',
										direction : 'ASC'
									}]
						}, cfg)]);
			}
		});
