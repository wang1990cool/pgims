Ext.define('App.store.main.PageStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'App.model.main.PageModel',
            storeId: 'PageStore',
            data : [
            	{"abbr":15, "value":15},    
		        {"abbr":20, "value":20},
		        {"abbr":30, "value":30},
				{"abbr":50, "value":50},
				{"abbr":100, "value":100},
				{"abbr":200, "value":200}
	        ]
        }, cfg)]);
    }
});