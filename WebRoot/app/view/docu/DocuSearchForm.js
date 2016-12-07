Ext.define('App.view.docu.DocuSearchForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.docuSearchForm',
	
	autoWidth: 'auto',
	bodyPadding: 5,
	layout: 'form',
	defaults: {
		xtype: 'textfield',
		readOnlyCls: 'x-item-disabled',
		autoHeight: true,
		labelAlign: 'right',
		width: 260,
		labelWidth: 100,
		padding: '3 0 0 0',
		size: 20
	},
	
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
			items: [{
				xtype: 'fieldcontainer',
				layout: 'hbox',
				defaults: {labelAlign: 'right'},
				items: [{
			    	xtype: 'textfield',
			    	itemId:'fileNo',
			    	name:'fileNo',
			    	fieldLabel: '文件编号'
		        },{
					xtype : 'combo',
					itemId : 'fileTypeCode',
					name : 'fileTypeCode',
					fieldLabel : '文件类型',
					allowBlank : false,
		  			triggerAction: 'all',
		            editable: false,
		            forceSelection: true, 
					blankText : '必填！',
					queryMode : 'local',
					displayField : 'codeName',
					valueField : 'codeId',
					store:Ext.create('Ext.data.Store',{
						autoLoad:true,
						proxy: {
							type: 'ajax',
							url: 'getDicValue.action',
	          				reader: {
				                root: 'result.list',
				                totalProperty: 'result.total'
				            },
							extraParams: {dicTabName:'ZB_TY_WJLX'}	          				
						},  
				 		fields:[{name:'codeId',type:'string'},{name:'codeName',type:'string'}]
					}) 
	        	},{
			    	xtype: 'textfield',
			    	itemId:'fileCName',
			    	name:'fileCName',
			    	fieldLabel: '文件名称'
		        }]
			},{
	        	xtype: 'fieldcontainer',
			    layout:'hbox',
				defaults:{labelAlign: 'right'},
			    items: [{
			    	xtype: 'textfield',
			    	itemId:'fileUnit',
			    	name:'fileUnit',
			    	fieldLabel: '发布单位'
				},{
		            xtype: 'datefield',
		            itemId:'fileBTime',
		            fieldLabel: '发布时间 从'
		        },{
		            xtype: 'datefield',
		            itemId:'fileETime',
		            fieldLabel: '至'
		        }]
		    }],
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