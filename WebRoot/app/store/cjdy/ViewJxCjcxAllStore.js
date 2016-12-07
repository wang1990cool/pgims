Ext.define('App.store.cjdy.ViewJxCjcxAllStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:false,
        	pageSize: pSize,
            model: 'App.model.cjdy.ViewJxCjcxAllModel',
            storeId: 'ViewJxCjcxAllStore',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'cjcxAllGetAll.action',
                actionMethods: 'post',
                reader: {
                    root: 'result.list',
                    totalProperty: 'result.total'
                },
                simpleSortMode: true,
                extraParams:{
                	params:''
                }
            }, 
            listeners:{
		    	   		load:function(store, operation, eOpts){
		    	   			 	   var k, repeat = [], state = {};
						            this.each(function (r) {
						                k = r.get('id');
						                if (state[k]) repeat.push(r);
						                else state[k] = true;
						            });
							       this.remove(repeat);
   					 		}
		    	  	 },

            
            sorters:[{property:'kclbm',direction:'ASC'}]
        }, cfg)]);
    }
});
