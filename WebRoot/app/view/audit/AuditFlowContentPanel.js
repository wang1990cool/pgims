Ext.define('App.view.audit.AuditFlowContentPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.auditFlowContentPanel',
	
	config: { parentId: 0 },
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items:[
    	       Ext.create('App.view.main.NavBar',{
    	    	   itemId: 'auditFlowNav',
    	    	   labelText: '流程设置',
    	    	   imgCls:'ba_16'
    	       }),
    	       
    	       Ext.create('App.view.audit.AuditFlowSearchForm',{
    	       	   itemId: 'searchForm',
    	       	   hidden: true
    	       }),
    	       
    	       Ext.create('App.view.audit.AuditFlowList',{
    	       	   itemId: 'auditFlowList',
    	       	   layout: 'auto'
    	       })
    	     ]
        });
        me.callParent(arguments);
    }
});