Ext.define('App.store.zd.ZdXzqhmStore', {
			extend : 'Ext.data.TreeStore',

			constructor : function(cfg) {
				var me = this;
				cfg = cfg || {};
				me.callParent([Ext.applyIf({
							fields : [{
										name : "id"
									}, {
										name : "orderid"
									}, {
										name : "parentid"
									}, {
										name : "text"
									}, {
										name : "qtip"
									}, {
										name : "url"
									}, {
										name : "iconCls"
									}, {
										name : "leaf"
									}, {
										name : "showflag"
									}, {
										name : "params"
									}],
							storeId : 'ZdXzqhmStore'
						}, cfg)]);
			}
		});
