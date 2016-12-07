Ext.define('App.store.zd.ZdXlmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
							autoLoad : true,
							storeId : 'ZdXlmStore',
							fields : [{
										name : 'xlm'
									}, {
										name : "xl"
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
									zdName : 'ZdXlm'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'xlm',
										direction : 'ASC'
									}]
						}, cfg)]);
			}
		});
