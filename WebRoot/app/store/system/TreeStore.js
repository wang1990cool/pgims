Ext.define('App.store.system.TreeStore', {
    extend: 'Ext.data.TreeStore',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({        					
//				            storeId:'treestore',
//				            proxy:{
//				                    type:'memory',
//				                    data:data,
//				                    render: {
//				                   		 type: 'json'
//				                    }
//				            },//				                    	root:{expanded: true}
				            
        }, cfg)]);
    }
});
