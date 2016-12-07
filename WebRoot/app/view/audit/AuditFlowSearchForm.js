Ext.define('App.view.audit.AuditFlowSearchForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.auditFlowSearchForm',
	
	title:'查询条件',
    autoWidth: true,
    bodyPadding: 5,
    layout:'form',
    
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
		    items: [{
		    	xtype: 'fieldcontainer',
			    layout:'hbox',
			    defaults:{labelAlign: 'right',width:260,labelWidth: 100},
			    items: [{
			    	xtype: 'textfield',
			    	itemId:'flowName',
			    	name:'流程名',
			    	fieldLabel: '流程名'
		        },{
			        xtype: 'textfield',
			    	itemId:'flowCode',
			    	name:'flowCode',
			    	fieldLabel: '流程码'
			 	}]} ],
			 	dockedItems: [{
			    xtype: 'toolbar',
			    dock: 'bottom',
			    style:'background:transparent;',
			    layout:{type:'hbox',align:'center',pack:'center'},
			    items: [{
	                itemId: 'searchBtn',
	                text: '查询',
	                tooltip: '查询',
	                iconCls: 'search',
	                action: 'search'
	            },{
	                itemId: 'searchAllBtn',
	                text: '全部',
	                tooltip: '全部',
	                iconCls: 'searchAll',
	                action: 'searchAll'
	            }]
			}]
		});
		
		me.callParent(arguments);
	}
});