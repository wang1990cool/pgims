Ext.define('App.store.attachData.ViewPyfaFileTypeStore', {
    extend: 'Ext.data.Store',
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
        	autoLoad:true,
            storeId: 'ViewPyfaFileTypeStore',
            remoteSort: true,
           	fields : [
           		{name : 'fileCode'}, {name : "fileType"},{name:'attachCode'}],
			proxy : {
				type : 'ajax',
				url : 'zdGetZD.action',
			    actionMethods : 'post',
			    reader : {
							root : 'result.list',
							totalProperty : 'totalProperty'
				},
				extraParams : {
					zdName : 'ViewPyfaFiletype'
				},
				simpleSortMode : true
			},
			sorters : [{
							property : 'fileCode',
							direction : 'ASC'
			}]
        }, cfg)]);
    }
});
