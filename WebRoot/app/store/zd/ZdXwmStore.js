Ext.define('App.store.zd.ZdXwmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
							autoLoad : true,
							storeId : 'ZdXwmStore',
							fields : [{
										name : 'xwm'
									}, {
										name : "xw"
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
									zdName : 'ZdXwm'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'xwm',
										direction : 'ASC'
									}]
						}, cfg)]);
			}
		});
