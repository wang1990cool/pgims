Ext.define('App.store.skxx.GgkZxkkjhStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
//        	autoLoad:true,
        	pageSize: pSize,
            model: 'App.model.skxx.ZxkkjhModel',
            storeId: 'GgkZxkkjhStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'viewZxkkjhPkList.action',
                actionMethod: 'POST',
                reader: {
                	idProperty:'iid',
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:'',
                	ggkbzm:'1'
                }
            },
//    	 listeners:{
//    	   		load:function(store, operation, eOpts){
//			                store.filterBy(function(record) {
//			                    return record.get('ggkbzm') == '1';  
//			             });
//				 }
//    	    },
            
            sorters:[{property:'kch',direction:'DESC'}]
        }, cfg)]);
    }
});