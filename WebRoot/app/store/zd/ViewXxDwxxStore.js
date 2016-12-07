Ext.define('App.store.zd.ViewXxDwxxStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
				   	autoLoad : true,
					storeId : 'ViewXxDwxxStore',
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
				   			zdName:'ViewXxDwxx'
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
