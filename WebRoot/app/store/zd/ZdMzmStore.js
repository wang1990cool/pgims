Ext.define('App.store.zd.ZdMzmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
					autoLoad : true,
					storeId : 'ZdMzmStore',
					fields : [{
								name : 'mzm'
							}, {
								name : "mzmc"
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
							zdName : 'ZdMzm'
						},
						simpleSortMode : true
					},
					sorters : [{
								property : 'mzm',
								direction : 'ASC'
							}]
				}, cfg)]);
			}
		});
