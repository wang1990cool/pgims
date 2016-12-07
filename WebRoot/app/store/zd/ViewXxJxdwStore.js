Ext.define('App.store.zd.ViewXxJxdwStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
				   	autoLoad : true,
					storeId : 'ViewXxJxdwStore',
					fields : [{name : 'dwmc'},{name : "dwh"}],
					remoteSort : true,
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {
				   			zdName:'ViewXxJxdw'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
					   		property : 'dwh',
					   		direction : 'ASC'
					   	}]
				   }, cfg)]);
			}
		});
