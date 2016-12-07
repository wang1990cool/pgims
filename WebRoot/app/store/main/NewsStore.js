Ext.define('App.store.main.NewsStore', {
    extend: 'Ext.data.Store',

//    requires: ['NewsModel'],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'App.model.main.NewsModel',
//            storeId: 'NewsStore',
            remoteSort: true, 
//            proxy: {
//    		    type: 'ajax', 
//    		    actionMethods:'post',
////    		    url: 'newsLast.action',
//    		    extraParams: {
//    		        filters:'[{"type":"string","value":true,"field":"publish"}]',
//    		        sort:'orderid',
//    		        dir:'ASC'
//    			},
//    		    reader: { 
//    		        root: 'list', 
//    		        totalProperty  : 'total' 
//    		    }, 
//    		    simpleSortMode: true 
//    	    },
            sorters: [{ property: 'addtime', direction: 'desc'}] 
        }, cfg)]);
    }
});