Ext.define('App.view.audit.AuditFlowList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.auditFlowList',
	
	store: 'AuditFlowStore',
    columnLines: true,
    title: '审核流程',
    autoScroll:true,
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
            flowName:'流程名',flowCode: '流程码', bz: '备注'
        };
        
        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
            	{ text: exportCols['flowName'], width: 150, dataIndex: 'flowName', sortable: false },
            	{ text: exportCols['flowCode'], width: 150, dataIndex: 'flowCode', sortable: false },
            	{ text: exportCols['bz'], width: 150, dataIndex: 'bz', sortable: false ,flex:1}
		    ],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   insertBtns:[{
							itemId : 'addFlowBtn',
							text : '流程设置',
							tooltip : '流程设置',
							iconCls : 'add_16',
							action : 'addFlow'
    	    	   }]
    	       }),
    	       Ext.create('Ext.PagingToolbar', {
    	    	   pageSize: pSize,
    	    	   dock: 'bottom',
    	    	   store: me.store,
    	    	   displayInfo: true,
    	    	   displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
    	    	   emptyMsg: '没有数据',
    	    	   plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });

        me.callParent(arguments);
    }
});
