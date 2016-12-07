Ext.define('App.store.attachData.AttachStore',{
	extend: 'Ext.data.Store',
	
	constructor: function(cfg){
		var me = this;
		cfg = cfg || {};
		me.callParent([
			Ext.applyIf({
				storeId: 'AttachStore',
				model: 'App.model.attachData.AttachModel',
				proxy: {
			        type: 'ajax',
			         url: 'attachGetAll.action',
			        actionMethods: 'post',
               	    reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                extraParams:{billNo:me.billNo},
			        simpleSortMode: true
			    }}, cfg)]);
    }
});