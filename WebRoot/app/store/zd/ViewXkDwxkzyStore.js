Ext.define('App.store.zd.ViewXkDwxkzyStore', {
			extend : 'Ext.data.Store',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
				   	autoLoad : true,
					storeId : 'ViewXkDwxkzyStore',
					fields : [{name : 'zymc'},{name : "zydm"}],
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
				   			zdName:'ViewXkDwxkzy'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
					   		property : 'zydm',
					   		direction : 'ASC'
					   	}]
				   }, cfg)]);
			}
		});
