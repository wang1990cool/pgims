Ext.define('App.store.zd.ZdSfzjlxmStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
				   	autoLoad : true,
					storeId : 'ZdSfzjlxmStore',
					fields : [{name : 'sfzjlxm'},{name : "sfzjlx"}],
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
							zdName : 'ZdSfzjlxm'
						},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'sfzjlxm',
				   		direction : 'ASC'
				   	}]
				   }, cfg)]);
			}
		});
