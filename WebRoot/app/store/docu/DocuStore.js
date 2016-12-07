Ext.define('App.store.docu.DocuStore',{
	extend: 'Ext.data.Store',
	storeId: 'DocuStore',
	
	model: 'App.model.docu.DocuModel',
	remoteSort: true,
	proxy: {
		type: 'ajax',
		url: 'docuList.action',
		actionMethods: 'post',
		reader: {
			idProperty: 'iid',
			root: 'result.list',
			totalProperty: 'result.total'
		},
		simpleSortMode: true
	}
});